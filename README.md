# generator-webpack-humble

![alt tag](https://i.redd.it/65afg8wcubry.jpg)

Create a web server using Pug(Jade) + Stylus + ES6 + Webpack dev server.

## Installation

```sh
    $npm install -g generator-webpack-humble  
```

## Usage

```sh
    $ yo webpack-humble
```

## Npm commands list

```sh
    $ npm dev # Launches the server
    $ npm build # Built the files
```

## Structure

Generated project has the following structure:

```sh
├── app
│   ├── dist # Build files finally 
│   │   ├── css
│   │   │   ├── index.[hash].css
│   │   │   └── index.[hash].css.map
│   │   ├── index.html
│   │   ├── js
│   │   │   ├── index.[hash].js
│   │   │   ├── index.[hash].js.map
│   │   │   ├── other.[hash].js
│   │   │   └── other.[hash].js.map
│   │   └── other.html
│   └── src
│       ├── css # Write stylus to CSS 
│       │   └── index.styl
│       ├── index.pug # Write pug to HTML
│       ├── js # Write ES6
│       │   ├── index.js
│       │   └── other.js
│       └── other.pug # Write pug to HTML
├── package.json
└── webpack.config.js
```

