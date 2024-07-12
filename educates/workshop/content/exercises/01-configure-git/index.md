---
title: "Configure GIT"
---

To use Git, you first need to setup your username and email.

Run the following commands to do so.

replace John Doe, with your real name, if you want to use that.

```terminal:execute
prefix: Run
title: Setup username
command: git config --global user.name "John Doe"
```

Do the same for email.
```terminal:execute
prefix: Run
title: Setup email
command: git config --global user.email johndoe@example.com
```

Set the default branch name. If you don't change it, then it will be master in this version. 

There is a trend towards using main instead of master, due to the reference to "master & slave".

```terminal:execute
prefix: Run
title: Set default branch
command: git config --global init.defaultBranch main
```

If you want to see your Git configuration simply run
```terminal:execute
prefix: Run
title: See git config
command: git config --list
```

That should show you something like this, replaced with your username and email.
```
user.name=John Doe
user.email=johndoe@example.com
init.defaultbranch=main
```

You have now configured git, and can continue to the next lesson, to start using it. 