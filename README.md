# Sample Webpack Project

![alt_text](counter-app-min.jpg "Counter Screenshot")

I built a Webpack configuration around a counter application written in ES6 JavaScript. I used the default /src directory and implemented Webpack to take all the HTML, CSS, and JavaScript to the default /dist directory. I also implemented the clean-webpack-plugin to remove unused files in the /dist directory and uglyfyjs-webpack-plugin to optimize the JavaScript build.

## Demo

You can find a demo of the sample counter app [here](https://abuna1985.github.io/sample-webpack-project/)

## Prerequisites

Please make sure you have Node.js installed. You can find the link to download Node.js [here](https://nodejs.org/en/)

```javascript
// Verify Node was installed by running this command in your terminal
node -v
// You should get something like...
v12.8.1 // it may be a higher version number than this
```

## Getting Started

After downloading this repo, go to your terminal and install all the dependencies first.

```
npm install
```

## Running Your Build

**Compiles and hot-reloads for a development environment**
```
npm run serve
```

**Compiles and minifies for a production environment**
```
npm run build
```


## Built With

* [Webpack](https://webpack.js.org/guides/) - Used to style the components
* [fontawesome](https://fontawesome.com/start) - Used to generate FontAwesome Icons in component form


## Authors

* **Adam Abundis** - *Initial work* - [Abuna1985](https://github.com/Abuna1985)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Eve Porcello](https://github.com/eveporcello) - Lynda course [Learning Webpack 4](https://www.lynda.com/Webpack-tutorials/Learning-webpack-4/761966-2.html)
* [PurpleBooth README.ME project example](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
