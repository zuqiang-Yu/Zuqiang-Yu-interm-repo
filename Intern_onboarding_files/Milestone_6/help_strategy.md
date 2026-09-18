# When You Get Stuck — What Next?

## When do you prefer using AI vs. searching Google?

I use AI first when the problem is complex or hard to describe in a few
keywords. I write 3–4 sentences explaining the issue, and sometimes I
attach a file or screenshot to give more context. AI is especially helpful
when I need an explanation of a concept, a code review, or suggestions on
multiple possible solutions.

I switch to Google when AI fails to solve the problem after a few attempts.
I search for video tutorials when I need step-by-step visual guidance, or
when the problem involves a specific tool that is easier to follow along
with visually.

I go to official documentation when I need accurate information about API
usage, configuration options, or version changes. AI answers can sometimes
be outdated, so for setup and installation tasks, official docs are more
reliable.

## How do you decide when to ask a colleague?

I ask a colleague when two conditions are both true:

1. I have already searched using AI and Google and still could not solve
   the problem.
2. The problem is urgent and is blocking my work.

Urgency changes my choice because if a problem is not time-sensitive, I
prefer to keep searching on my own first. Asking too early wastes a
colleague's time.

Sensitivity also matters. If the problem involves company code, internal
data, or credentials, I do not paste it into an AI tool. In those cases,
I go directly to a colleague or check internal documentation.

## A Real Troubleshooting Example

Scenario: The React Native project started successfully, but the app could
not be opened on my phone. The QR code scanned but the app just kept
loading and never connected.

- Step 1: Read the Metro terminal output and noticed there were no obvious
  error messages — the bundler was running normally.
- Step 2: Checked that my phone and laptop were on the same network, and
  they were. The problem still happened.
- Step 3: Described the issue to AI: "Expo app cannot connect to Metro
  bundler on phone, both devices are on the same WiFi." AI suggested the
  network might be blocking the connection.
- Step 4: Realised I was on a public or office network with firewall
  restrictions that block local network traffic between devices.
- Step 5: Searched Google for "Expo cannot connect on office network" and
  found that `--tunnel` mode routes the connection through an external
  server, bypassing the firewall.
- Step 6: Ran `npx expo start --tunnel` and the app opened on my phone
  successfully.

## What challenges do developers face when troubleshooting alone?

Debugging alone means there is no one to immediately point out blind spots.
Developers often spend too long staring at the same code without noticing
a simple mistake. Without a second pair of eyes, it is also easy to follow
the wrong direction for too long before realizing the root cause is
somewhere else entirely.
