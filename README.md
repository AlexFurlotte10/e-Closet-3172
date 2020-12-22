

# e-Closet site description

## Repository: https://github.com/AlexFurlotte10/e-Closet-3172
## active link: https://e-closet-3172.vercel.app/

## mFinal Changes
- e-Closet has added a better colour-scheme to be more approachable to thos who are colourblind.
- Capability of manually looking through posts to lock/ban users who pose threat using vercel logs
- sign in is functional
- posting contet is functional
- Welcome text is over masthead
- added a functional link for deployment

## Functionality
e-Closet is a website where we promote the sale of used clothes. Users will enter the landing page and either register or log-in. We use Google's Firebase Authentication to perform login/registration. Once the user is logged in they will be brought to their profile page where they will see a form where they can make a post and in their feed below is other user posts. This is a simple open feed where users will put their contact information in their post to connect with buyers/sellers. Functionality of making a post will be implemnted in mFinal. We are working to connect our posting forms and firebase storage. 

## Security
e-Closet is going to be secure by using Google Firebase Authentication. Emails are stored in the database and the password is encrypted then stored. You cannot see the password using inspection. Profile page is not viewable unless user is logged in. Users can only post when logged in to stop random people spamming. We stop spam or misuse by going into firebase, searching for the user and locking/terminating their account. We can identify users and activity using vercel logs.

## Design
e-Closet is an accesible website. We use colour-blindness conscious colours and simple design. User is able to translate the wording into another language by a third party application of their choice. We use descriptive language to make the experience simple for those who may not be technically-skilled. Our website does not come with a mobile app therefore we promote responsive web design. Audio instrctions have not been implented yet.

## Changes from milestone plan
For the landing page we made some changes. We have the credential boxes in the middle of the page and made the picture bigger. The functionality of the boxes can be changed as the user can user them to login in or change it to register. We made some design changes to the header and footer. Mainly just moved around elements for a more user firendly design. Logout still needs to be incoperated into the header. Search bar may stay in the header but we might add it to the users landing page where they are able to create a post.The footer is not final either as we may change the design of it as we play around to decide on a final look. Might also add more options to it. Creating an account works as it should and also displays error message to the user if they do not follow formating rules. CSS need to be fixed on the error messages so they appear in red text. 




## You will want to npm install and then npm start after cloning to host locally


## Sources
-This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-Logging in functionality was learned using this tutorial: https://www.youtube.com/watch?v=cFgoSrOui2M&t=908s&ab_channel=h3webdevtuts and then tailored to our needs.
-React framework was learned from https://reactjs.org/docs/getting-started.html and then applied to our needs.


## Available Scripts

In the project directory, you can run:

### `npm install`
installs and sets up the packet manager
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
