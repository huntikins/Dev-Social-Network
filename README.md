# Cerebellum

## A Social Network with a Purpose.
### Dedicated to the sharing and collecting of knowledge.

## Contents
* [Links](#links)
* [Project Goals](#project-goals)
* [Project Features](#project-features)
* [Technologies Used](#technologies-used)
* [Instructions for Use](#instructions-for-use)
* [Development Team](#development-team)

## Links
* Live App: [cerebellum-network.herokuapp.com](https://cerebellum-network.herokuapp.com)
* GitHub Repository: [github.com/huntertrammell/Dev-Social-Network](https://github.com/huntertrammell/Dev-Social-Network)

## Project Goals
* Create a social network that allows users to share and save information.
* Enable the development of a community built around intellectual pursuits.
* Deploy a functioning site with all of the following features:
  - User authentication and account management
  - Display upcoming Meetup events (using Meetup API)
  - Ability to create posts and view a feed of posts
  - Ability to save post to personal Knowledge Base

## Project Features
* Users can create posts. If there is a URL in the post, it is displayed as a link and a preview of the site contents is included when the post is displayed.
* Users can search for other users by entering part or all of a user's name or email address.
* Users can follow other users.
* The Social Feed includes the posts of all the users the current user is following as well as the current user's own posts.
* Post feeds are displayed in reverse chronological order (newest posts at the top).
* Upcoming local technology related Meetup events are displayed based on the zipcode the user provides.
* Users can edit their account information and view other users' profiles.
* Users can "like" and comment on posts.
* Users can save posts to their personal Knowledge Base.
* Users can edit and delete posts that they have made. They can also delete comments they have made.
* Users have a profile viewable by all other users which contains their profile information, posts they have created, and their Knowledge Base.
* Users are authenticated using the PassportJS Local Strategy.
* In the case of a forgotten password, account recovery is available. A link is emailed to the user which they can use to reset their password.
* All user actions are validated server side to ensure that the user is logged in and has permission to access the requested data.
* Users can upload a profile image and use the included tool to crop and rotate it.
* Accounts can be quickly deleted at the user's request if they can verify their password.
* The site is fully mobile responsive.

## Technologies Used
#### Front End
* Vue
* Bootstrap
* Node
* Axios
* Vue Croppa
* VeeValidate
* Linkify (npm: linkifyjs)
* Moment
* Vue.js toggle/switch button (npm: vue-js-toggle-button)
* Zipcodes (npm package)

#### Back End
* Node
* Express
* MongoDB
* Mongoose
* AWS S3 (image storage)
* Multer S3 (npm: multer-s3)
* Passport Local Strategy
* Nodemailer
* Zipcodes
* Axios
* Other npm packages used:
  - async
  - connect-history-api-fallback
  - connect-ensure-login
  - morgan

#### Public APIs
* Meetup API
* LinkPreview API

## Instructions for Use
#### General Use
Visit the [deployed site](https://cerebellum-network.herokuapp.com) or clone the repository and build the app yourself using the instructions below. (Be aware that the process for building the app yourself is very involved and requires you sign up for some free services.) When you arrive at the landing page, register for an account. Once registered, you should be automatically logged in. Open the menu in the top left corner of the screen to navigate the site and search for other users. Use the above [list of features](#project-features) to learn what the site has to offer or just explore.

#### Building the App
If you wish to build the app yourself, you must have Node, Yarn (package manager), and MongoDB installed on your machine. You must also register for a Meetup API key, a SendGrid.com account, and an AWS S3 account. Clone the [repository](https://github.com/huntertrammell/Dev-Social-Network) to your local machine. Make sure you have a local MongoDB server running. Navigate to the root of the repository in your CLI and run `yarn install`. In the root of the repo, create a file named `.env` and add the following code to it. (Hint: if you plan on committing your changes, make sure to put ".env" to your `.gitignore` file.)
```
Secret_Access_Key=
Access_Key_ID=
S3_Bucket=
Meetup_Api_Key=
Sendgrid_Username=
Sendgrid_Password=
Email_From_Address=
```
Add your information in the appropriate places directly after each equal sign. The first three values pertain to AWS S3. The last value is the email to use as the "from" address when sending password reset emails.

Alternatively, you can build and run the site without registering for all three services. You should be able to use most of the features of the site then, but the image upload, events feed, and password reset will not work.

To run from the development server, run `yarn dev` in the root of the repo. Open a second CLI window and run `yarn start`. The front end should be running at `localhost:3000` with the back-end server running at `localhost:8080`. Visit `localhost:3000` in your browser. The API calls should be automatically redirected to port 8080. Alternatively, you can build the app by running `yarn build` in the root of the repo. Once the build is finished, run `yarn start`. The app should be running at `localhost:8080`.

## Development Team
This project was developed by Hunter Trammell, David Knittel, and Ryan Freeman.

* Hunter Trammell
  - Email: [hunterttrammell@gmail.com](mailto:hunterttrammell@gmail.com)
  - Portfolio: [huntertrammell.github.io](https://huntertrammell.github.io/)
  - GitHub: [github.com/huntertrammell](https://github.com/huntertrammell)
  - LinkedIn: [https://www.linkedin.com/in/huntertrammell/](https://www.linkedin.com/in/huntertrammell/)

* David Knittel
  - Email: [djknit@gmail.com](mailto:djknit@gmail.com)
  - Portfolio: [djknit.github.io](https://djknit.github.io/)
  - GitHub: [github.com/djknit](https://github.com/djknit)
  - LinkedIn: [linkedin.com/in/djknit](https://www.linkedin.com/in/djknit/)

* Ryan Freeman
  - Portfolio: [https://rjfreeman77.github.io](https://rjfreeman77.github.io/)
  - GitHub: [github.com/RJFreeman77](https://github.com/RJFreeman77)

Any and all questions, comments, suggestions, or proposed contributions are welcome. Please email them to David.
