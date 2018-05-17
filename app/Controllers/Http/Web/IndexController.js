'use strict'
const Env = use('Env');
const Storage = use('App/Models/Share/Storage');

class IndexController {
    index({ request, view, response }) {
        let env = Env.get('NODE_ENV');
        let listScript = [];
        let listStyle = [
        ];

        if (env == 'production') {
            let listScriptInclude = ['inline', 'polyfills', 'scripts', 'main']
            let storage = new Storage();
            let listFile = storage.listFile('public/build');
            listScriptInclude.forEach(file => {
                let scriptFile = '';
                let find = listFile.find(script => {
                    scriptFile = script;
                    if (script.indexOf(file) < 0) return false;
                    return true;
                });
                listScript.push(scriptFile);
            })
            let findStyle = listFile.find(file => file.indexOf('styles') > -1);
            if (findStyle) listStyle.push(`build/${findStyle}`);
        }
        else listScript = ['inline', 'polyfills', 'styles', 'scripts', 'vendor', 'main'];

        return view.render('index', {
            listScript,
            listStyle,
            env
        });
    }
}

module.exports = IndexController
