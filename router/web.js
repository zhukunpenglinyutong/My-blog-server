/**
 * @说明 web端 API路由
 * @inputtime 2019.4.9 23:03
 */

const express = require('express')
const router = express.Router();


// /**
//  * view_houtai 部分路由
//  */
// const houduanCtrl = require('../controller/view_houtai/article') // 文章API
// const typeCtrl = require('../controller/view_houtai/type') // 文章类型API

// router
//   .get('/web/test',houduanCtrl.test)
//   .get('/web/gettables',houduanCtrl.getTables)
//   .post('/web/articlenew',houduanCtrl.newtianJia)
//   .post('/web/articleadd',houduanCtrl.tianJia)
//   .post('/web/delectarticle',houduanCtrl.delectA)
//   .post('/web/type/settype', typeCtrl.setType)
  
module.exports = router