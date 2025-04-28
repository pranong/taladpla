const express = require("express");

const router = express.Router()
module.exports = router
const knex = require('../lib/knex')('mysql')

router.use('/person', require('./person'))
router.use('/stock', require('./stock'))
router.use('/setting', require('./setting'))

router.get('/', (req, res) => {
    res.send({
      status: true,
    })
})
  
router.get('/version', (req, res) => {
    res.send({
      status: true,
      message: 'welcome to app'
    })
})

router.post('/onSearchByCriteria', async (req, res) => {
  console.log('res', res)
  try {
    let rows = await knex('trn_po_dtl');
    res.send({
      status: true,
      rows,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error,
    });
  }
});
  
router.get('/db-status', async (req, res) => {
    try {
      let rows = await knex('settings')
      res.send({
        status: true,
        message: rows,
      })
    } catch (err) {
        console.error(err)
        res.send({
        status: false,
        message: err,
      })
    }
  })
