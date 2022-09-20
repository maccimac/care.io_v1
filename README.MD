# Setup GIT and your branch

1. Create a folder in your computer where you want for us all to work on your code for this project. 

2. Open terminal to that direcory
`cd C:\\<project_directory>`

3. `git init`

4. Setup github in your computer
```
git config --global user.email "<youremail@gmail.com>"
git config --global user.name "<github_username>"
```

5.  Clone our repository `git clone https://github.com/maccimac/care.io_v1.git`

6. Check your folder if files are there. If folder is their go to the project file `cd care.io_v1`

7. Check if our git repository is properly installed `git status`

8. Check all branches avaiable in that repository `git branch`

9. Create your own branch. This is the naming convention:
<name>/<frontendOrBackend>/<featureYouAreWorkingOn>
ex: `git branch -b aman/frontend/homepageBookingPopup`


## Apply your change

1. `git add .` - This will stage all your changes
1.1. Check that files with the changes are in green `git status`
2. Commit message should be a statement that follows "This commit will...".
`git commit -m "add urls in tags"`
3. `git push`

## Getting the changes of everyone to show on ur file

1. Make sure the changes in your branch are saved, committed, and pushed. This is will ensure your changes are saved in the repository and that you won't lose it.
2. Go to main branch `git branch main`
3. Pull the changes `git pull`
4. Go back to your branch `git branch aman/frontend/homepageBookingPopup`
5. Time to merge! `git merge main`



