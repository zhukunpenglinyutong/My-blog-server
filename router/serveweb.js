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

router
  .get('/serveweb/test',article.test)
  .get('/serveweb/article/getarticles',article.getArticles)
  .post('/serveweb/article/insertarticle',article.insertArticle)
  .post('/serveweb/article/updatearticle',article.updateArticle)
  .post('/serveweb/article/delectarticle',article.delectA)
  .post('/serveweb/type/articletype/settype', articleType.setType)
  
module.exports = router