### 前言 🔥🔥🔥

> 本项目是个人博客系统的后台部分，引入自己的 GitHub库：Express-mvc-template，进行双重维护

---
### 第一次提交（2019.4.9 22:23）| 初始化项目（基于 Express-mvc-template）🚗

> npm run dev 能运行起来，并且 logs/access.log 能加入数据

---
### 第二次提交（2019.4.9 22:47）| 将API迁移到 Github 上面, 并解决一些问题  🚕

> 需要安装一个 插件 moment（数据库中需要） : npm install moment --save；遇到一个问题， .gitignore /logs 不起作用：https://www.cnblogs.com/sloong/p/5523244.html

> 原因：.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。

---
### 第三次提交（2019.4.9 23:28）| 规范化API 接口，以及文档说明的书写  🚙

> 梳理了接口的结构，和 函数命名，使其更加规范化，详细见下面

![image](https://github.com/zhukunpenglinyutong/My-blog-server/blob/master/imgs/3-1.jpg)

---
### 第四次提交（2019.4.18 15:23）| 增加防SQL注入转义功能，4字节图标，格式化日期  🚌

> 主要更改的是 controller/serveweb/article.js 中的 创建博客 和 修改博客，删除 三个接口，使其具有防 SQL注入的功能（所有能传给后台拼接的SQL都转义了）

> 更改二，可以进行部分 4字节的ico的引用，例如✈️

> 更改三：优化前台日期格式展示：通过 DATE_FORMAT(字段名, '%Y-%m-%d %H:%m:%S')，格式化输出

---

### 第五次提交（2019.4.18 15:52）| 删除第三方库：moment，时间格式恢复成格林尼治时间 🚄

> 删除第三方库：moment，改为用 MySQL语句 now() 生成，并且恢复上一个版本中 查询内容数据的函数，改为默认的时间格式（以后还是要优化的）


