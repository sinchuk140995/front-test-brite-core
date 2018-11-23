# front-test-brite-core

> A Vue.js project that represents risk types constructor and policies manager.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure nodejs is installed:
```console
node -v
```

If nodejs is not installed in your system, use your package manager for installing.
For installing system packages will be used **APT** - a set of tools for managing Debian packages.
Install nodejs and npm:
```console
sudo apt install nodejs npm
```

### Installing

Install the vue-cli tool globally:
```console
npm install --global vue-cli
```

Clone the repository:
```console
git clone git@github.com:sinchuk140995/front-test-brite-core.git
```

Go to the project folder and run the command for installing dependencies:
```console
npm install
```

Launch the project:
```console
npm run dev
```

## Project structure

front_test_brite_core folder structure looks as follows:

    front_test_brite_core/
    ├── src
    └── test

front_test_brite_core folder contains the following files:

    front_test_brite_core/
    ├── .babelrc
    ├── index.html
    ├── server.js
    └── package.json

* **.babelrc:** a configuration file for Babel.
* **index.html:**  the main app file.
* **server.js:** initializes node-static Server.
* **package.json:** contains the configuration and dependencies.

### src folder

src folder structure looks as follows:

    src/
    ├── components
    └── mixins

src folder contains the following files:

    front_test_brite_core/
    ├── App.vue
    ├── main.js
    └── router.js

* **App.vue:** the main Single File Component.
* **main.js:** the main JavaScript files that drive our app.
* **router.js:** contains the project routes.


### src/components folder

src/components folder contains the following components:

    src/components/
    ├── ClientInsuranceRiskCreate.vue
    ├── ClientInsuranceRiskEdit.vue
    ├── ClientInsuranceRiskList.vue
    ├── Home.vue
    ├── InsuranceRiskCreate.vue
    ├── InsuranceRiskList.vue
    └── NavMenu.vue


* _ClientInsuranceRiskCreate.vue:_ displays a create _client insurance risk_(policy) form using InsuranceRiskForm.
* _ClientInsuranceRiskEdit.vue:_ displays a edite _client insurance risk_(displays policy) form using InsuranceRiskForm.
* _ClientInsuranceRiskList.vue:_ displays _client insurance risks_(policies) using InsuranceRiskList.
* _Home.spec.js:_ displays all _client risks_(risk types) using InsuranceRiskList.
* _InsuranceRiskCreate.vue:_ contains a create _insurance risk_(risk type) form.
* _InsuranceRiskForm.vue:_ contains a create/edit _client insurance risk_(policy) form.
* _InsuranceRiskList.vue:_ displays _insurance risk_(risk types) or _client insurance risks_(policies) depending on prop.riskListFetchApiUrl.


### src/mixins folder

src/mixins folder contains the following components:

    src/mixins/
    ├── DeleteData.js
    ├── FieldValidation.js
    ├── GetData.js
    └── PostPatchData.js


* _DeleteData.js:_ methods for deleting resources, displaying delete errors.
* _FieldValidation.js:_ methods for generic form validation rules: required, min_length.
* _GetData.js:_ methods for fetching resources, displaying fetch errors.
* _PostPatchData.js:_ methods for posting/patching resources, displaying post/patch errors.


## Running the tests

Run the following command to start unit tests:
```console
npm run test
```

### Unit tests structure

The **test/unit** folder contains unit tests for the project:

    test/unit/
    ├── ClientInsuranceRiskCreate.spec.js
    ├── ClientInsuranceRiskList.spec.js
    ├── Home.spec.js
    ├── InsuranceRiskCreate.spec.js
    ├── InsuranceRiskForm.spec.js
    ├── InsuranceRiskList.spec.js
    └── MockData.js


* _ClientInsuranceRiskCreate.spec.js:_ tests submitting a create form and displaying empty fields errors.
* _ClientInsuranceRiskList.spec.js:_ tests rendering _client insurance risks_(policies), deleting a _client insurance risk_ and displaying of a title.
* _Home.spec.js:_ tests rendering _insurance risks_(risk types), deleting a _insurance risks_(risk types) and displaying of a title.
* _InsuranceRiskCreate.spec.js:_ tests submitting a create _insurance risks_(risk types) forms, displaying the empty fields errors and error about insufficient number of fields.
* _InsuranceRiskForm.spec.js:_ tests submitting a create and edit _clients insurance risks_(policies) forms and displaying the empty fields errors.
* _InsuranceRiskList.spec.js:_ tests fetching and rendering _insurance risks_(risk types)/_client insurance risks_(policies), passing props and deleting a _insurance risk_(risk type)/_client insurance risk_(policy).
* _MockData.spec.js:_ contains mocking data for API calls.

## Deployment

Project contains all necessary files and requirements for deploy to the PasS-platform **Heroku**:
* Dependencies:
** node-static
* Files:
** server.js - a script with node-static Server instance
* Commands:
** postinstall - a alias for _npm run build_
** start - a command for running node-static Server

You have to add a key **API_URL** and the domain of a API server to the **Heroku Config Vars**, otherwise for API calls will be used default value http://localhost:8000/.

Let’s get the deployment started.

First, clone the repository you want to deploy:
```console
git clone git@github.com:sinchuk140995/front-test-brite-core.git
```

Login to Heroku using the heroku toolbelt:
```console
heroku login
```

Inside the project root, create a Heroku App:
```console
heroku create <heroku-app-name>
```

Push to deploy:
```console
git push heroku master
```

And there you go!


## Built With

* [npm](https://www.npmjs.com/) - Dependency Management
* [webpack-simple](https://github.com/vuejs-templates/webpack-simple) - a simple Vue 2.0 Webpack & vue-loader setup for quick prototyping
* [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) - includes a polyfill that includes a custom regenerator runtime and core-js
* [Vue.js](https://vuejs.org/) - JavaScript Framework
* [Element](https://element.eleme.io/#/en-US) - a Desktop UI Library
* [vue-resource](https://github.com/pagekit/vue-resource) - the plugin for Vue.js provides services for making web requests and handle responses using a XMLHttpRequest
