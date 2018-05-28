'use strict';

const BaseModel = use('MongooseModel')

/**
 * @class Foo
 */
class User extends BaseModel {
    static boot({ schema }) {
        // Hooks:
        // this.addHook('preSave', () => {})
        // Indexes:
        // this.index({}, {background: true})
        // Virtuals, etc:
        // schema.virtual('something').get(.......)
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
                enum: ['admin', 'user', 'supper_admin']
            }]
        };
    }

    static get schemaOptions() {
        return {
            collection: 'user'
        };
    }
}

module.exports = User.buildModel('User')
