# CRUD App

## Contents
- [Description](#description)
- [Features](#features)
- [Functionalities Used](#functionalities-used)

### Description
This project demonstrates how to create an app that allows for CRUD operations with user data using React and Axios to interact with a mock API.

### Features
1. The CRUD app uses React and Axios to fetch user data from the mock API.
2. The UI has a navbar that contains links to "Create," "Dashboard," and "Home".
3. The app helps to create user data which will display as cards in the Dashboard component.
4. The cards in the Dashboard component contain edit and delete buttons, allowing for editing and deleting actions.
5. Once the user cards are created, they will be displayed in the Home component. If a card is no longer needed and is deleted in the Dashboard component, it will automatically be deleted in Home as well.

### Functionalities Used
1. Utilized `axios` to fetch the data from the mock api and perform crud operations.
2. Utilized react-router-dom to create browser router and configure the routes.
3. Utilized `useState` and `useEffect` to manage the user details.
