'use strict';

import { readFileSync } from 'fs';
const api_settings: any = {
  http_server: true,
  logger: 'dev',

  bodyparser_json: {},
  bodyparser_urlencoded: {extended: true},

  session_secret: 'change me'
};
process.env.api_settings = api_settings;

process.env.IP = '0.0.0.0';
process.env.PORT = '4013';

// process.env.KNEX_SHOW_SQL = true;

// Google Sheet Settings
/*
process.env.GOOGLE_API_SHEET = '';
process.env.GOOGLE_API_EMAIL = '';
process.env.GOOGLE_API_CERT = './assets/google_api_cert.pem';
*/

// Google RECaptcha Key Settings
/*
process.env.GOOGLE_CAPTCHA = ''; // ReCaptcha Serverside Key
*/

// ShortID Config Settings
process.env.SHORTID_CASESENSITIVE = 'false';
process.env.SHORTID_CHARS = '23456789-ABCDEFGHJKLMNPQRSTVWXYZ';
process.env.SHORTID_REMOVEWORDS = 'anal,anus,arse,ass,ballsack,balls,bastard,bitch,biatch,bloody,blowjob,blowjob,bollock,bollok,boner,boob,bugger,bum,butt,buttplug,clitoris,cock,coon,crap,cunt,damn,dick,dildo,dyke,fag,feck,fellate,fellatio,felching,fuck,fudgepacker,fudgepacker,flange,goddamn,god,hell,homo,jerk,jizz,knobend,labia,lmao,lmfao,muff,nigger,nigga,omg,penis,piss,poop,prick,pube,pussy,queer,scrotum,sex,shit,slut,smegma,spunk,tit,tosser,turd,twat,vagina,wank,whore,wtf';

// Squareup Settings
/*
process.env.SQUARE_ACCESS_TOKEN = '';
process.env.SQUARE_BASE_URL = 'https://connect.squareup.com/v2/';
*/

import * as RegistrationRoutes from '../routes/registration';
const _routes = [
  RegistrationRoutes
];




// import * as REGISTRATION_MYSQL from '../controllers/registration-mysql';
// import * as GoogleSheets from '../controllers/google-sheets.v4';
import * as CacheSheets from '../controllers/cache-sheets';
// import * as CachePdfWysiwyg from '../../../utils/pdf-wysiwyg/controllers/pdf-wysiwyg-cache';

const _sources = [
  {
    'store_id': 'strictdev',
    'registration': {
      'sheets': CacheSheets
    }
  }
];



import * as express from 'express';
import { API, APIConfig } from '../../../../_scripts/api';
const app = express();

// add Redis Server Support
/*
import { DB as RedisDB } from '../../../db/redis_example';
RedisDB.config = { ip: '127.0.0.1' };
app.locals.redisDB = RedisDB;
*/

// add database sources to app
app.locals.sources = _sources;

// Preconfiguation of express app
APIConfig(app, api_settings);

// configure routes
_routes.map(r => app.use(r));


// Setup API Listener

API(app, api_settings);
