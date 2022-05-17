# Quiz App Game

### I plan on serving quick concise and good reviews on japanese visual novels to intrested audience using this Web Application.

### The Web Application takes great pride in being responsive and lightweight(reasonably) 

### The Web Application is deployed using netlify for quick and easy access all around the world.

### The App uses reactive and highly polished components supplied by naive-ui in most of its internal components so as to better utilize the developers time in adding required features. 

### The Web App supports some nifty features like - , 
  - Fuzzy Searching its database to show the user the most likely entries they are searching for.
  - Butter Smooth Transition On Almost all of its components.
  - Components get resized on height in realtime using transition effects.

# This Website is hosted live at the url: https://vn-blog.netlify.app/

---

## Contents Of This Project

- client
- server

## server

    node main.js

The main.js is the code required to setup the express server.

The highScores.json file is the single database file and is required by the main.js

The Procfile can be used to deploy to heroku easily.

## client

    npm run build

The above command must be run within the context front-end to build the front-end.

The Front-End was built using Vue3 and as such can be built using the above command.
