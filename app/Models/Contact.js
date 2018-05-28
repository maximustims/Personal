'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Contact
 */
class Contact extends BaseModel {
  /**
   * Contact's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = Contact.buildModel('Contact')
