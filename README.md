# Milestones:

Milestone 1:
Axios used, Form submission done, react router pending, delete state pending, responsive pending
server.js added for delpoying to Heroku, but deploy issues - 500


![](./public/draft_1.png)


Milestone 2:
Axios used, Form submission done, react router done, delete state done, responsive done
deloyed to firebase-

https://omdb-api-react-app.web.app/
OR
https://omdb-api-react-app.firebaseapp.com/

---

# Project Requirements:

### 1. Get API Access ###
To use the API, you need to create an API key. You should be able to register for an API key using the FREE option by filling out [this form](http://www.omdbapi.com/apikey.aspx) ([link: http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)). After your key is activated you can start using it to make HTTP requests.

### 2. What you're building ###

For this project, you are expected to code and host a React web application. The web application should display a movie search form that queries and displays multiple titles fetched from the OMDB API. Please consult the OMDB's API [documentation](http://www.omdbapi.com/) (link: [http://www.omdbapi.com/](http://www.omdbapi.com/)) on how to use the API. A user should be able to search for movies through your search form using movie titles. Basically, the form should have the following components:

  - A search bar
  - Submit button

When a user presses Submit, use the OMDB API to dynamically fetch and list each movie underneath the search form. For each movie returned from the API, render the components listed below using a grid layout.

  - Title and Year
  - Image (display the image from the image source provided)
  - A delete button for the movie

Grid Layout Example:
![grid layout example](https://storage.googleapis.com/support-forums-api/attachment/thread-2456609-676079104261257749.JPG)

When a user clicks on the delete button for a movie, remove the movie that was clicked from the search results. Remove the movie from React state directly instead of hiding the movie result using CSS.

### 3. Bonus Points ###
*Note: this is completely optional, but feel free to showcase your skills!*

  - Implement mobile responsiveness into the web application
  - Use Redux instead of React State

### 4. How to Submit Project: ###

  1. A URL link to your web application (*Note: Feel free to host this however you like — free platforms that help you host your React apps include [Heroku](https://heroku.com/), [Github](https://github.com/ or [Firebase](https://firebase.google.com)). Consult [this guide](https://medium.com/better-programming/how-to-deploy-your-react-app-to-heroku-aedc28b218ae) on how to deploy to Heroku.*)
  2. A URL link to the Github or Github equivalent with the source code of this project. (*Note: Remember to make it publicly accessible so we can see your awesome work :)*)
