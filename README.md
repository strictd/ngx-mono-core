# NGX-MONO-CORE
# Strict Development Monorepo for Angular


There are no active projects in master branch of this repo. For an example goto the [public_website](https://github.com/strictd/ngx-mono-core/tree/public_website) branch


## Public Website Setup Instructions
Once you've clone the repo install the node_modules in your projects root directory
Checkout the public_website branch for the basic website example, change directory to the added strictdev/public_website project
run npm start script in package. runs webpack-dev-server using config from core _scripts/webpack-ng.js and the local .env dotenv file.

```
git clone https://github.com/strictd/ngx-mono-core
cd ngx-mono-core
npm install
git checkout public_website
cd strictdev/public_website
npm run start
```

### Public Website JIT to AOT compiling
For JIT compiling nothing extra needs changed, this is the default compiler

For AOT compiling a set of ngfactory files need to be generated. There is a package.json script to create these files.
You must be in the strictdev/public_website project folder when you are editing the configs or running the npm script commands
From the strictdev/public_website project folder run `npm run aot` . You'll see two extra folders created aot/ and generated/
To tell webpack dev server to use AOT compiling set the COMPILER=AOT in strictdev/public_website/.env, then run `npm run start` as normal.

### Public Website Development to Production Environments
For Development nothing extra needs changed, this is the default environment

For Production there are two options, option 1 always superseeds option 2
1) set NODE_ENV=PRODUCTION in the projects .env file
2) npm script matches 'build' or 'prod' in script command

startup webpack-dev-server as normal from the project folder `npm run start`

### Public Website Create Static Website files
There is a npm script shortcut setup as `npm run build` that creates a dist/ folder that holds your static website.



## Registration Website Setup Instructions
The Registration frontend site setup is identical to the Public Website setup. `git checkout registration` to get started. The Registration project has a RESTful API component that needs spun up. open a separate command prompt, change directories to strictdev/registration. running `npm run api` from here will get the server side running locally. There are some detailed api settings in strictdev/registration/src/api/registration-api.ts

