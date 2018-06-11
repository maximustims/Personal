'use strict'
const Contact = use('App/Models/Contact');

class ContactController {
    async store({ request, response }) {
        let data = request.input('data');
        let newContact = new Contact(data);
        await newContact.save();
        return response.send({
            success: true,
        });
    }
}

module.exports = ContactController
