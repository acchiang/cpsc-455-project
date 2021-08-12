# LettuceEat

## Description
LettuceEat is a platform that enables friends and families to order food and split their bills quickly and effectively. Similar to popular scheduling platform when2meet, LettuceEat allows users to join sessions and pick out menu items on the platform to add to their user profile. One user will then be able to see all the other users' orders in their created session and pay for it. The user paying will also be able to easily calculate how much each person owes them after tips. After more development, we hope to allow users to etransfer the person paying within the app with the click of a single button.

## The Project
	
For young adults who have social gatherings involving group food orders, our responsive web app will ease the process of gathering, consolidating, and outputting individual food orders to be submitted as a group order. The app will store: anonymous users’ data (amount owing, dishes, custom tip amounts, and display name), food menu (dishes), and session (states, and users). Users can access a particular session and make a food order customized to their liking, based on the menu items available in the session. The session leader then takes all the consolidated order data and sends it to a food ordering service (externally from our app, eg. a waiter or UberEats app) to place the order. Additional functionalities we can implement given enough time include user authentication to create custom profiles, saving favourite/previous orders for future use, use of machine learning to automatically input menu items, and/or integration with payment platforms. 

## Project task requirements:
(Checked off items have been completed. All unchecked items have been investigated, considered in terms of feasibility for our timeline, and discussed for next steps in the future as we extend this project beyond the scope of this course. Viewing the checklist in dark mode on GitHub may be difficult, we recommend switching to light mode for better contrast.) 
### 3-5 minimal requirements (will definitely complete)
- [x] Ability for users to pick dishes
- [x] Ability to create and access a session
- [x] Calculate individual food order subtotal
### 3-7 "standard" requirements (will most likely complete)
- [x] Persistent session for user
- [x] Custom tip amounts 
- [x] Responsive website (cross-browser and cross-device testing) 
- [x] Web accessible UX features (eg. screen-reader accessible) 
- [x] Categories for menu items, toggle for more details
- [x] Dark mode toggle
### 2-3 stretch requirements (plan to complete at least 1!)
- [ ] WebSockets for real time updates
- [x] Passwords for users when returning to session
- [ ] Delete sessions after x amount of days (Scheduled db purge)

## Breaking down the minimal requirements:
### Ability for users to pick dishes
- [x] Display menu items (list) with prices
- [x] Select from menu items 
- [x] Select quantity of each menu item selected
### Ability to create and access a session
- [x] Generate a unique session link/code
- [x] Copy and share session invite link/code
- [x] Ensure users that access the session can see the same data as other users on refresh

