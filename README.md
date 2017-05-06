# reddit-reader
## Description
A little react app to browse posts from reddit, written as a small learning exercise.
Includes:

* Use of ES-2017
* Usage of react JS
    * Organisation of react components, containers
* Use of flux
    * Use of `react-redux connect`
    * Use of actions, reducers
* Use of `fetch` api
* 

## Setup
```
git clone https://github.com/robertsben/reddit-reader.git
cd reddit-reader
npm install
```

## Usage
1a. To run in docker (recommended):
```
$ docker build -t reddit-reader .
$ docker run -p 3000:3000 -d reddit-reader
```

1b. To run without docker (using npm):
```
npm run build
npm run start:prod
```

2. Navigate to [localhost:3000](http://localhost:3000)
