const express = require('express')
const router = express.Router();


/**
 * view_houtai 部分路由
 */
const houduanCtrl = require('../controller/view_houtai/article') // 文章API
const typeCtrl = require('../controller/view_houtai/type') // 文章类型API

router
  .get('/test',houduanCtrl.test)
  .get('/gettables',houduanCtrl.getTables)
  .post('/articlenew',houduanCtrl.newtianJia)
  .post('/articleadd',houduanCtrl.tianJia)
  .post('/delectarticle',houduanCtrl.delectA)
  .post('/type/settype', typeCtrl.setType)
  
module.exports = router