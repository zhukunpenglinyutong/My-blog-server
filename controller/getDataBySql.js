const { exec } = require('../db/mysql.js')
const mysql = require('mysql')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')
const uuidv4 = require('uuid/v4')

/**
 * @overview 给前台一个写SQL语句的地方
 * 
 * @param SQL
 * @returns 数据
 * 
 * @inputtime 2019-4-21 23:52
 * @lasttime 2019-4-21 23:52
 */

const getDataBySql = (req,res,next) => {

  // 进行转义，防止SQL注入（后期考虑是否抽象成单独的安全层）
  // console.log('req.body.sql',req.body.sql)
  // const SQL = mysql.escape(req.body.sql)
  const SQL = req.body.sql

  exec(SQL).then( data => {
    res.json(new SuccessModel(data))
  })
}

module.exports = {
  getDataBySql
}