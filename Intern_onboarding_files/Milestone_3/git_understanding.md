# Pull Requests #48 : Git – Pull Request Understanding

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

---

# Reflection for issue #49: Writing Meaningful Commit Messages

## What makes a good commit message?

A good commit consist of type, description, body and footer.
Good structure like:

```markdown
<type>: <description>

[optional body]

[optional footer(s)]

```

* subject description should not be too long.
* Keep it brief, wrap the subject line at 50 characters and the body at 72 characters

## How does a clear commit message help in team collaboration?

Commit makes it easier for other developers in the team and reviewers to understand the changes, making code reviews more efficient

## How can poor commit messages cause issues later?

Poor commit messages make it harder to understand the history of a project.

* **Unreadable history** — Messages like just have fix, update, or change tell you nothing about what actually changed
* **Slower debugging** — You have to open each commit and read the code just to find where a bug was introduced
* **Risky rollbacks** — Without knowing what a commit changed, reverting it might accidentally break other features

---

# Understand git bisect #50: Reflection for usage of command git bisect

## What does git bisect do?

git bisect help programmer quickly found which commit produced this bug in 100 commits history.

## When would you use it in a real-world debugging situation?

When two functions are merged from different branches into the dev branch. I discovered a bug that didn't exist before, a bug that didn't exist before these two functions were added. Since these two functions are rather complex, there are 100 commits. I will use git bisect to look for it

## How does it compare to manually reviewing commits?

Some bug you cannot found with review commits message.
Compare with manually switch commits to found bug. git bisect is convenient.

---

# Advanced Git Commands & When to Use Them

## Reflections

## What does each command do?
>
> git checkout main -- file/folder path

this command help people to fix files from main/other branches.
> git cherry-pick #commit

this command grabs one specific commit and applies it to your current branch;
> git log

shows the full commit history;
> git blame filepath

reveals who last changed each line of a file and when

## When would you use it in a real project

(hint: these are all really important in long running projects with multiple developers)?
In a long-running multi-developer project, these commands come up constantly —
blame helps you track down who wrote a piece of code so you can ask them about it,
cherry-pick lets you apply a hotfix to multiple branches without duplicating work,
log is almost always the first step when debugging a regression,
and checkout main -- **file** tag saves you when you've broken one file but don't want to throw away everything else.

## What surprised you while testing these commands?

I think is `git checkout main -- filepath/folder` command, I always use checkout command for switch branch, don't know it can help me checkout file/whole folder from other branches.

---

## Merge Conflict Reflection

### What caused the conflict?

The conflict occurred when two branches modified the same lines in the same file.

### How did you resolve it?

I opened the conflicting file and looked at the conflict markers(`<<<<<<<`, `=======`, `>>>>>>>`). I compared both versions, then
manually combined the changes — keeping my teammate's styling updates while also including my navigation link changes. After editing, I removed
the conflict markers, staged the file with `git add`, and completed the merge with `git commit`.

### What did you learn?

I learned that conflicts are a normal part of collaborative development, not something to panic about. The best way to prevent them is to
communicate with teammates about who is working on which files, pull from
main frequently, and keep branches short-lived.

---

# Branching & Team Collaboration reflection

## Why is pushing directly to main problematic?

if everyone work in the main branch, there are many conflict in this branch. Another thing is No one can guarantee that his commits/submission will not affect other functions or be free of bugs. A reviewer is needed to conduct the inspection.

## How do branches help with reviewing code?

We can pull a new branch from any exit branches, which will automatically "copy" all files from exist branch.

## What happens if two people edit the same file on different branches?

if two people edit same file on different branches, they can free edit the same file and push to the repo branches.
However, when those two branch merge in to main or dev branch will have conflict. need senior developer to resolve it.

---
