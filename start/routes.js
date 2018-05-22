'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.post('check-login', 'Api/AuthController.checkLogin')
  Route.post('login', 'Api/AuthController.login')
}).prefix('auth')

Route.group(() => {
  /** Module Auth */
  Route.post('/log-out', 'AuthController.logout');
  Route.post('/login', 'AuthController.login');

  Route.resource('/index', 'Api/IndexController');
}).prefix('api');

Route.any('/*', 'Web/IndexController.index')
