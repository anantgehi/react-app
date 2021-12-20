# Creating and Deploying React app on Github pages

## Procedure

### Prerequisites :

* GitHub Account.
* Install Git inyour machine and Set up Git.
* Install Node.js
* Install Npm

### 1. Create React App on local machine
```
npx create-react-app react-app
```
### 2. Install Github Pages Dependency
```
cd react-app
npm install gh-pages --save-dev
```
### 3. Make Changes in Package.json

The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :
```
"homepage": "http://anantgehi.github.io/react-app"
```
Second in the existing scripts property we to need to add predeploy and deploy.
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
### 4. Create new repository named react-app in Github Account
### 5. Push react-app on your local machine to repository
```
git remote add origin https://github.com/anantgehi/react-app.git
git branch -M main
git push -u origin main
```
### 6. Publish and Deploy App on repository to Github Pages
```
npm run deploy
```
Deployed app can be viewed at : http://anantgehi.github.io/react-app

## Forking and making pull request

### 1. Fork repository react-app
### 2. Create clone in local machine
```
git clone https://github.com/{username}/react-app.git
```
### 3. Install Required Packages in local machine
```
npm install
```
### 4. Make Required Changes
### 5. Track, Commit and Push Changes
```
git add .
git commit -m "any_comment"
git push
```
### 6. Publish and Deploy App on repository to Github Pages
```
npm run deploy
```
### 6. Create pull request to original app 

Readme Reference : https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
