const express = require('express');
const fsp = require('fs').promises;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const fs = require('fs')
// const path = require('path')
const http = require('http').createServer(app);
const path = require('path');
const util = require('./lib/util');
const config = require('./config');
const schedule = require('node-schedule');
const moment = require('dayjs');
const knex = require('./lib/knex')('mysql', config[config.db]);
const dotenv = require('dotenv');

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

app.use(express.json());
app.use((req, res, next) => {
  req.$db = knex;
  req.$util = util;
  req.$config = config;
  // req.$redis = asyncRedisClient
  next();
});
//app.use(cors());
app.use(cors({
  origin: process.env.CORS_IP || 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// ---------------------------- Schedule ----------------------------
// const date = new Date(2012, 11, 21, 5, 30, 0);
// const job = schedule.scheduleJob({ hour: 10, minute: 18 }, async function () { // at 10:15 daily
// const job = schedule.scheduleJob('5 * * * * *', async () => { // at 10:15 daily
//   let res = await genLog()
//     if (!res.status) {
//         console.log('Gen file Failed at', res.path, moment().format('YYYYMMDD'))
//     } else {
//         console.log('Gen file successfully at', res.path, moment().format('YYYYMMDD'));
//     }

// });
// async function genLog() {
//   return new Promise(async resolve => {
//     try {
//       let pathExport = './public/log'
//       let filename = `log-${moment().format('YYYYMMDD')}.txt`
//       var fs = require('fs')
//       await ensureFolder(pathExport)
//       fs.appendFile(path.resolve(pathExport, filename), `new-${moment().format('YYYY/MM/DD-hh:mm:ss')}\n`, function (err) {
//         if (err) {
//           console.log('err', err)
//           resolve({ status: false, err: 'Cannot gen txt file', path: pathExport + '/' + filename })
//         } else {
//           console.log('DONE', pathExport + '/' + filename)
//           resolve({ status: true, path: pathExport + '/' + filename })
//         }
//       })
//     } catch (error) {
//       var fs = require('fs')
//       fs.appendFile(path.resolve(pathExport, filename), 'new data err', function (err) {
//         if (err) {
//           console.log('err', err)
//           resolve({ status: false, err: `Cannot gen txt file, ${error}`, path: pathExport + '/' + filename })
//         }
//         console.log('err', error)
//         resolve({ status: false, err: error, path: pathExport + '/' + filename })
//       })
//     }
//   })
// }
// async function ensureFolder(folder) {
//   try {
//     await fsp.stat(folder)
//   } catch (e) {
//     console.log('ensure', e)
//     await fsp.mkdir(folder)
//   }
// }

// ---------------------------- APIs SERVICE ----------------------------
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT} (${process.env.NODE_ENV}) (${process.env.CORS_IP})`);
});
app.use(
  '/api',
  bodyParser.json({ limit: 1024 * 1024 * 1024 }),
  require('./api')
);
