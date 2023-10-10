import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import puppeteer from 'puppeteer';

import appSrc from './app.js';

const app = appSrc(express, bodyParser, puppeteer);
http.createServer(app).listen(process.env.PORT || 3000, () => console.log('Server on port 3000 was started!'));
