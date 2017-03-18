# react-base
A base repo with the setup for es2017 react development

## Setup
Install the requirements
```
$ npm install
```

For development, including hot-loading:
```
$ npm run dev
```

For production, including bundle minifying:
```
$ npm run build
$ npm run start:prod
```

For production using docker:
```
$ docker build -t {your-app-name} .
$ docker run -p 3000:3000 -d {your-app-name}
```

## Usage
To use in a new project, first create your repo, then:
```
git remote add base https://github.com/robertsben/react-base.git
```

To update from base:
```
git pull base master
```

## Description
The current entrypoint is `src/index.jsx`, which currently spits out a hello world, through `public/index.html`.

ES2017 is transpiled using babel and webpack into `public/bundle.js`.
