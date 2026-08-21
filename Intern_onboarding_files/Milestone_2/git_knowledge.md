### I wang to use Github Desktop in my laptop, I have set it up.
I chose GitHub Desktop over the built-in Git integration in VS Code or other IDEs for a few reasons. 
Different companies and projects may require different editors — some prefer VS Code, others PyCharm or Xcode — so keeping Git management in a dedicated, editor-agnostic tool means my workflow stays consistent regardless of which IDE I am using. 
GitHub Desktop is also GitHub's own native application, which makes it more reliable for authentication. In other IDEs, Git credential tokens can expire or the connection can drop unexpectedly, whereas GitHub Desktop handles authentication more smoothly as it is built specifically for that purpose. The clean visual interface also makes it easier to review diffs, manage branches, and stage specific changes without needing to memorise commands — which is useful when I am still getting familiar with a new codebase.

---
### Reflections of when and how to use git in my work
Git is a version control tool that records every change to a codebase, making it easy to track history and revert to a previous state when needed. 
The command that stood out to me today was git stash — it temporarily shelves uncommitted changes so you can switch to another branch or handle an urgent task with a clean working directory, then restore your work later with git stash pop. 
I was aware of it before but rarely used it. In a professional project, where you often need to context-switch quickly without committing half-finished work, I can see it becoming a regular part of my workflow.

### Have you used Git before? If so, in what context?
Yes I used Github for 4 years. In Uni, I usually used Github to store my codes, cowork - working with Other teammates, record the bug in issue and when I make a misstake in my code github allow me to roll back it.

---
### Which Git client (if any) did you choose? Why?
Github Desktop
(same as Q1)
I chose GitHub Desktop over the built-in Git integration in VS Code or other IDEs for a few reasons. 
Different companies and projects may require different editors — some prefer VS Code, others PyCharm or Xcode — so keeping Git management in a dedicated, editor-agnostic tool means my workflow stays consistent regardless of which IDE I am using. 
GitHub Desktop is also GitHub's own native application, which makes it more reliable for authentication. In other IDEs, Git credential tokens can expire or the connection can drop unexpectedly, whereas GitHub Desktop handles authentication more smoothly as it is built specifically for that purpose. The clean visual interface also makes it easier to review diffs, manage branches, and stage specific changes without needing to memorise commands — which is useful when I am still getting familiar with a new codebase.

---
### What was the most interesting thing you learned about Git today?

In group projects, we usually correspond each issue to a branch. All commits made in this branch will be automatically linked or displayed in this issue.
This guy onboarding tasks is my personal repo. I don't create a branch for each issue, so when I want to refer commit to a certain issue, I just need to enter the corresponding # number in the commit information. Or directly copy the commit link to the issue。


---
# Advanced Git Commands & When to Use Them

## Reflections

## What does each command do?
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
and checkout main -- <file> saves you when you've broken one file but don't want to throw away everything else.
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
We can pull a new branch from any exit branches, which will automaticly "copy" all files from exist branch.

## What happens if two people edit the same file on different branches?
if two people edit same file on different branches, they can free edit the same file and push to the repo branches.
However, when those two branch merge in to main or dev branch will have conflict. need senior developer to resolve it.