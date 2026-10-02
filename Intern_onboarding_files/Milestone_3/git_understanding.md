# Pull Requests #48: Git - Pull Request Understanding

## Why are PRs important in a team workflow?

A Pull Request is a formal way to propose merging changes from one branch into another.
Rather than pushing code directly to the main branch, a PR creates a checkpoint where teammates can review the changes, leave comments, and request improvements before the code becomes part of the shared codebase.

PRs also give less experienced developers a safe way to contribute: their work is reviewed before it affects anyone else, which reduces the risk of introducing breaking changes.

## What makes a well-structured PR?

A good PR is focused and easy to review. It addresses only one small thing (a single feature, bug fix, or refactor) rather than bundling unrelated changes together.
The title should clearly describe what the PR does, and the description should explain why the change was made, what was changed, and how to test it.
If the PR relates to an issue or ticket, linking it gives the reviewer context without having to search for it. Clear commit messages within the branch add to the overall picture.

## What did you learn from reviewing an open-source PR?

Reviewing a PR in the React repository showed me that code review is as much about communication as it is about code quality.
There must be at least one person to review the changes before they are merged into other branches, and this is usually not the same person who made them.
Reviewers do not just point out what is wrong. They explain why a different approach might be better, ask clarifying questions, and acknowledge what is done well.
I also noticed that maintainers often request changes not because the code is broken, but because it does not align with the project's conventions or long-term direction. This taught me that writing a good PR is not just about making something work. It is about making something that fits naturally into the existing codebase and is easy for others to maintain after you are gone.

---

# Reflection for issue #49: Writing Meaningful Commit Messages

## What makes a good commit message?

A good commit message consists of a type, a description, a body and a footer.
A good structure looks like this:

```markdown
<type>: <description>

[optional body]

[optional footer(s)]
```

- The subject description should not be too long.
- Keep it brief: wrap the subject line at 50 characters and the body at 72 characters.

## How does a clear commit message help in team collaboration?

Clear commit messages make it easier for other developers in the team and reviewers to understand the changes, which makes code reviews more efficient.

## How can poor commit messages cause issues later?

Poor commit messages make it harder to understand the history of a project.

- **Unreadable history** -- Messages like just "fix", "update", or "change" tell you nothing about what actually changed.
- **Slower debugging** -- You have to open each commit and read the code just to find where a bug was introduced.
- **Risky rollbacks** -- Without knowing what a commit changed, reverting it might accidentally break other features.

---

# Understand git bisect #50: Reflection on using the git bisect command

## What does git bisect do?

`git bisect` helps programmers quickly find which commit introduced a bug, even in a history of 100 commits.

## When would you use it in a real-world debugging situation?

Say two features from different branches are merged into the dev branch, and then I find a bug that didn't exist before they were added. Both features are fairly complex and together they add about 100 commits, so I would use `git bisect` to find the commit that caused the bug.

## How does it compare to manually reviewing commits?

Some bugs can't be found just by reading commit messages. And compared with manually checking out commits one by one to find a bug, `git bisect` is much more convenient and faster.

---

# Advanced Git Commands & When to Use Them

## Reflections

## What does each command do?

> git checkout main -- file/folder path

This command helps people fix files using the version from main or other branches.

> git cherry-pick #commit

This command grabs one specific commit and applies it to your current branch.

> git log

This command shows the full commit history.

> git blame filepath

This command reveals who last changed each line of a file, and when.

## When would you use them in a real project?

(Hint: these are all really important in long-running projects with multiple developers.)
In a long-running project with multiple developers, these commands come up constantly:
blame helps you track down who wrote a piece of code so you can ask them about it,
cherry-pick lets you apply a hotfix to multiple branches without duplicating work,
log is almost always the first step when debugging a regression,
and `git checkout main -- <file>` saves you when you've broken one file but don't want to throw away everything else.

## What surprised you while testing these commands?

The command that surprised me most was `git checkout main -- <file/folder>`. I had always used the checkout command to switch branches, and I didn't know it could also check out a single file or a whole folder from another branch.

---

## Merge Conflict Reflection

### What caused the conflict?

The conflict occurred when two branches modified the same lines in the same file.

In my test repo, I edited line 1 of `conflict-test.md` on two branches:

- On `main`: "main branch update, and create a conlict"
- On `main-conflict`: "conflict"

When I merged `main-conflict` into `main`, Git couldn't decide which line to keep.

### How did you resolve it?

I used the Git tool built into PyCharm:

1. Clicked "Merge 'main-conflict' into 'main'" in the branch menu, and the "Conflicts" window appeared.
2. Selected `conflict-test.md` and clicked "Merge...".
3. In the three-panel view, I accepted right and clicked "Apply".
   Detail:
   I opened the conflicting file and looked at the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). I compared both versions, then
   manually combined the changes, keeping my teammate's styling updates while also including my navigation link changes. After editing, I removed
   the conflict markers, staged the file with `git add`, and completed the merge with `git commit`.

### What did you learn?

I learned that conflicts are a normal part of collaborative development, not something to panic about. The best way to prevent them is to
communicate with teammates about who is working on which files, pull from
main frequently, and keep branches short-lived.

---

# Branching & Team Collaboration Reflection

## Why is pushing directly to main problematic?

If everyone works on the main branch, there will be many conflicts in this branch. Another problem is that no one can guarantee that their commits will not affect other features or be free of bugs. A reviewer is needed to check the changes.

## How do branches help with reviewing code?

We can create a new branch from any existing branch, which automatically "copies" all the files from that branch.

## What happens if two people edit the same file on different branches?

If two people edit the same file on different branches, they can both edit it freely and push to their own branches.
However, when those two branches are merged into the main or dev branch, there will be a conflict, and a senior developer needs to resolve it.
