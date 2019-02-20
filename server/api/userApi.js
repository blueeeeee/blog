var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
 
// 连接数据库
var conn = mysql.createConnection(models.mysql);
 
conn.connect();
 
// 增加用户接口
router.post('/user/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    conn.query(sql, [params.username, params.age], function(err, result) {
      if (err) {
          console.log(err);
          return;
      }
      if (result) {
          res.send({msg:'操作成功！'});
      }
    })
});
//检查用户接口
router.post('/user/checkUser',(req,res)=>{
  var sql = $sql.user.check;
  var params = req.body;
  conn.query(sql, [params.username,params.password], function(err, result) {
    if (err) {
      console.log(err)
    }else{
      if(result.length!=0){
        res.send(true)
      }else{
        res.send(false)
      }
    }
  }) 
})
//获取所有文章接口
router.get('/getPosts', (req,res) => {
  var sql = $sql.posts.all;
  conn.query(sql, function(err,result){
    if(err){
      console.log(err);
    }else if(res){
      res.json(result);
    }
  })
})
//获取指定id的文章
router.get('/getOne', (req,res) => {
  var sql = $sql.posts.one;
  console.log(req.query);
  conn.query(sql, [req.query.postId], function(err,result){
    if(err){
      console.log(err);
    }else if(res){
      res.json(result);
    }
  })  
})
//添加文章接口
router.post('/addPost',(req,res)=>{
  var sql = $sql.posts.add
  var params = req.body
  conn.query(sql, [params.title,params.content], function(err, result) {
    if (err) {
      console.log(err)
    }else{
      if(result){
        res.send(true)
      }else{
        res.send(false)
      }
    }
  }) 
})

module.exports = router;
