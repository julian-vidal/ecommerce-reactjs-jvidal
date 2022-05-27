# Ecommerce store
This is a responsive ecommerce store built with React JS built by Julian Vidal. 

The libraries used in this project are:
- [Create React App](https://github.com/facebook/create-react-app) - Starter project to create React JS apps
- [Line Awesome Icons](https://icons8.com/line-awesome) - Open source icon library
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - Frontend framework
- [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) - It's used to manage the navigation of the app

![Demo](ReactDemo.gif)

## Features

### Components

#### CartWidget
It's the shopping cart included in the header. Currently it does'nt have any functionality but future versions will count hpw many products have been added to the cart.

### Item
This component is a [Bootstrap card element](https://getbootstrap.com/docs/5.0/components/card/) that contains the product name, image, and price. It links to the page that contains more details of the product.

### ItemCount
It's the "Add to Cart" component that contains a field to set the number of items to be added to the cart and the add to cart button. It checks how many units of a product are in stock and allows to add to the cart a number of products between the initial (minimum) quantity and the available stock. 

Currently, the *add to cart* button only logs a message in the console, but future verisions will include the actual *add to cart feature*.


### ItemDetail
This component displays the product details: name, image, description, price, and imports the `ItemCount` component. Also, it displays the Facebook and Whatsapp icons to share the current link on those platforms and bellow that, the message "Guaranteed safe checkout" along with some credit card logos.

### ItemList
It's a [card group Bootstrap element](https://getbootstrap.com/docs/5.0/components/card/#card-groups) that imports the `Item` component to display the products that match the criteria of the requested page.

### Navbar
It's the header of the website, it includes:
- Social media icons
- Logo
- Main menu
- Search icon
- Account Icon
- It imports the `CartWidget` component

### Spinner
This component is a [spiner Bootstrap element](https://getbootstrap.com/docs/5.2/components/spinners/#content) displayed while the content is loaded

## Pages
### ItemDetailContainer
This page imports the `ItemDetail` component. It receives the product id parameter and displays the detail of the product associated to that product. This is the page linked when a visitor clicks an `Item` component. This component is reloaded when the `id` param is updated.

### ItemListContainer
This page imports the `ItemList` component to display a list of all products in the home page or the products of a specific category when visiting a product category page. This component is reloaded when the `categoryId` param is updated.

### Cart
This page is the cart view, it imports the `CartSummary` if the there are products in the cart or the `EmptyCart` component if there are no products in the cart.

### Checkout
This page contains a fake checkout form and imports the `LineItem` component to show the cart summary. The form stores the order information in the *orders* collection in Firebase.

### ThankYou
It's the thank you page after the checkout form is submitted, it displays the order ID stored in Firebase.

---

## Instructions provided by the Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Below are the instructions provided by the library.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
