# Git – Pull Request Understanding

## Why are PRs important in a team workflow?

A Pull Request is a formal way to propose merging changes from one branch into another. 
Rather than pushing code directly to the main branch, a PR creates a checkpoint where teammates can review the changes, leave comments, and request improvements before the code becomes part of the shared codebase. 

PRs also give less experienced developers a safe way to contribute — their work is reviewed before it affects anyone else, which reduces the risk of introducing breaking changes.

## What makes a well-structured PR?

A good PR is focused and easy to review. It addresses a small or only one thing — a single feature, bug fix, or refactor — rather than bundling unrelated changes together. 
The title should clearly describe what the PR does, and the description should explain why the change was made, what was changed, and how to test it. 
If the PR relates to an issue or ticket, linking it gives the reviewer context without having to search for it. Clear commit messages within the branch add to the overall picture.

## What did you learn from reviewing an open-source PR?

Reviewing a PR in the React repository showed me that code review is as much about communication as it is about code quality. 
There must be at least one person to review, make changes and merge into other branches, and it is usually not the same person.
Reviewers do not just point out what is wrong — they explain why a different approach might be better, ask clarifying questions, and acknowledge what is done well. 
I also noticed that maintainers often request changes not because the code is broken, but because it does not align with the project's conventions or long-term direction. This taught me that writing a good PR is not just about making something work — it is about making something that fits naturally into the existing codebase and is easy for others to maintain after you are gone.