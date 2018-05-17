'use strict'

const Helpers = use('Helpers');
const fs = require('fs');
const Glob = require('Glob');

class Storage {
  constructor(request) {
    this.root = Helpers.appRoot();
  }

  checkFile(link){
    return fs.existsSync(link);
  }

  listFile(url){
    let path = `${this.root}/${url}`;
    let checkExist = fs.existsSync(path);
    if(checkExist){
      return fs.readdirSync(path);
    }
    return [];
  }
}

module.exports = Storage;