## 2-3 rough sketch prototypes of some key tasks of the app:
![Page1](https://user-images.githubusercontent.com/47487758/119433880-f3d2e600-bccb-11eb-8fde-30dba851e636.png)
![Page2](https://user-images.githubusercontent.com/47487758/119433882-f59ca980-bccb-11eb-9dc6-4926c90f228c.png)

## Resources used
- https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
- https://stackoverflow.com/questions/36504768/deploy-the-backend-and-frontend-on-the-same-heroku-app-dyno

## Tech from Units 1-5
Unit 1 - HTML, CSS, JS:
- Used styled components to create reusable components on a charcuterie page
- Styled components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript and CSS to write and use actual CSS for styling React components
- Styled components are preferred because it allows our team to build many custom reusable components while staying scalable
- Styled components are component-based and scoped so changing one element will not affect another element or behavior in the DOM
- CSS modules can become difficult to keep clean once the project becomes a larger scale and isn't server side rendering (styled components are server side rendering) which may interfere with global styles

Unit 2 - React and Redux:
- Used the created styled components and React hooks (useEffect, useState, useHistory) to store states of items (within local scope) such as number of menu items ordered
- Created small and function-specific functional components for easier testing and maintenance and to make them more resuable across the entire project
- Functional components are plain JavaScript functions without state or lifecycle-hooks; the less code, the easier to debug
- Kept stateful data-loading logic separate from rendering stateless logic; better to have one stateful component to load data and another stateless component to display the data

Unit 3 - Mongo DB:
- Connected project to MongoDB Atlas using Mongo CLI; used MongoDB Atlas rather than a local MongoDB because Atlas has the flexibility and scalability of a document database and we are expecting to store a lot of information for users and menu items (need scalability)
- Used Mongoose and Axios to read and write to MongoDB Atlas
- Mongoose helps to create model abstractions and has validation to check that our shcema is consistent when performing any actions to our collections
- Axios has automatic transforms of JSON data while fetch needs to make the actual request then call the .json() method on the response; Axios has a wider browser support than fetch (fetch has backward compatibility) so we can scale our application to more users using different browsers
- Using Mongoose and Axios made it a lot easier for the team to develop, test, and debug api calls to the database

Unit 4 - Node and Express:
- Integrated Node and Express into project
- Node is primarily used for non-blocking, event-driven servers; our app is a traditional web app and uses back-end API services which is what Node is usually used for
- ExpressJS helped created our server-side more efficiently and effectively since it is simple, minimalist, flexibile, and scalable; provides a thin layer of fundamental web application features from the getgo so minimal setup is required, leading to faster setup of the server

Unit 5 - Release Engineering:
- The app is deployed on Heroku, using a Procfile that specifies a web-based build that serves up server/app.js from our server-side half of our repository. Heroku also automatically builds our app's client-side half each time for deployment with the heroku-postbuild script in our root package.json that runs npm install && npm run build on the appropriate directories. 
- Our database is a noSQL db using Atlas/MongoDB. 
- We manually deploy our dev branch with Heroku when the entire team completes QA and reviews. We have investigated GitHub actions and are keen to integrate more CI/CD functionality. 

## Above and beyond functionality
- We used i18next for powerful internationalization/localization, and have fully integrated toggleable string constants to switch from English to French (and vice versa). Each user is able to have their custom local setting for their preferred localization. The setup is robust enough to support any number of future languages integrations/translations. https://react.i18next.com/
- We took extra considerations to ensure the application would be supported cross-browser and cross-device. 
- We conducted user experience surveys at the lo-fi and hi-fi stages of our product ideation and design. We completed a vector-based UI mockup in addition to our lo-fi sketches in order to flesh out the product and conduct meaningful surveys. https://www.figma.com/file/xbpYbjVfbKGEYeqI53BNP4/LettuceEat. Contact our team for full access to the Figma files. 
- We reviewed additional WCAG/w3 web accessibility standards training as a team to ensure the colour palette contrasts in all theme modes for our application would meet the official guidelines for visual accessibility. In terms of functionality, the text contrast on our project meets or exceeds these standards.  https://www.w3.org/WAI/fundamentals/foundations-course/
- We have a toggle-able dark mode which persists across separate visits for the user on a given browser/device. This adds additional accessibility and customizability for the user. 

## Next steps
Revisiting our stretch goals:
- [ ] WebSockets for real time updates
- [x] Passwords for users when returning to session
- [ ] Delete sessions after x amount of days (Scheduled db purge)

We have yet to implement WebSockets for real time updates rather than calling multiple apis for updates. We also haven't implemented a scheduled db purge for freeing up space from the sessions collection. In the future, we would like to finish up these stretch goals as well as make the interface of the app more accessible or user friendly by incorporating features such as supporting multiple languages, tooltips, and reading out the menu options. For this app to become even more aligned with what we originally envisioned, we would also like to add a page where users can e-transfer the person paying for the entire bill with the click of a button. This would require more work on authentication and design of the app so there are no security holes. Currently, our menus are manually added to the db. We would also like to automate this process with vision machine learning so that users can take a picture of the menu they want and upload it so that the vision api can process what items are within the menu picture and upload it to the db.

## Contributions
Allison:
Allison worked on ideating the specs for a reusable internal set of UI components, assembling the components into a skeleton for the front-end, incorporating elements for responsive web design, creating a dark mode and themeable assets, structuring the project repository's directories, standardizing the scripts we use to run the local and production app, deploying the app to Heroku (while connected to MongoDB/Atlas), and adding capabilities for localization. Allison made an active effort to champion accessibiliy for the project, including completing checks to ensure WCAG compliance, investigating localization, and determining further extensions such as adding aria labels for screenreading accessibility. 

Christy:
Christy worked on setting up authentication of users' apis using JWTs. She worked on a portion of user-persistence by writing apis to read and write to session's collection and updating the client interface with data from MongoDB Atlas. Christy also worked on refactoring code after she connected the project to MongoDB Atlas; created models, routes, controllers, db, configs and validation directories and refactored the code to run within those directories. At the beginning of the project, Christy made the lo-fi mockup of the project on Figma.

Rebecca:
Rebecca worked on building front-end components, putting together the basic skeleton of a couple pages, setting up the back-end server using Express, and propagating consolidated data across pages. She also contributed to making improvements to the user interface, like adding basic desktop browser responsiveness and helping out with mid-fidelity designs. 

Nick:
Nick worked on the ability to create, or join sessions/lobbies. he also worked on setting up new users inside each session/lobby, and the ability for users to log back into their account with persisting data. In addition, he also worked on update logic for user orders and persistence of various other data. As part of software development, he also helped with refactoring code, squashing bugs, adding responsiveness, and changing db schemas (when needed).
