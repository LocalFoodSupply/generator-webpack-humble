'use strict';
const Generator = require('yeoman-generator');
const yosay = require( 'yosay');
const path = require('path');


module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Call the super
    super(args, opts);
    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  // composability other generator
  initializing() {
    this.log(yosay('Welcome!!!\n Write Demo with pug, stylus and ES6 '));
    this.data = {
      appName: path.basename(process.cwd()),
    };
  }

  // prompting 
  // return promise
  // be provided by inquirer.js
  prompting() {
    let prompts = [{
      type: 'input',
      name: 'appName', // promise return this, like xxx.name
      message: 'Your project name',
      default: this.data.appName// Default to current folder name
    }];

    return  this.prompt(prompts).then(answers=> {
      this.data.appName = answers.appName;
    });
  }
  
  writing() {
    // copy package and webpack config
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.data
    );
    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    // copy and move app folder
    this.fs.copy(
      this.templatePath('app/src/index.pug'),
      this.destinationPath('app/src/index.pug')
    );
    this.fs.copy(
      this.templatePath('app/src/other.pug'),
      this.destinationPath('app/src/other.pug')
    );
    this.fs.copy(
      this.templatePath('app/src/js/index.js'),
      this.destinationPath('app/src/js/index.js')
    );
    this.fs.copy(
      this.templatePath('app/src/js/other.js'),
      this.destinationPath('app/src/js/other.js')
    );
    this.fs.copy(
      this.templatePath('app/src/css/index.styl'),
      this.destinationPath('app/src/css/index.styl')
    );
  }

  install() {
    this.yarnInstall();
  }


};
