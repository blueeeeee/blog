# blog

> 在工作之余，参照网上案例，开发了这个功能最简的个人博客，还有很多不完善的地方，通过写这个，大概疏通了前后端交互的整个流程，对前后端交互有了更深的理解，也了解了node.js的express框架的最基础的用法，以及数据库mysql的基础用法。  
目前只包含两个功能，博文展示和用户登录编辑博文，但目前暂未做注册功能，只有本人能登录，因此只设计了数据库的两个表，一个用来存博文，另一个用来验证本人的登录。
主要界面如下：

* 博文列表页，展示博文列表和登录入口，暂无注册功能，仅管理员能登录
![博文列表页](https://github.com/blueeeeee/blog/blob/master/showimg/1.PNG)  
* 博文详情页，展示博文内容，使用了vueMarkdown插件和hilight.js展示数据库中存储的博文以及博文中的代码
![博文详情页](https://github.com/blueeeeee/blog/blob/master/showimg/3.PNG)
* 点击第二个图标，若未登录，则展示登录窗口，此为单独一个组件，目前是通过session判断是否登录，有漏洞，日后改进；若已登录，直接进入博文编辑页面。
![登录窗口](https://github.com/blueeeeee/blog/blob/master/showimg/2.PNG)  
* 博文编辑页面，使用了mavonEditor插件，是基于vue的markdown编辑器插件，本人是通过页面保存博文至数据库。
![博文编辑页面](https://github.com/blueeeeee/blog/blob/master/showimg/4.PNG) 
