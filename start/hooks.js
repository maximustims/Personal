const { ioc } = require('@adonisjs/fold')
const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersRegistered(() => {
    ioc.extend('Adonis/Src/Auth',
      'mongooseSchema',
      (app) => require('../providers/MongoSchema'),
      'schema')
})
