'use strict';

const BaseModel = use('MongooseModel')

/**
 * @class Foo
 */
class User extends BaseModel {
    static boot({ schema }) {

    }
    /**
     * User's schema
     */
    static get schema() {
        return {
            email: {
                type: String
            },
            name: {
                type: String
            },
            password: {
                type: String
            },
            roles: [{
                type: String,
                enum: ['admin', 'user', 'super_admin']
            }],
            status: {
                type: Number,
                enum: [0, 1, 2],
                default: 1
            },
            avatar: {
                type: String
            }
        };
    }

    static get schemaOptions() {
        return {
            collection: 'user'
        };
    }
}

module.exports = User.buildModel('User')
