# cpsc-455-project

Checklist:

In order to create a repo, you will need to decide on a project name
Project name LettuceEat

## Write 3-5 sentences on project topic
	
For young adults who have social gatherings involving group food orders, our responsive web app will ease the process of gathering, consolidating, and outputting individual food orders to be submitted as a group order. The app will store: anonymous users’ data (amount owing, dishes, custom tip amounts, and display name), food menu (dishes), and session (states, and users). Users can access a particular session and make a food order customized to their liking, based on the menu items available in the session. The session leader then takes all the consolidated order data and sends it to a food ordering service (externally from our app, eg. a waiter or UberEats app) to place the order. Additional functionalities we can implement given enough time include user authentication to create custom profiles, saving favourite/previous orders for future use, use of machine learning to automatically input menu items, and/or integration with payment platforms. 

## Project task requirements:
### 3-5 minimal requirements (will definitely complete)
- Ability for users to pick dishes
- Ability to create and access a session
- Calculate individual food order subtotal
### 3-7 "standard" requirements (will most likely complete)
- Persistent session for user
- Custom tip amounts 
- Responsive website (cross-browser and cross-device testing) 
- Web accessible UX features (eg. screen-reader accessible) 
- Categories for menu items, toggle for more details
### 2-3 stretch requirements (plan to complete at least 1!)
- WebSockets for real time updates
- Passwords for users when returning to session
- Delete sessions after x amount of days (Scheduled db purge)

## Pick 2 of your minimal requirements and break each of them down into ~2-5 smaller tasks!
This will help you divide up work among your teammates
### Ability for users to pick dishes
- Display menu items (list) with prices
- Select from menu items 
- Select quantity of each menu item selected
- Search functionality to filter down menu items
### Ability to create and access a session
- Generate a unique session link/code
- Copy and share session invite link/code
- Ensure users that access the session can see the same data as other users on refresh

## Finally, draw 2-3 rough sketch prototypes of some key tasks of your app. Sketch these physically on paper and then scan and add to your repo.

