/*
 * @author		Antonio Membrides Espinosa
 * @package    	demo
 * @created		9/0/2017
 * @updated		9/0/2017
 * @copyright  	Copyright (c) 2015-2020
 * @license    	GPL v3.0
 * @version    	1.0
 * */
class Main
{
    index(req, assist){
        return "HOLA";
    }

    preAction(req, assist) {
        //... do it
    }

    posAction(req, assist) {
        //... do it
    }
    /*
     * name: form
     * description: ejemplo de la utilizacion de formularios
     * */
    form(req) {
        return require('fs').readFileSync(__dirname + "/../client/html/form.html");
    }
    /*
    * name: request
    * description: maipular las peticiones WEB y CLI
    * */
    req(req, assist){
        return req;
    }

    config(req, assist){

    }
}
exports.Main = Main;