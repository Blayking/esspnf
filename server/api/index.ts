import { WebApp } from 'meteor/webapp';
import { app } from './data';

WebApp.connectHandlers.use(app);
