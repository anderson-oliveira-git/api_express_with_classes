import express from 'express';
import Routes from './routes/index.js';

class App {
  constructor () {
    this.server = express();
    this.router = new Routes();

    this.middlewares();
    this.routes();
  }

  middlewares () {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes () {
    this.server.use(this.router.routes);
  }
}

export default App;