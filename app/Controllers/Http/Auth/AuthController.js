'use strict'
const mongoose = use('mongoose');
const jwt = require('jsonwebtoken')
const CE = require('@adonisjs/auth/src/Exceptions')
const Hash = use('Hash')
const Encryption = use('Encryption')
const aguid = require('aguid');
const Redis = use('Redis');
const Helpers = use('Helpers');
const User = mongoose.model('User');

class AuthController {
    async login({ request, response }) {
        console.log("gndskgnsd");
        let data = request.all();
        let { username, password } = data;

        // Get user
        // let userLogin = await User.findOne(
        //     {
        //         $or: [
        //             { email: new RegExp(username, 'i') },
        //             { name: new RegExp(username, 'i') }
        //         ],
        //         roles: { $in: ['admin'] }
        //     }
        // ).lean();

        // if (!userLogin)
        //     throw new CE.UserNotFoundException(`Không tìm thấy user hoặc user không phải là admin`);

        // // Check password user login
        // let checkPassword = await Hash.verify(data.password, userLogin.password);
        // if (!checkPassword)
        //     throw new CE.PasswordMisMatchException('Mật khẩu không khớp');


        // let encrypted = Encryption.encrypt({
        //     user_id: userLogin._id
        // });

        // let idRedis = `PersonalUserLogin:${aguid()}`;
        // let redis = await Redis.set(idRedis, encrypted);
        // let token = jwt.sign(idRedis, 'secret');

        return response.send({
            success: true,
            username,
            password
        })
    }

    async checkLogin({ request, response, auth }) {
        try {
            let data = request.all();
            let userLogin = await auth.getUserByToken(data.token);

            return response.send({
                user: userLogin,
            });
        } catch (error) {
            console.log(error);
            return response.send({
                user: null
            });
        }
    }
}

module.exports = AuthController
