---
title: "Create GIT Repository"
---

Let's initialize our working folder with git.


Initialize the folder, so it can be tracket using git by running
```terminal:execute
prefix: Run
title: Initialize folder
command: git init
```

When you init a folder, then git creates a .git folder, with the config and database etc. 

You can see that, by running the following command
```terminal:execute
prefix: Run
title: Browse git folder
command: ls .git
```

This should provide the following output

```
HEAD  branches  config  description  hooks  info  objects  refs
```

Let's check the status of the git repo, by running
```terminal:execute
prefix: Run
title: Get status
command: git status
```

The output should look like this
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        readme.md

nothing added to commit but untracked files present (use "git add" to track)
```