const { exec, escape } = require('../../db/mysql.js')
const mysql = require('mysql')
const { SuccessModel, ErrorModel } = require('../../model/resModel.js')
const uuidv4 = require('uuid/v4')
const moment = require('moment')

/**
 * @overview（GET）测试 Express 服务是否可以正常启动
 * 
 * @param {Object} req 请求参数（里面的body很关键）
 * @returns {msg:"测试：node服务器启动成功"}
 * 
 * @inputtime 2019-4-8 14:32
 * @lasttime 2019-4-8 14:32
 */
const test = (req,res,next) => {
  res.json(new SuccessModel({msg:"测试：后台服务启动成功"}))
}

/**
 *（GET）查询数据库 中所有的文章
 * 
 * @returns Array [{}]
 */
const getArticles = (req,res,next) => {
  // DATE_FORMAT(changetime, '%Y-%m-%d %H:%m:%S') 这种写法可以转换前台展示的 2014-11-11T00:00:00.000Z 形式为正常理解格式
  const sql = `select *, DATE_FORMAT(changetime, '%Y-%m-%d %H:%m:%S') as changetime, DATE_FORMAT(lasttime, '%Y-%m-%d %H:%m:%S') as lasttime from blog_article where dr = 1 order by changetime DESC`
  exec(sql).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）新建文章内容
 * 
 * @param {} 新建内容的 标题 和 内容
 * @returns Object {}
 */
const insertArticle = (req,res,next) => {
  let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let articletext = mysql.escape(body.articletext)
  let title = mysql.escape(body.title)
  let introduce = mysql.escape(body.introduce)

  let uuid = uuidv4()
  // let sql = `INSERT INTO blog_article (pk, title, introduce, articletext, lasttime, changetime) VALUES ('${uuid}', ${title}, ${introduce}, ${articletext}, '${moment().format('YYYY-MM-DD HH:mm')}', '${moment().format('YYYY-MM-DD HH:mm')}')`
  let sql = `INSERT INTO blog_article (pk, title, introduce, articletext, lasttime, changetime) VALUES ('${uuid}', ${title}, ${introduce}, ${articletext}, now(), now())`  
  exec(sql).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）修改文章内容
 * 
 * con 是前后端协商好的 前端传过来的数据，必须是 '{}' 这种类型的，因为 Express 会解析一下的，如果只传字符串的话，解析会有问题
 * 
 * @param {} 修改之后的内容
 * @returns Object {} 里面有个参数表示影响了几行，如果 >1 表示成功了
 */
const updateArticle = (req,res,next) => {
  let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let articletext = mysql.escape(body.articletext)
  let title = mysql.escape(body.title)
  let introduce = mysql.escape(body.introduce)
  let pk = mysql.escape(body.pk)

  let sql = `UPDATE blog_article SET articletext = ${articletext}, title = ${title}, introduce = ${introduce}, changetime = '${moment().format('YYYY-MM-DD HH:mm')}' WHERE pk = ${pk}`
  
  exec(sql).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）删除文章 
 * 
 * @param {} | 软删除 dr = 0
 * @returns Object
 */
const delectA = (req,res,next) => {
  // let pk = req.body.pk // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let pk = mysql.escape(req.body.pk)

  // let sql = `DELETE FROM blog_article WHERE pk = '${pk}'`
  let sql = `UPDATE blog_article SET dr = 0 WHERE pk = ${pk}`
  exec(sql).then( data => {
    res.json(new SuccessModel(data))
  })
}

module.exports = {
  test, // GET
  getArticles, // GET
  insertArticle, // POST
  updateArticle, // POST
  delectA
}