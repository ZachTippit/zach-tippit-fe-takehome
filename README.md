# Coterie Take Home

This is the take home project for Coterie Insurance. [The initial task listing can be found here](https://github.com/CoterieInsure/frontend-takehome-project). That initial checklist of items has been completed (and will have detailed comments below). Along with the initial prompt, I developed several key features that can be found on [Coterie's core quote flow](https://quote.coterieinsurance.com/) (namely, the stepper, mobile dropdown and general style replication). This extra development was done purely for the challenge and fun.

The form is also accessible from a deployed link at: [http://gr8st-coterie-quote-form-of-all-time.netlify.app/](http://gr8st-coterie-quote-form-of-all-time.netlify.app/)

## Technologies Used

The app was developed in **TypeScript** on the following packages.
- Create-React-App for project initialization
- Redux for state management
- React-testing-library for Unit tests
- React-router-DOM for Routing
- CSS Modules for styling, no additional component libraries were used

## Installation

The app can be run locally by the following.
- Clone repository to your local machine
- Add a .env file in the working directory at the same level as the package.json file (./zach-tippit-fe-takehome by default)
- Add the following:
\REACT_APP_COTERIE_API_URL = <url posted in original take home project, not posted here for security purposes>
\REACT_APP_COTERIE_AUTH_TOKEN = <token posted in original take home project, not posted here for security purposes>
- In the working directory , run the following.

```
npm install
npm start
```

The app should now run correctly.

The testing suite can also be run by following the previous installation steps and running:

```
npm run test
```

The app is also accessible from a deployed link at: [http://gr8st-coterie-quote-form-of-all-time.netlify.app/](http://gr8st-coterie-quote-form-of-all-time.netlify.app/)

## Testing

All of the form entries incorporated unit tests to determine that state updates were triggered. Incorrect user inputs were taken care of with a combination of TypeScript type checking and input boundaries (e.g. Zip Code can't have >5 digits, can't proceed past form page until info is properly added)

## Wishlist (...if I had more time...)

There was a snag with incorporating routing testing and went over my personally allotted time. Additional considerations were:
- Adding other disabled forms to populate form to be more in line with [Coterie's core quote flow](https://quote.coterieinsurance.com/).
- CSS Animations to enhance UX. 
- Better error handling for refreshing and revisiting the form (e.g. refreshing on form pages)
- Adding localStorage for form details which would greatly improve revisiting/reloadability and the aforementioned error handling.
- Tooltips for additional form info context
- Save for later functionality to remind the user to come back, even if localStorage will cache the form data.
- Summary page to show all form entries and policy selections. Can act as a "confirm this receipt" before heading to a "payment gateway". Moreso just useful in this instance to see all form data and policy selections input by user.

## License

This app is not intended for commercial use for anyone. This is a derivative project based off of Coterie Insurance and is intended solely for this application process.
