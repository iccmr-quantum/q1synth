# Q1Synth
A built version of this app is hosted at [https://iccmr-q1synth-proto.cephasteom.co.uk/](https://iccmr-q1synth-proto.cephasteom.co.uk/).

Rotate the qubit to interpolate between different synthesis parameters on each axis. Measure the qubit for it to collapse to either 1 or 0. At the time of writing, this app is hosted [here](https://qusynth.cephasteom.co.uk/).

## Prerequisites
* Install [Node](https://nodejs.org/en/)
* Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)
* Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

## Local Setup
* clone this repo and navigate to directory root
* `nvm use` - use node version manager to switch to correct node version
* `yarn` or `npm i`- install node packages
* `yarn start` or `npm run start` - spin up the app

## Measurement
By default, qubit measurement is simply handled by a local, weighted coin toss function. To connect to a QASM simulator or a real quantum computer, you will need to set up a local python server running a socket/qasm script. See ICCMR's [socket-qasm](https://github.com/iccmr-quantum/SOC-Qasm) implementation.

Once socket-qasm is up and running, include the query parameter `?qasm` in the app url. For example, locally -> `http://localhost:3000/?qasm=true`. Successful connection should print an alert in your browser.

## Midi Input
A midi input device can be chosen from the dropdown in the config panel. QuSynth listens for control change messages on any midi channel of the selected device. A Max patch is included in this repo to map controls to a midi controller.

### Midi Mapping
Control change messages are mapped to the controls, as laid out in the file `src/midi/midiMap.ts`.

## Ensemble Mode
* Build local version of the app (see above)
* `yarn build` or `npm run build` to bundle assets
* `yarn start-ensemble` or `npm run start-ensemble` to serve bundle and send osc
* Open [http://localhost:3000?ensemble=true&id=someID](http://localhost:3000?ensemble=true&id=0) to run app in ensemble mode.

This transmits the x, y, and z position of the qubit over osc. See `/src/osc/socket-to-udp.js` for details of the osc port.

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

Launches the test runner in the advanced watch mode.<br />
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
