# About

This app a frontend code challenge for Transmax

To get started. 


1. Pull the repo.

2. Run to install the dependancies.

```sh
npm i 
```


3. To preview the app the app run:

```sh
npm start
```


I have left most of the create-react-app boilerplate code as is.

Some imporvements that could eaisly be made:
- Use Hooks for the data "fetching" (the are just functions that return hardcoded data at the moment.)
- Better error handling, loading, failed to load etc.
- Some shared styles classes and/or mixins there are alot simliar CSS blocks at the moment.   
- Ramps data seems to render fine as it currently is however there are beeter/more performative ways to handle the data transformation.
- Icon rendering (thats based on the weather) should be moved to a helper function, with a switch statement for better scalability when there are more options.

## It utilises 

- [Create React App](https://github.com/facebook/create-react-app)

Type safety 
- Typescript

Charts
- Chart.js
- chartjs-plugin-datalabels
- react-chartjs-2

Icons
- Lucid Icons (slightly different to the UI Mock provided...)

Testing
- Jest
- React Testing Libaray

Styles
- Scss
- CSS Modules (with scss)

Typography
- Roboto is loaded from the google fonts cdn.



