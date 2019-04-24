/**
 * @说明 serveweb端 API路由
 * @inputtime 2019.4.9 23:03
 */

const express = require('express')
const router = express.Router();


/**
 * serveweb 部分路由
 */
const article = require('../controller/serveweb/article') // 文章API
const articleType = require('../controller/serveweb/articletype') // 文章类型API
const getDataBySql = require('../controller/getDataBySql')

router
  .get('/serveweb/test',article.test) // 测试路由
  .get('/serveweb/article/getarticles',article.getArticles) // 文章路由
  .post('/serveweb/article/insertarticle',article.insertArticle)
  .post('/serveweb/article/updatearticle',article.updateArticle)
  .post('/serveweb/article/delectarticle',article.delectArticle)
  .get('/serveweb/type/gettypes', articleType.getTypes) // 文章类型路由
  .post('/serveweb/type/insertype', articleType.insertType)
  .post('/serveweb/type/updatetype', articleType.updateType)
  .post('/serveweb/type/delecttype', articleType.delectType)
  .post('/serveweb/getdatabysql', getDataBySql.getDataBySql) // getDataBySql

module.exports = router