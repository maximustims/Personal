'use strict'

const Helpers = use('Helpers');
const Hash = use('Hash')
const _ = use('lodash')
const User = use('App/Models/User');
const HelperQuery = use('App/Models/Share/HelperQuery');


class UserController {
    async index({ request, response }) {
        let params = request.all();
        let data = await HelperQuery.pagination(User, params.page , params.limit);

        return response.send({
            success: true,
            data
        })
    }

    async store({ request, response }) {
        let data = request.input('data');
        delete data.confirm_password;
        data.password = await Hash.make(data.password);
        let newUser = new User(data);
        let saveUser = await newUser.save();

        return response.send({
            success: true,
        })
    }

    async info({ request, response, params }) {
        let user = await User.findById(params.id).lean();
        return response.send({
            success: true,
            user
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
