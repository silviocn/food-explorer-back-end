food explorer app: back-end

Project done as part of final evaluation of Explorer course, from Rocketseat school.

This project is a prototype of a restaurant app, for making orders and payments, where you check your current order and all your orders.
Is needed to create an account to use the app. It's also possible to create and administrator account.

This app was built with JavaScript, using mainly nodejs and Reactjs, with the following structure: components, migrations, states, hooks, icons, styled components. For the development of the app beekeeper and insomnia where used.

To use this project, please don't forget to take a look at the document package.json, env.example amd api.js in services folder (front-end). Also, build your own app using insomnia to create administrator user account or upload other images.

Here you can find the front-end already deployed: https://food-explorer-by-silviocn.netlify.app/

When creating the insomnia document, use the link below to "POST" (Create) a new administrator user directly in the application, as the back end is already running online. You should write the data like this example on JSON format to make it work.
Back-end URL for new adm user: https://food-explorer-back-end-by-silviocn.onrender.com/adm
Example of data: {
	"name": "Administrator",
	"email": "administrator@email.com",
	"password": "654321"
}