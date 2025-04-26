const knex = require('../lib/knex')('mysql')
const path = require('path')
const dayjs = require('dayjs')
const ctrl = {}
module.exports = ctrl

ctrl.getStock = async (req, res) => {
    try {
      console.log('Pass', req.body)
      let rows = []
      let type = req.body.type || null
      let query = req.body.query || null
      let cond = function() {
        if (type) {
          this.where('type', '=', type)
        }
        if (query) {
          this.where('name', 'like', `%${query}%`)
        }
      }
      rows = await knex('stock').where(cond)
      res.send({
        status: 100,
        message: 'Donor Requst',
        items: rows,
      })
    } catch (err) {
      console.error(err)
    }
}

ctrl.getStockItem = async (req, res) => {
  try {
    console.log('Pass', req.body)
    if (!req.body.stkId) throw new Error('StkId is required')
    let rows = await knex('stock').where('stkId', req.body.stkId)
    res.send({
      status: 100,
      message: 'Donor Requst',
      items: rows.length ? rows[0] : null,
    })
  } catch (err) {
    console.error(err)
  }
}
