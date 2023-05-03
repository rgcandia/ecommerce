//importo dependencias.
 import express from 'express'
import cors from 'cors'
 import morgan from 'morgan';
import routes from './routes/index.js';
//config servidor
const server = express();

server.use(cors());
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use('/', routes);
//
export default server;