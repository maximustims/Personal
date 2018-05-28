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
}).prefix('auth')

Route.group(() => {
  /** Module Auth */
  Route.post('/log-out', 'Auth/AuthController.logout');
  Route.post('/login', 'Auth/AuthController.login');
  Route.post('/check-login', 'Auth/AuthController.checkLogin')
  Route.post('/check-is-admin', 'Auth/AuthController.checkIsAdmin')
}).prefix('api/auth').middleware(['mongo']);

Route.group(() => {
  Route.resource('/index', 'Api/IndexController');
}).prefix('api/auth');

Route.any('/*', 'Web/IndexController.index')
