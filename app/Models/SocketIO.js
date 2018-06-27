'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class SocketIO
 */
class SocketIO extends BaseModel {
  /**
   * SocketIO's schema
   */
  static get schema() {
    return {
      channel: {
        type: String
      },
      user_online: {
        type: Number
      }
    }
  }
  static get schemaOptions() {
    return {
      collection: 'socket_io'
    };
  }
}

module.exports = SocketIO.buildModel('SocketIO')
