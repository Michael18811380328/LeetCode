# 单元测试

更新：运行 ./test.sh 脚本，会覆盖下面全部的测试

### javascript 单元测试

js 代码格式检查，代码使用 ESLint 检查代码的规范性（.eslintrc.json 配置文件）

项目使用 Jest 完成单元测试，测试文件在 /js/test/*.test.js 路径。

~~~bash
cd js
npm run lint
npm run lint-fix
npm run test
~~~

### typescript 单元测试

~~~bash
cd typescript
npm run test-ts
~~~

如果出现下面报错，需要全局安装 TS 环境

~~~js
// Test suite failed to run
// Cannot find module 'typescript'
// npm install -g typescript
// npm install --save-dev jest typescript ts-jest
// https://kulshekhar.github.io/ts-jest/user/install
~~~

ts-test 配置链接：https://kulshekhar.github.io/ts-jest/user/config/#paths-mapping

### python 单元测试

项目使用 pytest 完成单元测试

在虚拟环境中，安装 pytest 并运行测试

~~~bash
pip install pytest
cd python
pytest -q
~~~

测试文件在 /python/test_*.py 路径下


### 其他语言单元测试

题目较少，暂时不支持。

GoLang 单元测试可以参考：https://zhuanlan.zhihu.com/p/91072465

### 集成测试

todo: 上线后，使用 CI 测试 (develop 分支，但是会报错)
