'use strict'

/*
 * adonis-mongoose-model
 *
 * (c) Juan Pablo Barreto <juampi92@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ioc, ServiceProvider } = require('@adonisjs/fold')
const Mongoose = require('mongoose')

class MongooseProvider extends ServiceProvider {
  /**
   * Install mongoose scheme
   */
  _registerSchema () {
    ioc.extend('Adonis/Src/Auth',
      'mongoose',
      (app) => require('./MongoSchema'),
      'scheme')
  }


  async register () {
    this._registerSchema()
  }

  /**
   * On boot
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    /**
     * Register command with ace.
     */
  }
}

module.exports = MongooseProvider
