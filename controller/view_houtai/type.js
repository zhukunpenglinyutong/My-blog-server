const { exec } = require('../../db/mysql.js')
const { SuccessModel, ErrorModel } = require('../../model/resModel.js')
const uuidv4 = require('uuid/v4')

/**
 *（POST）新建类型
 */
const setType = (req,res,next) => {
  let body = req.body // POST 中的内容 是放到了 body 中了，常见的就是 form 表格提交中的数据了
  let uuid = uuidv4()
  let sql = `INSERT INTO blog_type (pk, name) VALUES ('${uuid}', '${body.name}')`
  exec(sql).then( data => {
    res.json(new SuccessModel(data))
  })
}

module.exports = {
  setType // POST
}