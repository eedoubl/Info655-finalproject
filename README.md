# Documentation 

### Project Description

This project is a Review/Blog Platform centered around Tabletop Role-Playing Games. Certain areas and images will randomly change upon refreshing the webpage or React App. This is Tabletop Tales. The platform boasts 4 primary sections each adding depth to the project’s complexity. Tabletop Tales offers a blog section, where users can express their thoughts, experiences, and insights on a variety of tabletop RPGs. This platform encourages the sharing of personal stories, analyses, and exciting adventures, aiming to foster a vibrant community of passionate players. In addition, the site features an extensive review section, where we conduct objective and thorough reviews of both new and classic tabletop RPGs. These reviews are designed to help readers make informed decisions about their next game purchase. We dive deep into gameplay mechanics, storylines, and artwork to provide a comprehensive understanding of each game. Within the Trending section, we keep our fingers on the pulse of the tabletop RPG world. Here, we provide a snapshot of what's currently hot, including popular games, emerging trends, and buzzing community discussions. This section helps readers stay updated and engaged with the rapidly evolving world of tabletop RPGs. Lastly, Tabletop Tales boasts a robust Resources section. This is a curated collection of useful materials for both new and seasoned players. It includes everything from game rules and character sheets, to tips for Game Masters. This section is designed to support and enhance players' gaming experiences, making Tabletop Tales a one-stop destination for all things tabletop RPGs.

### Group Members

Matt Gisin
Dylan Kapadia
Ethan Mil

### How to run/deploy the project

This project can be run by following these steps:

1. Downloading the .zip file which contains all of the individual files within the repository
    URL: https://github.com/eedoubl/Info655-finalproject

2. Unzipping the .zip file and storing all contents within a new directory

3. Open Terminal or a Command Window and type ‘cd name-of-new-directory’ (change name-of-new-directory to the target directory name) to enter the newly-made directory

4. Type ‘npm start’ on the command line
      a. Your default browser will now open displaying the Project

!!! Please see the bottom of this document for additional information regarding how to run/deploy !!!

### Areas for Project Improvement

The project is well-made however, some additional work could be done to improve the styling of the Resources section of the React Application. This area of improvement is minor and really just needs matching of the styling used in the other sections. Another area of improvement regarding the Resources section could be to include additional resource covers for character sheets. In its current state, the React app functions exactly as intended. Therefore, no revisions to the .js files are explicitly necessary. 

## Use Cases

Within the documentation for the project, each group should provide use cases for how a sample user may exercise the feature of the implementation.

### Resources

Use Case: Accessing Gameplay Resources

Title:
User Accesses Gameplay Resources for Walkthroughs and Tips

Description:
A user scrolls to the "Resources" section in the React application to view various resources that provide walkthroughs, tips and tricks, and other materials helpful for their gameplay experience. The `Resources` component should display a randomly chosen resource, including an author, title, and a short description (blurb) to the user.

Actors:
- User 
	- Player trying to find game resources


Preconditions:
- The React application is functioning.
- The `Resources`section is visible and accessible from the main navigation of the application.
- The `Resources` component is populated with an array of authors, titles, and blurbs related to gameplay resources.

User Flow:
1. The user launches the React application.
2. The user navigates to the "Resources" section in the application.
3. The `Resources` component mounts and selects a random index from the authors, titles, and blurbs arrays.
4. A resource is displayed to the user, showing a relevant gameplay resource that includes the author, title, and a short blurb.
5. The user reads the resource and gains insights into their gameplay.

Alternative User Flows:
- No Resources Available: If the arrays are empty or not loaded due to an error, the component displays a message indicating that no resources are available at this time.
- **Resource Update**: If the user wants to see another resource, they may have the option to refresh or click a button to load a new random resource.

Results:
- The user has been presented with a resource that can assist in their gameplay.
- The user has the option to continue browsing additional resources if implemented.


### Trending

Use Case: Accessing trending topics in TTRPG landscape

Title:
User accesses trending topics to see what is new and upcoming

Description:
A user scrolls to the "Trending" section in the React application to view all the newest and upcoming trends/news in the TTRPG gaming community. Trends can include new games, expansion packs, gameplay or anything else in that nature.The `Trends` component should display a randomly chosen resource, including an author, title, and a short description (blurb) to the user.

Actors:
- User 
	- Player trying to find new trends

Preconditions:
- The React application is functioning.
- The `Trending`section is visible and accessible from the main navigation of the application.
- The `Trending` component is populated with an array of authors, cover images, and blurbs related to new campaigns.


User Flow
The user launches the React application
The user scrolls to the Trending section. This section should include a random display of a cover image, title genre, author, and short passage. User can click on any campaign title in the list to view its details
The user can click on any tile to view a trending topics details

Alternative Flow:
No Trending Campaigns Available:If the arrays are empty or not loaded due to an error, the component displays a message indicating no campaigns are currently trending.
Interest in Detailed Information: The user expresses interest in learning more about a campaign


Results:
The user explored selections within Trending section
The user clicked into a trending selection to view its details

### Blogs

Use Case:
Access and explore different blogs regarding TTRPGs

Title:
User Explores Blog Posts to get insights and tips on TTRPGs

Description:
A user navigates to the blog section of React app to read articles that provide unique perspectives on playstyles, tips, and other things that may be written by a fellow gamer in the community. This blog component will feature a cover image, author , title, and other details. There will be a list of blogs presented to the user to choose from.

Actors:
User
User who is interested in TTRPGs personal insights and discussions

Preconditions
The React app is operational
Blog section is visible and accessible
Blog section is populated of array consisting of cover images, authors, short blurbs


User Flow
User launches React app
User scrolls to Blogs Section
Blog posts should be randomly displayed
User clicks into blog post for additional details

Alternative Flows
No blog posts available
If array is empty, message is displayed saying no blog posts are being displayed

Results:
The user has explored multiple blog posts in regards to TTRPGs
The user clicks into blog post for additional details

### Reviews

Use Case:
Exploring user reviews of TTRPG games

Title:
User navigates through reviews to discover and evaluate TTRPGs

Description:
Users access the ‘Reviews’ section of the React app to see a selection of objective reviews for TTRPGs. The reviews component showcases a selection of reviews– with an image, title , and user rating. Users can use this section to find new titles and gauge the communities opinion on them

Actors:
User
User looking for objective reviews and community opinions on game titles
Preconditions
The React app is functional
The Reviews section is accessible
The reviews section is populated with arrays of images, titles, and ratings for game titles

User Flow:
User opens React and navigates to the Reviews section
Reviews component is displayed showcasing game titles and their respective reviews
User can click on any game title to further highlight their game rating
The user clicks the navigation button to scroll through game ratings that were not previously visible

Alternative Flow:
End of Review List
Once the user reaches the end of the list, clicking on the navigation button should bring them back to the front
Results:
User is able to access multiple different game ratings of various game titles
The user’s interaction with the game ratings should gain insight into community opinions



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
