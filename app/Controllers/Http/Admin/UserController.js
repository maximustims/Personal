'use strict'

const Hash = use('Hash')
const _ = use('lodash')
const User = use('App/Models/User');
const HelperQuery = use('App/Models/Share/HelperQuery');
const CE = require('@adonisjs/auth/src/Exceptions')


class UserController {
    async index({ request, response }) {
        let params = request.all();
        let and_array = [];
        let query = {};
        if (params.search) {
            and_array.push({
                $or: [
                    { name: new RegExp(params.search, 'i') },
                    { email: new RegExp(params.search, 'i') },
                ]
            })
        }
        if (params.roles) {
            and_array.push({
                roles: params.roles
            })
        }
        if (and_array.length > 0) {
            query = { $and: and_array };
        }
        let data = await HelperQuery.pagination(User, params.page, params.limit, query);

        return response.send({
            success: true,
            data
        })
    }

    async store({ request, response }) {
        let data = request.input('data');
        delete data.confirm_password;
        data.password = await Hash.make(data.password);
        let checkIsset = await User.count({
            $or: [
                { email: data.email },
                { name: data.name }
            ]
        });
        if (checkIsset > 0) throw new CE.InvalidApiToken('This user is already exists.');
        let newUser = new User(data);
        await newUser.save();

        return response.send({
            success: true,
        })
    }

    async show({ request, response, params }) {
        let user = await User.findById(params.id).lean();
        return response.send({
            success: true,
            data: user
        })
    }

    async update({ request, response, params }) {
        let userNew = request.input('data');
        let userOld = await User.findById(params.id);
        let userUpdate = _.extend(userOld, userNew);
        await userUpdate.save();
        return response.send({
            success: true,
        })
    }

    async changePassword({ request, response, params }) {
        let data = request.input('data');
        data.password = await Hash.make(data.password);
        await User.findByIdAndUpdate(params.id, {
            password: data.password
        });
        return response.send({
            success: true,
            data
        })
    }

    async destroy({ request, response, params }) {
        await User.findByIdAndRemove(params.id);
        return response.send({
            success: true,
        })
    }
}

module.exports = UserController
