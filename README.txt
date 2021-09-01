This application contains the results of a challenge for a position of Software Developer role at Repustate.
It is completely attentive on the backend and uses an external API and I have not used my own database.
zip folder contains 4 files index.js, control.js, test.js, package.json
All the work is done in server/controller/controller.js and it runs through index.js
Unit testing can be found in test/test.js


How to run:

1. In the terminal within the project directory run 'npm install' and 'npm install package.json'.
2. After installing run 'npm start' which will start the server at localhost:3000
3. I have used postman to verify all of my solutions and checked the response time in the console to ensure the cache was functioning properly.
4. Route 1 solution will be found at localhost:3000/api/ping
5. Route 2 solution will be found at localhost:3000/api/posts/:tags/:sortBy?/:direction?
6. In Route 2 for example insert localhost:3000/api/posts/science,tech/popularity/asc to get a result.
7. To check all the tests run 'npm test' in the new terminal which will show the passing tests in the terminal.