'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'mongoose',
  mongoose:{
    serializer: 'mongoose',
    scheme: 'mongoose',
    model: 'App/Models/User',
    token: 'App/Models/Token',
    uid: 'username', // The user identifier. Ej: email, username
    password: '', // Password field if using user-password validation
    expiry: '30d', // Not yet implemented
  },
  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */
 api: {
  serializer: 'mongoose',
  scheme: 'api',
  model: 'App/Models/User',
  token: 'App/Models/Token',
  uid: 'username', // The user identifier. Ej: email, username
  password: '', // Password field if using user-password validation
  expiry: '30d', // Not yet implemented
},



  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    serializer: 'MongoSerializer',
    model: 'App/Models/User',
    scheme: 'MongoSchema',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    serializer: 'MongoSerializer',
    model: 'App/Models/User',
    scheme: 'MongoSchema',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  }
}
