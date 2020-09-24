
# Fovorite Movie App

Project Deploy Link

<a href="https://rks107.github.io/favorite-movies/">Click Here </a>


# Create a new project

make sure you have npm, node and create-react-app tool

```
create-react-app project-name
```

OR

```
git clone https://github.com/rks107/favorite-movies/
```

# Starting of Project

```
npm start
```

# Project Structure

```
src
├── Action
│   └── index.js
├── components
│   ├── App.js
│   ├── MovieCart.js
│   └── Navbar.js
├── Reducer
│   └── index.js
├── index.css
└── index.js
```

# Hosting the project on Github

Open package.json and add

```
Steps:

1. Install the gh-pages package as a “dev-dependency” of the app

2. “homepage”: “http://{Github-username}.github.io/{Github-repo-name}"

3. “scripts”: {
      //…
      “predeploy”: “npm run build”,
      “deploy”: “gh-pages -d build”
    }

4. npm run deploy
  
```

