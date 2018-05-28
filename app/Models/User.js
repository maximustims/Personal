'use strict';

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const UserSchema = new Schema({
//     email: {
//         type: String
//     },
//     name: {
//         type: String
//     },
//     password: {
//         type: String
//     },
//     roles: [{
//         type: String,
//         enum: ['admin', 'user', 'supper_admin']
//     }]
// }, {
//         collection: 'user',
//         timestamps: true
//     }
// );

// module.exports = mongoose.model('User', UserSchema);

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
        }
    }
}

module.exports = User.buildModel('User')
