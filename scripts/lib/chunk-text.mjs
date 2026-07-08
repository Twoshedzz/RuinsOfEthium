const SENTENCE_END = /[.!?](?:\s+|$)/g;

/**
 * Split prose into API-sized chunks, preferring sentence boundaries.
 */
export function chunkText(text, maxChars = 4000) {
  const chunks = [];
  let remaining = text.trim();

  while (remaining.length > 0) {
    if (remaining.length <= maxChars) {
      chunks.push(remaining);
      break;
    }

    let cutAt = maxChars;
    const slice = remaining.slice(0, maxChars);
    const sentenceBreaks = [...slice.matchAll(SENTENCE_END)];

    if (sentenceBreaks.length > 0) {
      const lastBreak = sentenceBreaks[sentenceBreaks.length - 1];
      const breakIndex = lastBreak.index + lastBreak[0].length;
      if (breakIndex > maxChars * 0.4) {
        cutAt = breakIndex;
      }
    } else {
      const lastSpace = slice.lastIndexOf(' ');
      if (lastSpace > maxChars * 0.4) {
        cutAt = lastSpace;
      }
    }

    const chunk = remaining.slice(0, cutAt).trim();
    if (!chunk) {
      chunks.push(remaining.slice(0, maxChars));
      remaining = remaining.slice(maxChars).trimStart();
      continue;
    }

    chunks.push(chunk);
    remaining = remaining.slice(cutAt).trimStart();
  }

  return chunks;
}
