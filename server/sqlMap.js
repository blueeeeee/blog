var sqlMap = {
    user: {
        add: 'insert into user(username, age) values(?,?)',
        check: 'select * from user where username=? and password=?'
    },
    posts:{
        all: 'select post_id, post_name, create_time from posts order by post_id desc',
        add: 'insert into posts(post_name,create_time,post_content) values(?,now(),?)',
        one: 'select post_content,post_name,create_time from posts where post_id=?'
    }
}

module.exports = sqlMap;

