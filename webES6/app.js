import express from 'express';
import Router from './controller/route';
import bodyParser from 'body-parser';
import {logInfo} from './lib/loger';

const app = express();
const router = express.Router();
const port = '3001';

const evn = process.env.NODE_ENV || 'production';

console.log( `==${process.env.HOME}` )

app
.set( 'views', `${__dirname}/views`)
.set( 'view engine', 'ejs' )
.use( express.static( `${__dirname}/assets`, {
	index: 0,
	maxAge: 600000
}))
//.use( express.favicon() )
.use( bodyParser.urlencoded({
	extended: 1
}))
.use( Router( router ))
.listen( port, function(){
	logInfo.info(`server start listening on ${port}`);
	console.log(`server start listening on ${port}`);
})