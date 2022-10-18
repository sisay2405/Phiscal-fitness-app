<!-- PROJECT -->
  <p align="center">
   Phisical Fitness
    <br />
    <a href="https://github.com/blockbasti/just_another_workout_timer/releases/latest">
        <img src="/assets/images/github.png"
        alt="Get it on GitHub"
             height="80"></a>
    <br />
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
        <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#wireframe">Wireframe</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This app build with the existing knowledge of the React basics, and give you further practice working with codebase linting, component testing, Redux Toolkit, and TypeScript. A user should, at the bare minimum: exercise (add exercise, [pushup, pull, number, completed/not] save to storage , loop)
* Create complex workouts easily
* Define your own exercises with custom durations
* Add , update and remove exercises 

This app used Redux Toolkit and state slices to manage any state data needed across multiple components. In the case where data is created and used only within one component (or possibly one and a few of its direct children), consider using useState() or useReducer() and traditional prop drilling. Most apps will use a combination of "local" state management (useState() and useReducer()) and "global" state management (Redux or Context API).

Apply the TypeScript static typing system. try to use TypeScript for the majority of React components! installed typescript, add support for TypeScript linting, and use either .ts or .tsx extension for the files to apply TypeScript type-checking on.

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
### Screenshots

### Built With

A few of the frameworks/libraries that were used to build the project are:

* [![React][React.js]][React-url]
* Firebase
* React Redux 
* Axios
* React Router
* EsLint and AirBnb
* Typescript

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Wireframe using Figma 
  ### Getting Started The App build out with simple wireframes using Figma.
<img src="/assets/images/homewireframe.png"
        alt="home page"
             height="80">
<img src="/assets/images/signinwireframe.png"
        alt="sign in page"
             height="80">
<img src="/assets/images/signupwireframe.png"
        alt="sign up page"
             height="80">
### How To Backup & Restore Your Workouts
You can export individual workouts or create an export of all your workouts and import them later. You can also transfer them to another device.

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
### Installation
_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._
### Installation
1. Get a free account at for firebase to create your own collection and add it to your .env file to connect your API to your Data base
2. Clone the repo
   ```sh
   git clone https://github.com/sisay2405/phiscal-fitness-app
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   ### Installation
4. Enter your firebase link in your `.env` file in your backend 
   ```js
   REACT_APP_FIREBASE_API_KEY = 'ENTER YOUR API KEY';
   REACT_APP_FIREBASE_AUTH_DOMAIN = 'ENTER YOUR FIREBASE_AUTH_DOMAIN';
   REACT_APP_FIREBASE_PROJECT_ID = 'ENTER YOUR FIREBASE_PROJECT_ID';
   REACT_APP_FIREBASE_STORAGE_BUCKET = 'ENTER YOUR FIREBASE_STORAGE_BUCKET';
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 'ENTER YOUR FIREBASE_MESSAGING_SENDER_ID';
   REACT_APP_FIREBASE_APP_ID = 'ENTER YOUR FIREBASE_APP_ID';
   ```
5. npm start for START the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Can be used to workout the Exercises your can create your own phisical finteness web app and share it with your community. You can:

- [x] creat, customezie Exercises
- [x] Add Exercises
- [x] Delete Exercises
- [x] Edit Exercises
- [x] User Sign In/Sign Up
    - [x] To creat your Exercises you will need to sign in/sign up


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sisay Areaya - sareaya@alphaworks.tech , abrehasisay04@gmail.com

Project Link: [https://github.com/sisay2405/phiscal-fitness-app]https://github.com/sisay2405/phiscal-fitness-app

<p align="right">(<a href="#readme-top">back to top</a>)</p>


Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

