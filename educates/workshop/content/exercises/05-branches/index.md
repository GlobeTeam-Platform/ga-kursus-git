---
title: "Branches"
---

Branching means you diverge from the main line of development and continue to do work without messing with that main line
![1](1.png)

There are many concepts on when to branch, and for how long. 

For this module, we will focus on the how, more than on the why.

To see the branches currently avaliable run
```terminal:execute
prefix: Run
title: See git branches
command: |
  clear
  git branch --list
```

the output should look like this 
```
* main
```

The `*`shows what branch we are currently on.

Let's create a new branch by running
```terminal:execute
prefix: Run
title: Create new branch
command: git branch my-new-branch
```

If you run
```terminal:execute
prefix: Run
title: List branches
command: git branch --list
```

The output should now be
```
* main
  my-new-branch
```

If we want to move to our new branch, we can simply run
```terminal:execute
prefix: Run
title: Change branch
command: git checkout my-new-branch
```

To confirm run 
```terminal:execute
prefix: Run
title: Get current branch
command: git branch --list
```

The output should now be
```
  main
* my-new-branch
```

All the changes you make and commit from now on, will be in the `my-new-branch` branch

Let's make some new changes, commit them, and then merge them back to the main branch

Run the following
```terminal:execute
prefix: Run
title: Make new changes and then merge
command: |
  echo > file2.txt
  git add file2.txt
  git commit -m "added file2.txt"
```

To merge the changes we just created, into the `main` branch, we first need to change to it by running
```terminal:execute
prefix: Run
title: Change branch
command: git checkout main
```

To merge it, we simply run
```terminal:execute
prefix: Run
title: Merge branch
command: git merge my-new-branch
```

Since our new branch came directly from the `main´ branch, and there has been no changes to the branch, we can simply merge it, without any conflicts.

Handeling Merge conflicts is a more advanced topic, that is outside the scope of this course.