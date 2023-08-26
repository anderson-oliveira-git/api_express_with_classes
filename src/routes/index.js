import { Router } from 'express';
import Controllers from '../controllers/index.js';
import Middlewares from '../shared/middlewares/index.js';

class Routes {
  constructor () {
    this.routes = Router();
    this.controllers = new Controllers();
    this.middlewares = new Middlewares();

    this.setRoutes();
  }

  setRoutes () {
    // http://localhost:3344/ ::
    this.routes.get('/', this.controllers.index);

    // http://localhost:3344/book/1 ::
    this.routes.get('/book/:id', 
      this.middlewares.verifyIfExistBook, 
      this.controllers.getBookById
    );
  }
}

export default Routes;