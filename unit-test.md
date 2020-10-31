# 单元测试

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