'use strict'

const Helpers = use('Helpers');
const fs = require('fs');
const Glob = require('Glob');

class HelperQuery {
  constructor(request) {
  }

  static async pagination(Model, page, limit, query = {}, sort = '-_id' ) {
    page = parseInt(page) || 1;
    let itemsPerPage = parseInt(limit) || 10;
    let items = await Model.find(query).sort(sort).limit(itemsPerPage).skip(itemsPerPage * (page - 1)).lean();
    let total = await Model.count(query);

    return {
      totalItems: total,
      totalPage: Math.ceil(total / itemsPerPage),
      currentPage: page,
      itemsPerPage: itemsPerPage,
      items,
    }
  }
}

module.exports = HelperQuery;
