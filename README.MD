# Live Server
1. Install Liver Server in Visual Studio Code https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
2. Select Go Live icon on bottom right of Visual Studio Code window (blue bar)
3. Go to localhost:5500

---

# Setup SASS

1. Check if you have node `node -v` and `npm -v`
    - Ensure you have node: https://nodejs.org/en/download/
2. Check if you have sass in system `sass -v`
    - If not, install sass `npm install -g sass`
3. In this directory run `sass --watch frontend/styles/main.scss frontend/styles/main.css`
4. Read this documenation for nesting with sass: https://www.w3schools.com/sass/sass_nesting.php



---

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

9. Create your own branch. This is the naming convention: `<name>/<frontendOrBackend>/<featureYouAreWorkingOn>`
example: `git checkout -b aman/frontend/homepageBookingPopup`

10. Run `git branch` again to check if your branch is added and if you are not working in your branch.


## Apply your change

1. `git add .` - This will stage all your changes
1.1. Check that files with the changes are in green `git status`
2. Commit message should be a statement that follows "This commit will...".
`git commit -m "add urls in tags"`
3. `git push`

## Getting the changes of everyone to show on ur file

1. Make sure the changes in your branch are saved, committed, and pushed. This is will ensure your changes are saved in the repository and that you won't lose it.
2. Go to main branch `git checkout main`
3. Pull the changes `git pull`
4. Go back to your branch `git branch aman/frontend/homepageBookingPopup`
5. Time to merge! `git merge main`



