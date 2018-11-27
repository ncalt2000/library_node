import express from 'express';
import cors from 'cors';
import db from './config/db';
import LibraryController from './controllers/libraryController';
import UsersController from './controllers/usersController';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.use('/library', LibraryController);
app.use('/user', UsersController);

module.exports = app;
