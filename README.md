# The LONDON UNDERGROUND PHONY ORCHESTRA (LUPO)

This is a audio/visual generative music app powered by the TfL Unified API and a healthy dose of curiosity.

Data is periodically fetched from the TFL [line API](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/Line/Line_Get), and used to schedule the triggering of visual effects on the London Underground tube map, and musical events of different pitches. For the default orchestra setting, arrivals on each line of the tube will trigger a note from a different instrument of the orchestra.

[Tone JS](https://tonejs.github.io/) was used to handle audio functionality. Their Sampler instrument class provides the capability to play the [audio samples included in this repo](./frontend/public/samples)

The decision was made during development to 'spread' out the arrival times of trains, since without doing this, [the data provided by TFL](./sampleData/sample2.json) has train arrivals often 'clumped' together, resulting in long periods of inactivity, and intense bursts of audio and visual triggers simultaneously. Train arrivals are spread in intervals of 250 ms, corresponding to quavers at a tempo of 120bpm in terms of musical notation. [Two](./sampleData/quantisedSample1.json) []((./sampleData/quantisedSample2.json)) of the resulting data are included in the repo.






## To view this app

At time of writing, the app can be viewed online at [lupo.onrender.com](https://lupo.onrender.com/).

## To run this app

### In development
```bash
npm install # to install dependencies
npm start # to start the app
```

### In production

Requires the serve package
```bash
npm install -g serve # to install serve
npm run build # to build the static site
npm serve -s build # to serve the static site on port 3000.
```

You may also use `npm serve` to serve the site on another port, e.g.
```bash
npm serve -s build -l 4000 # to serve the static site on port 4000.
```

## Available Scripts

### `cd frontend`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:unit`

Runs only the cypress component tests (excluding the e2e tests)

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


