# LeetCode 刷题记录

## 简介

乐扣算法刷题，网站链接 https://leetcode-cn.com

主要的语言是 JavaScript，次要使用 python，数据库学习使用 SQL。

学习步骤：

1. 熟练掌握数据结构和算法
2. 根据知识点刷题（针对训练）
3. 遗忘曲线复习
4. 总结题目到算法

一道题多种方法写出来：简单暴力；适合大部分情况（5%的特殊情况不考虑）；时间复杂度最好；学习别人的算法。

注：同样的代码在不同时候，打败人数比例不同（可能网络问题，可能出现有更好算法）

官网上有基础算法讲解，可以系统看一下 https://leetcode-cn.com/explore/

==学习，就是把不会的弄懂！改错本和对应的知识点==

学习方法：把对应的知识点分别归类，强化学习；加强数据结构与算法的应用。一边做算法题目，一边巩固数据结构和基础知识。


## 测试

### 代码风格测试

代码使用 ESLint 检查代码的规范性（.eslintrc.json 配置文件）

~~~bash
npm run lint
npm run lint-fix
~~~

### javasscript 单元测试

~~~bash
npm run test
~~~

项目使用 Jest 完成单元测试，测试文件在 /js/test/*.test.js 路径。

### python 单元测试

~~~bash
cd python
pytest -q
~~~

项目使用 pytest 完成单元测试（需要全局安装 pytest），测试文件在 /python/test_*.py 路径。

### 集成测试

上线后，使用 TravisCI 测试



## 文件说明

database 数据库 LeetCode 习题

exercise 练习文件（不测试）

images 图片文件

js LeetCode 习题，因为题目较多，所以分成多个文件夹管理

​	finished

​	test 测试文件

​	stalled 未完成的题目（不超过10道）

python 使用 python 完成的题目

  leetcode.py 题目

  test_leetcode.py 测试文件

