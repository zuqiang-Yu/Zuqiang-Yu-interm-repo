# Data Privacy & Confidentiality

## Research & Learn


### Types of data considered confidential at Focus Bear

- **User identification data** — email addresses, phone numbers
- **Health and special category data** — ADHD status and any health-related information users share in the app
- **Habit and lifestyle data** — personal routines and goals (double encrypted)
- **Financial data** — payment information processed via Stripe and Paddle
- **Internal company data** — business logic, unreleased features, internal communications, and anything under NDA
- **Credentials and secrets** — API keys, passwords, tokens, and environment variables

### Best practices for handling confidential data

Only access data that's necessary for your task, store credentials in environment variables rather than source code, and use approved channels for sharing anything sensitive. 
When testing, always use anonymised or synthetic data instead of real user data. Keep software and dependencies up to date, and lock your screen whenever you step away — especially in public spaces.

### How to respond to a suspected data breach or accidental disclosure

If a breach is suspected, act immediately — revoke access or close the exposed channel as fast as possible, then document what happened and notify your manager right away. 
Don't try to handle it alone. If user data may be affected, contact privacy@focusbear.io — GDPR requires notifying affected parties within 72 hours. 
Once resolved, reflect on what caused it and put measures in place to prevent it happening again.

---

## Reflection

### Steps I can take to handle data securely in my daily tasks

- Before writing code that touches user data, ask: *"Can I use test data instead of real data?"*
- Store all credentials in environment variables — never commit `.env` files to version control
- Double-check before sharing screenshots or code snippets that no user data or tokens are visible

### How to store, share, and dispose of sensitive information safely

**Storing:** Use encrypted storage for sensitive files. Credentials go into a secrets manager or password manager — never in plain text.

**Sharing:** Only share sensitive information through team-approved, encrypted channels. Never send user data over personal email or public chat.

**Disposing:** Delete sensitive files permanently, not just to the trash. Don't keep data longer than it's needed — follow Focus Bear's retention policy.

### Common mistakes that lead to data privacy issues, and how to avoid them

- **Hardcoding credentials in code** → always use environment variables and add `.env` to `.gitignore`
- **Sharing sensitive info over unencrypted channels** → use only approved internal tools
- **Leaving sessions open on shared or public devices** → always log out and lock the screen when stepping away

---

## Task

### One habit I will adopt to improve data security

**Pre-commit security check before every push.**

Before pushing any code, I will do a quick scan to confirm: no API keys or secrets are in the diff, no real user data was used in tests, and no sensitive logic is accidentally exposed in comments or logs. This takes under a minute and catches the most common accidental disclosures before they reach a shared repository.

### One key learning and security measure I will implement

**Key learning:** Focus Bear's habit data is double encrypted — even internally, only the user can see it.

This means I will treat habit-related data as completely off-limits in a development context. I will never log, read, or test with real habit data, and will always use mock data when building or debugging features that touch this layer. This directly reflects the trust users place in Focus Bear when they share personal health information through the app.

---
