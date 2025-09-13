const express = require('express')
const settingCtrl = require('../ctrl/setting')
const knex = require('../lib/knex')('mysql')

const router = express.Router()
module.exports = router

router.post('/get-setting', settingCtrl.getSetting)

router.get('/settingStat', async (req, res) => {
    try {
      let rows = await knex('sys_config');
      res.send({
        status: true,
        rows,
      })
    } catch (err) {
        console.error(err)
        res.send({
        status: false,
        message: err,
      })
    }
  })