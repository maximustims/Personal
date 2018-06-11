'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Contact
 */
class Contact extends BaseModel {
  /**
   * Contact's schema
   */
  static get schema() {
    return {
      email: {
        type: String
      },
      name: {
        type: String
      },
      phone: {
        type: Number
      },
      comment: {
        type: String
      }
    }
  }
}

module.exports = Contact.buildModel('Contact')
