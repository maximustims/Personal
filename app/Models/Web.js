'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Web
 */
class Web extends BaseModel {
  /**
   * Web's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = Web.buildModel('Web')
