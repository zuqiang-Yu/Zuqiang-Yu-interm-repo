# Static Analysis Checks in CI/CD #37

## What is the purpose of CI/CD?

CI/CD automates the process of integrating, testing, and deploying code. For CI, Every time code is pushed, it automatically runs checks to catch errors early, reducing the risk of bugs reaching production.
It ensures code quality is maintained consistently across the team without relying on manual processes.

## How does automating style checks improve project quality?

Automated style checks (like Markdown lint and cspell) ensure every file follows the same formatting and spelling standards, regardless of who wrote it. This reduces inconsistencies, makes code easier to read, and catches mistakes before they are merged.

## What are some challenges with enforcing checks in CI/CD?

* False positives — Tools like cspell may flag valid words (e.g. Australian English spellings, proper nouns), requiring manual configuration.
* Slow pipelines — Too many checks can slow down the feedback loop.
* Developer resistance — Strict rules can frustrate developers.

## How do CI/CD pipelines differ between small projects and large teams?

In a small team, their CI/CD pipeline check the unit and integration test, lint check and some basic checks. The pipeline is easy and fast.
However, in the large team, they require more tests like security scans, performance tests, and might have more stage in their pipeline.
