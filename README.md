# heroku-web-console

Tools for managing Heroku apps. Provides a proxy endpoint to the Heroku platform API.

**Do not run this on a public server**

## Install

```
npm install
```

## Run

You need to have an environment variable called `HEROKU_API_KEY` set containing your Heroku Platform API key

```
export HEROKU_API_KEY=<your API key>
node index.js
```

or

```
HEROKU_API_KEY=<your API key> node index.js
```

The site is now running at http://localhost:14000
