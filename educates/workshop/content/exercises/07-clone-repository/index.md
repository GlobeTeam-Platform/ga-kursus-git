---
title: "Clone Repository"
---

Most times, you probably won't start from scratch, but will start with an already existing repository, that you want local, to begin testing or developing on.

The way to do that, is to `Clone` the repository.

Since we are currently working in an existing Git repository, we will start by deleting that, and then clone our existing remote repository.

Run the following, to delete all files in the folder, including the hidden `.git` 

```terminal:execute
prefix: Run
title: Cleanup
command: |
    clear
    rm -rf * .*
```

Then clone your remote repository by running

```terminal:execute
prefix: Run
title: Clone remote repository
command: git clone http://$GIT_HOST/mygitrepo.git
```

You should now see a folder names `mygitrepo` if you run 
```terminal:execute
prefix: Run
title: List folders
command: ls
```

look inside the folder, and see that it contains the files, you have comitted in earlier steps
```terminal:execute
prefix: Run
title: Browse mygitrepo
command: ls mygitrepo
```

You can also see the changes in the file you comitted, by running
```terminal:execute
prefix: Run
title: See file
command: cat mygitrepo/file1.txt
```

By cloning the repo, the origin, is already setup, so it 

This repository is setup as a remote repository. This means, that all changes you do, can be pushed to the remote repository.