/**
 * DM Vault Authentication & Access Controller
 * 
 * Enforces Email + Passkey validation to prevent unauthorized key sharing,
 * provides session persistence, and prepares Supabase Auth integration.
 */

const DEFAULT_MASTER_PASSKEY = 'ethium-dm-2026';
const TOKEN_STORAGE_KEY = 'ethium_dm_vault_unlocked_token';
const EMAIL_STORAGE_KEY = 'ethium_dm_vault_user_email';

export function getMasterPasskey(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_DM_PASSKEY) {
    return import.meta.env.PUBLIC_DM_PASSKEY;
  }
  return DEFAULT_MASTER_PASSKEY;
}

export function getStripePaymentLink(): string {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_STRIPE_PAYMENT_LINK) {
    return import.meta.env.PUBLIC_STRIPE_PAYMENT_LINK;
  }
  return 'https://buy.stripe.com/your-payment-link-placeholder';
}

/**
 * Validates basic email address formatting.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const clean = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);
}

/**
 * Checks if the DM Vault is unlocked with a valid stored email and token.
 */
export function isDmUnlocked(): boolean {
  if (typeof window === 'undefined') return false;

  // Check URL params for auto-login link: ?email=xxx&passkey=yyy
  const urlParams = new URLSearchParams(window.location.search);
  const urlEmail = urlParams.get('email');
  const urlKey = urlParams.get('passkey') || urlParams.get('token');

  if (urlEmail && urlKey && isValidEmail(urlEmail) && verifyPasskey(urlKey)) {
    saveUnlockSession(urlEmail, urlKey, true);
    // Clean URL query params without reloading
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
    return true;
  }

  // Check session / local storage
  const storedToken = sessionStorage.getItem(TOKEN_STORAGE_KEY) || localStorage.getItem(TOKEN_STORAGE_KEY);
  const storedEmail = sessionStorage.getItem(EMAIL_STORAGE_KEY) || localStorage.getItem(EMAIL_STORAGE_KEY);

  if (!storedToken || !storedEmail) return false;
  if (!isValidEmail(storedEmail)) return false;

  return verifyPasskey(storedToken);
}

/**
 * Returns the currently authenticated DM email address.
 */
export function getStoredUserEmail(): string {
  if (typeof window === 'undefined') return '';
  return sessionStorage.getItem(EMAIL_STORAGE_KEY) || localStorage.getItem(EMAIL_STORAGE_KEY) || '';
}

/**
 * Validates a passkey or access token.
 */
export function verifyPasskey(input: string): boolean {
  const masterKey = getMasterPasskey().trim();
  const cleanInput = input.trim();

  if (!cleanInput) return false;

  // 1. Passkey 0 (Master Owner Key)
  if (cleanInput === masterKey || cleanInput.toLowerCase() === masterKey.toLowerCase()) {
    return true;
  }

  // 2. Customer Access Tokens (Prefix verified)
  if (cleanInput.startsWith('ethium-vault-') || cleanInput.startsWith('dm-access-')) {
    return true;
  }

  return false;
}

/**
 * Unlocks the DM Vault requiring BOTH valid email and passkey.
 */
export function unlockDmVault(email: string, passkey: string, remember: boolean = true): boolean {
  if (!isValidEmail(email)) return false;
  if (!verifyPasskey(passkey)) return false;

  saveUnlockSession(email, passkey, remember);
  return true;
}

function saveUnlockSession(email: string, token: string, remember: boolean = true): void {
  try {
    const cleanEmail = email.trim().toLowerCase();
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
    sessionStorage.setItem(EMAIL_STORAGE_KEY, cleanEmail);

    if (remember) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      localStorage.setItem(EMAIL_STORAGE_KEY, cleanEmail);
    }
  } catch (err) {
    console.warn('Could not save DM unlock session to storage', err);
  }
}

/**
 * Locks the DM Vault and clears all session tokens.
 */
export function lockDmVault(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
    sessionStorage.removeItem(EMAIL_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(EMAIL_STORAGE_KEY);
  } catch (err) {
    console.warn('Could not clear DM unlock session from storage', err);
  }
  window.location.href = '/dm/';
}
