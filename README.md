# LettuceEat

## The Project
	
For young adults who have social gatherings involving group food orders, our responsive web app will ease the process of gathering, consolidating, and outputting individual food orders to be submitted as a group order. The app will store: anonymous users’ data (amount owing, dishes, custom tip amounts, and display name), food menu (dishes), and session (states, and users). Users can access a particular session and make a food order customized to their liking, based on the menu items available in the session. The session leader then takes all the consolidated order data and sends it to a food ordering service (externally from our app, eg. a waiter or UberEats app) to place the order. Additional functionalities we can implement given enough time include user authentication to create custom profiles, saving favourite/previous orders for future use, use of machine learning to automatically input menu items, and/or integration with payment platforms. 

## Project task requirements:
### 3-5 minimal requirements (will definitely complete)
- [x] Ability for users to pick dishes
- [x] Ability to create and access a session
- [x] Calculate individual food order subtotal
### 3-7 "standard" requirements (will most likely complete)
- [ ] Persistent session for user
- [x] Custom tip amounts 
- [ ] Responsive website (cross-browser and cross-device testing) 
- [x] Web accessible UX features (eg. screen-reader accessible) 
- [ ] Categories for menu items, toggle for more details
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
- [ ] Search functionality to filter down menu items
### Ability to create and access a session
- [x] Generate a unique session link/code
- [x] Copy and share session invite link/code
- [ ] Ensure users that access the session can see the same data as other users on refresh

## 2-3 rough sketch prototypes of some key tasks of the app:
![Page1](https://user-images.githubusercontent.com/47487758/119433880-f3d2e600-bccb-11eb-8fde-30dba851e636.png)
![Page2](https://user-images.githubusercontent.com/47487758/119433882-f59ca980-bccb-11eb-9dc6-4926c90f228c.png)

## Resources used:
- https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
- https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
- https://stackoverflow.com/questions/36504768/deploy-the-backend-and-frontend-on-the-same-heroku-app-dyno