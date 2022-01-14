# 自动创建流程图使用说明

使用 graphviz 工具

官网链接：http://www.graphviz.org/about/

示例：http://www.graphviz.org/gallery/



### 环境创建

本地执行 `brew install graphviz` 安装软件（最好设置代理）

详细参考：https://www.cnblogs.com/taceywong/p/5439574.html



### 创建全部的流程图

更改脚本中的文件路径，运行 `node gererate.js`，即可生成目标路径下的全部流程图



### 创建更改后的流程图

todo： 如果是 git 仓库中，写一个脚本，然后执行 git diff 找到更改后的 dot 文件，执行编译



### 图片导出

Todo：可以直接把图片统一放在某个 output 目录下
