import App from './src/app.js';

class Server {
  constructor () {
    this.http = new App().server;
    this.port = process.env.SERVER_PORT || 3344;

    this.startServer();
  }

  startServer () {
    this.http.listen(this.port, err => {
      if (!err) {
        console.log('🚀 Server running: http://localhost:' + this.port);
        return;
      }
      
      console.log('🧰 Server error:' + err);
    });
  }
}

export default new Server();