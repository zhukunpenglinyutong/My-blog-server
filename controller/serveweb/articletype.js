const { exec } = require('../../db/mysql.js')
const { SuccessModel, ErrorModel } = require('../../model/resModel.js')
const uuidv4 = require('uuid/v4')
const mysql = require('mysql')

/**
 *（GET）查询所有分类
 * 
 * @returns Array [{}]
 */
const getTypes = (req,res,next) => {
  const SQL = `select * from blog_type where dr = 1`
  exec(SQL).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）新建分类
 */
const insertType = (req,res,next) => {
  let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了
  let uuid = uuidv4()

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let name = mysql.escape(body.name)

  const SQL = `INSERT INTO blog_type (pk, name, lasttime, changetime) VALUES ('${uuid}', ${name}, now(), now())`
  exec(SQL).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）修改分类
 * 
 * con 是前后端协商好的 前端传过来的数据，必须是 '{}' 这种类型的，因为 Express 会解析一下的，如果只传字符串的话，解析会有问题
 * 
 * @param {} 修改之后的内容
 * @returns Object {} 里面有个参数表示影响了几行，如果 >1 表示成功了
 */
const updateType = (req,res,next) => {
  let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let name = mysql.escape(body.name)
  let pk = mysql.escape(body.pk)

  const SQL = `UPDATE blog_type SET name = ${name}, changetime = now() WHERE pk = ${pk}`
  exec(SQL).then( data => {
    res.json(new SuccessModel(data))
  })
}

/**
 *（POST）删除类型
 * 
 * @param {} | 软删除 dr = 0
 * @returns Object
 */
const delectType = (req,res,next) => {

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  let pk = mysql.escape(req.body.pk)

  // let sql = `DELETE FROM blog_article WHERE pk = '${pk}'`
  const SQL = `UPDATE blog_type SET dr = 0 WHERE pk = ${pk}`
  exec(SQL).then( data => {
    res.json(new SuccessModel(data))
  })
}

module.exports = {
  getTypes, // GET 获取所有类型
  insertType, // POST 新增类型
  updateType, // POST 修改类型
  delectType // POST 删除类型
}