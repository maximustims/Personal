'use strict'

class MongoDetector {
  async handle ({ request }, next) {
    // call next to advance the request
    await next();
  }
}

module.exports = MongoDetector
