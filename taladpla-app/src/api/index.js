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
      message: 'READY!'
    })
})

router.get('/dbStatus',async (req, res) => {
  try {
    let data = await knex('sys_config');
    res.send({
      status: true,
      data,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error,
    });
  }
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
  
router.post('/getMasterData', async (req, res) => {
    try {
      let response = await knex.raw('select * from get_master_data(?)', ['all'])
      console.log('row', response.sortedRows);
      let sortedRows = {}
      for (let i = 0; i < response.rows.length; i++) {
        const element = response.rows[i];
        if (sortedRows[element.key] && sortedRows[element.key].length > 0) {
          sortedRows[element.key].push({
            name: element.name,
            value: element.value
          })
        } else {
          sortedRows[element.key] = [
            {
              name: element.name,
              value: element.value,
            },
          ];
        }
      }
      console.log('sortedRows', sortedRows);
      res.send({
        status: true,
        data: sortedRows,
      });
    } catch (err) {
        console.error(err)
        res.send({
        status: false,
        message: err,
      })
    }
  })
