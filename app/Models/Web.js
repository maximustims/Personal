'use strict'

const BaseModel = use('MongooseModel')
const { ObjectId } = use('mongoose').Schema.Types;
/**
 * @class Web
 */
class Web extends BaseModel {
  /**
   * Web's schema
   */
  static get schema() {
    return {
      name: {
        type: String
      },
      url: {
        type: String
      },
      status: {
        type: Number,
        enum: [0, 1, 2],
        default: 1
      },
      order:{
        type: Number,
        default: 0
      },
      creater: {
        type: ObjectId,
        ref: 'User',
      }
    }
  }
  static get schemaOptions() {
    return {
      collection: 'web'
    };
  }
}

module.exports = Web.buildModel('Web')
