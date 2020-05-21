# LeetCode

## 简介

乐扣算法 leetcode 1000道题，预期2020年完成。 

链接 https://leetcode-cn.com

学习步骤：

1. 熟练掌握数据结构和算法
2. 根据知识点刷题（针对训练）
3. 遗忘曲线复习
4. 总结题目到算法

一道题多种方法写出来：简单暴力；适合大部分情况（5%的特殊情况不考虑）；时间复杂度最好；学习别人的算法。注：同样的代码在不同时候，打败人数比例不同（可能网络问题，可能出现有更好算法）

官网上有基础算法讲解，可以系统看一下 https://leetcode-cn.com/explore/

==学习，就是把不会的弄懂！改错本和对应的知识点==

学习方法：根据网页右侧的标签，把对应的知识点分别归类强化学习；加强数据结构与算法的应用。



## 学习

### 第一阶段

简单题目完成，时间空间复杂度在50%之前；中等题目完成；部分高级题目完成。截止时间：2020年06月30日。

截止2019年12月31日，平均每日完成2题，完成至少100题。


### 第二阶段

简单题目在前25%，中等题目前50%，高级题目完成80%

截止时间：2020年09月30日

### 第三阶段

简单中等题目前25%。高级前50%。

截止时间：2020年12月30日



## 测试

### 代码风格测试

代码使用 ESLint 检查代码的规范性（.eslintrc.json 配置文件）

~~~bash
npm run lint
npm run lint-fix
~~~

### js 单元测试

~~~bash
npm run test
~~~

项目使用 Jest 完成单元测试，测试文件在 /js/test/*.test.js 路径。

### py 单元测试

~~~bash
cd python
pytest -q
~~~

项目使用 pytest 完成单元测试（需要全局安装 pytest），测试文件在 /python/test_*.py 路径。

### 功能测试

Nightmare 测试（LeetCode不需要功能测试）

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

