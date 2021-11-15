# Beego 框架介绍

beego 是一个快速开发 Go 应用的 HTTP 框架，他可以用来快速开发 API、Web 及后端服务等各种应用，是一个 RESTful 的框架，主要设计灵感来源于 tornado、sinatra 和 flask 这三个框架，但是结合了 Go 本身的一些特性（interface、struct 嵌入等）而设计的一个框架。

官网文档：https://beego.me/docs/intro/

其他参考链接：http://www.topgoer.cn/docs/beegozhongwenwendang/beegozhongwenwendang-1c5087bb5qpst

## beego 项目结构

一般的 beego 项目的目录如下所示：

```
├── conf
│   └── app.conf
├── controllers
│   ├── admin
│   └── default.go
├── main.go
├── models
│   └── models.go
├── static
│   ├── css
│   ├── ico
│   ├── img
│   └── js
└── views
    ├── admin
    └── index.tpl
```

从上面的目录结构我们可以看出来 M（models 目录）、V（views 目录）和 C（controllers 目录）的结构， `main.go` 是入口文件。

默认设备中安装了 golang 开发环境，可以通过如下的方式安装 bee 工具：

```bash
go get -u github.com/beego/bee/v2
```
