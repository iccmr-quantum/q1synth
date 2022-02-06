# QuSynth

## Midi Input
A midi input device can be chosen from the dropdown in the config panel. QuSynth listens for control change messages on any midi channel of the selected device.

### Midi Mapping
Control change messages are mapped to the following controls.
* 0 - dial degrees
* 1 - qubit x axis
* 2 - qubit y axis
* 3 - qubit z axis
* 4 - left synth frequency
* 5 - left synth volume
* 6 - left synth reverb
* 7 - left synth modulation index
* 8 - left synth harmonicity
* 9 - right synth frequency
* 10 - right synth volume
* 11 - right synth reverb
* 12 - right synth modulation index
* 13 - right synth harmonicity
* 14 - envelope attack
* 15 - envelope decay
* 16 - envelope sustain
* 17 - envelope release
* 18 - modulation envelope attack
* 19 - modulation envelope decay
* 20 - modulation envelope sustain
* 21 - modulation envelope release


## Further Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
