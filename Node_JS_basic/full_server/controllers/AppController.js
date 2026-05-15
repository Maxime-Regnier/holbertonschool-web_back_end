/**
 * Controller for the homepage route.
 */
export default class AppController {
  /**
  * Returns a 200 status with a welcome message.
  * @param {import('express').Request} request
  * @param {import('express').Response} response
  */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}
