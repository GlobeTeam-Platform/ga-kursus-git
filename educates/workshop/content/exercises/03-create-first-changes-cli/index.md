---
title: "Create First Changes (CLI)"
---

Let's use the CLI to create some changes and see how Git handles them.

Create a file with the text "initial content"
```terminal:execute
prefix: Run
title: Create file
command: |
  clear
  echo "initial content" > file1.txt
```

Stage the new file, we just created.
```terminal:execute
prefix: Run
title: Stage file1.txt
command: git add file1.txt
```

commit the staged changes, with the commit message "My first change"
```terminal:execute
prefix: Run
title: Commit changes
command: git commit -m "My first change"
```

make a new change to the file
```terminal:execute
prefix: Run
title: Add content to file1.txt
command: echo "new content" >> file1.txt
```

Note at any time, you can see the content of the file, by typing `cat file1.txt` or by selecting it in the editor view.

Stage the new changes
```terminal:execute
prefix: Run
title: Stage changes to file1.txt
command: git add file1.txt
```

commit new changes
```terminal:execute
prefix: Run
title: Commit changes
command: git commit -m "My second change"
```

See the changes you have done
```terminal:execute
prefix: Run
title: See changes comitted
command: git log --graph
```

You should now see a log of all the changes you have made, compete with author, timestamp and commit message.
```
* commit d5fe7a448aa43b3eb1693119542ada0331b9d1b0 (HEAD -> main)
| Author: John Doe <johndoe@example.com>
| Date:   Thu Apr 25 13:00:18 2024 +0000
| 
|     My second change
| 
* commit dd0ddd1d156e3dacbfde71a2ba5ed16f78034b82
  Author: John Doe <johndoe@example.com>
  Date:   Thu Apr 25 13:00:05 2024 +0000
  
      My first change
```

If you want to see the changes, you made to the file, then copy the commit id (from the last command) and run
```
git diff dd0ddd1d156e3dacbfde71a2ba5ed16f78034b82
```
The output should look like this
```
diff --git a/file1.txt b/file1.txt
index f2376e2..7451b6f 100644
--- a/file1.txt
+++ b/file1.txt
@@ -1 +1,2 @@
 initial content
+new content
```


Here you can see the changes, that has been made to the file, compared to last commit.
