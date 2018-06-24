'use strict'

const Hash = use('Hash')
const _ = use('lodash')
const Web = use('App/Models/Web');
const HelperQuery = use('App/Models/Share/HelperQuery');
const CE = require('@adonisjs/auth/src/Exceptions')


class WebController {
    async index({ request, response }) {
        let params = request.all();
        let and_array = [];
        let query = {};
        if (params.search) {
            and_array.push({
                $or: [
                    { name: new RegExp(params.search, 'i') },
                    { url: new RegExp(params.search, 'i') },
                ]
            })
        }

        if (and_array.length > 0) {
            query = { $and: and_array };
        }
        let data = await HelperQuery.pagination(Web, params.page, params.limit, query);

        return response.send({
            success: true,
            data
        })
    }

    async store({ request, response, auth }) {
        let data = request.input('data');
        let newWeb = new Web(data);
        let userLogin = await auth.currentUser();
        newWeb.creater = userLogin._id;

        await newWeb.save();

        return response.send({
            success: true,
        })
    }

    async show({ request, response, params }) {
        let web = await Web.findById(params.id).lean();
        return response.send({
            success: true,
            data: web
        })
    }

    async update({ request, response, params }) {
        let userNew = request.input('data');
        let userOld = await Web.findById(params.id);
        let userUpdate = _.extend(userOld, userNew);
        await userUpdate.save();
        return response.send({
            success: true,
        })
    }

    async changePassword({ request, response, params }) {
        let data = request.input('data');
        data.password = await Hash.make(data.password);
        await Web.findByIdAndUpdate(params.id, {
            password: data.password
        });
        return response.send({
            success: true,
            data
        })
    }

    async destroy({ request, response, params }) {
        await Web.findByIdAndRemove(params.id);
        return response.send({
            success: true,
        })
    }
}

module.exports = WebController
