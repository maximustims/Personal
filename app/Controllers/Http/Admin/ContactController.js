'use strict'
const Contact = use('App/Models/Contact');
const _ = use('lodash');
const HelperQuery = use('App/Models/Share/HelperQuery');
const CE = require('@adonisjs/auth/src/Exceptions');

class ContactController {
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
        if (and_array.length > 0) {
            query = { $and: and_array };
        }
        let data = await HelperQuery.pagination(Contact, params.page, params.limit, query);

        return response.send({
            success: true,
            data
        })
    }

    async show({ request, response, params }) {
        let user = await Contact.findById(params.id).lean();
        return response.send({
            success: true,
            data: user
        })
    }

    async destroy({ request, response, params }) {
        await Contact.findByIdAndRemove(params.id);
        return response.send({
            success: true,
        })
    }
}

module.exports = ContactController
