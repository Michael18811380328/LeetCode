# 单元测试

更新：本地运行 ./test.sh 脚本，会覆盖所有的测试。

如需单独运行测试，详见下面操作。

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

上线后，根据 node.js.yml，执行 test.sh 脚本，运行全部测试。
