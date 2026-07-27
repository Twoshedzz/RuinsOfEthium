# Agent instructions Brownie Points

## About Me

### Background & Experience
- **Coding Experience**: Novice coder for web - no phone app experience
- **Design Experience**: 30 years of web design experience
- **Implications**: 
  - I have strong visual/UX intuition but may need more explanation of technical concepts
  - Code should be well-commented and explained
  - Prefer clear, readable code over clever optimizations
  - I understand design patterns and user experience principles

## Development Preferences

### Code Quality
- Write clear, readable code with good comments
- Explain technical decisions when making changes
- Prefer explicit over implicit code
- Use modern best practices but keep complexity appropriate for my skill level

### Testing
- **After major releases**: Always write comprehensive tests
- Include both unit tests and integration tests where appropriate
- Test edge cases and error conditions
- Make tests readable and well-documented

### Communication Style
- Think before responding (consider implications)
- Explain the "why" behind technical decisions
- Use analogies when explaining complex concepts
- Break down complex tasks into smaller steps

## Project-Specific Guidelines

# Project-Specific Guidelines
### Product Purpose
**Brownie Points** is a playful but purposeful app designed for couples to help surface, rebalance, and maintain a sense of fairness in shared responsibilities.
The app provides a **mutually agreed framework** where tasks, errands, and favours can be:
* assigned an agreed “brownie point” value,
* earned through completion,
* and spent on shared or individual rewards (for example, nights out, treats, or favours).

⠀The goal is **not competition**, but **perceived equity, transparency, and conversation**.

### Core Principles
* **Playful, not punitive**: The tone should feel light, supportive, and non-judgemental.
* **Consent-based**: Point values, tasks, and rewards should be agreed between partners, not imposed.
* **Transparency over optimisation**: Clear history and visibility matter more than efficiency or gamification.
* **Equality, not winning**: Avoid mechanics that encourage score-keeping, shaming, or “leaderboards”.
* **Repair-friendly**: The system should allow resets, adjustments, and forgiveness (e.g. monthly cycles, amnesties).

⠀
### Core Product Capabilities
The product should support the following at a minimum:
**1** **Accounts & Pairing**
	* Each person has their own account.
	* Two users explicitly pair to form a “couple”.
	* All data belongs to the couple, not an individual.
**2** **Shared Task Framework**
	* Create and edit tasks collaboratively.
	* Assign agreed brownie point values.
	* Tasks can be one-off or repeatable.
**3** **Earning Points**
	* Users record completed tasks.
	* Earning events are visible in a shared activity feed.
	* History should be auditable and human-readable.
**4** **Spending Points**
	* Users can propose spending brownie points on rewards.
	* Spending may require approval, depending on agreed rules.
	* Balances should never silently go negative.
**5** **Activity & History**
	* A clear, chronological record of:
		* tasks completed,
		* points earned,
		* points spent,
		* approvals or changes.
	* History exists to support conversation, not arguments.

### Non-Goals (Important Constraints)
* This is **not** a productivity tracker.
* This is **not** a competition or leaderboard app.
* This is **not** a behavioural enforcement tool.
* Do not introduce streaks, rankings, or shame-based nudges.

⠀
### Technical Direction (High-Level)
* Early development should prioritise **rapid iteration via a web app**, with a clear path to iOS and Android.
* Architecture should assume:
  * authenticated users,
  * explicit pairing,
  * shared data scoped to a couple.
* Authentication and pairing should be **boring, reliable, and explicit**.
* Prefer simple, understandable solutions over clever abstractions.

⠀
### Design & UX Expectations
* The UI should feel calm, friendly, and adult (not jokey or childish).
* Language should encourage collaboration (“agree”, “propose”, “confirm”) rather than control.
* Defaults should be safe and conservative.
* Make it easy to explain the app to a partner in under 60 seconds.

## Standard Procedures

### Before Making Changes
1. Understand the current codebase structure
2. Consider impact on existing functionality
3. Check for related tests that need updating
4. Think about edge cases
5. Make sure we don't undo work from previous releases. Previous releases should be noted. Ask permission to make large structural changes
6. If something feels too big, please advise on how to break it down so it can be implemented safely

### After Making Changes
1. Verify the change works as expected
2. Check for linter errors
3. Update or add tests (especially for major features)
4. Update documentation if needed
5. Consider backwards compatibility

### Code Review Checklist
- [ ] Code is readable and well-commented
- [ ] Tests are included (for major changes)
- [ ] No linter errors
- [ ] Changes are explained clearly
- [ ] Edge cases are handled

## Communication Preferences

- **When to ask questions**: If something is ambiguous or could have multiple interpretations
- **When to proceed**: If the approach is clear and follows best practices
- **Level of detail**: Explain enough that I understand, but don't over-explain basics

## Things to Remember

- I value clean, maintainable code over quick hacks
- Design/UX considerations are important given my background
- I'm learning, so educational explanations are helpful
- Quality and testing matter, especially for major releases
