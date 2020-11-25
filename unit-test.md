# 单元测试

## 测试

### js 代码格式检查

代码使用 ESLint 检查代码的规范性（.eslintrc.json 配置文件）

~~~bash
npm run lint
npm run lint-fix
~~~

### javascript 单元测试

cd js

~~~bash
npm run test
~~~

项目使用 Jest 完成单元测试，测试文件在 /js/test/*.test.js 路径。

### typescript 单元测试

cd typescript

npm run test-ts

// Test suite failed to run
// Cannot find module 'typescript'
// npm install -g typescript
// npm install --save-dev jest typescript ts-jest
// https://kulshekhar.github.io/ts-jest/user/install

### python 单元测试

~~~bash
cd python
pytest -q
~~~

项目使用 pytest 完成单元测试（需要全局安装 pytest），测试文件在 /python/test_*.py 路径。


### go 单元测试

题目较少，暂时不支持，可以参考

https://zhuanlan.zhihu.com/p/91072465

### 集成测试

上线后，使用 TravisCI 测试

