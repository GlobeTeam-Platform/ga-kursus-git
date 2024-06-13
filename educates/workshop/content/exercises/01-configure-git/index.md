---
title: "Configure GIT"
---

Start by configuring Git.

Setup your username (replace John Doe, with your real name)
```terminal:execute
prefix: Run
title: Setup username
command: git config --global user.name "John Doe"
```

Setup your email (replace johndoe@example.com, with your real email)
```terminal:execute
prefix: Run
title: Setup email
command: git config --global user.email johndoe@example.com
```

Set the default branch name. If you don't change it, then it will be master in this version. But there is a trend towards using main instead. 
To change it to main, run the following command.
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