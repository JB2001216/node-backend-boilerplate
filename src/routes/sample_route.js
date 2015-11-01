import express from 'express';
const rtr = express.Router();

/**
 * SampleRoute is a sample class that serves the hello_world endpoint.
 */
export default class SampleRoute {
  /**
   * Place all routes inside the constructor, so that they will be built.
   */
  constructor() {

    /**
     * @api {get} /sample_route/hello_word/:message Hello Echo Message
     * @apiName HelloEcho
     * @apiGroup Sample
     *
     * @apiParam {String} message Some unique message to echo with a hello.
     * @apiSuccessExample {json} Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "message": "Hello Person":
     *     }
     *
     * @apiSuccess {Object} result JSON Object representing the client object in the database.
     */
    rtr.get('/hello_world/:message', (req, res) => {
      return res.send({
        message: 'Hello ' + req.params.message
      });
    });

  }

  /**
   * Get the router instance for this class
   */
  router() { return rtr; }
}
