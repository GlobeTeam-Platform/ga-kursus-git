---
title: "Clone Repository"
---

Most times, you probably won't start from scratch, but will start with an already existing repository, that you want local, to begin testing or developing on.

The way to do that, is to `Clone` the repository.

Since we are currently working in an existing Git repository, we will start by deleting that, and then clone our existing remote repository.

Run the following, to delete all files in the folder, including the hidden `.git` 

```execute
rm -rf * .*
```

Then clone your remote repository by running

```execute
git clone http://$GIT_HOST/mygitrepo.git
```

You should now see a folder names `mygitrepo` if you run 
```execute
ls
```

look inside the folder, and see that it contains the files, you have comitted in earlier steps
```execute
ls mygitrepo
```

You can also see the changes in the file you comitted, by running
```execute
cat mygitrepo/file1.txt
```

This repository is setup as a remote repository. This means, that all changes you do, can be pushed to the remote repository.