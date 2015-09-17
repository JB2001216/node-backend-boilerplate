const rtr = require('express').Router();

/**
 * SampleRoute is a sample class that serves the hello_world endpoint.
 */
export default class SampleRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    rtr.get('/hello_world', (req, res) => {
      return res.send('Hello World!');
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
