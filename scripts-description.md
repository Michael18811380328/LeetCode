# 脚本说明

不同语言的解答案例中，有一些 npm 脚本和 sh 脚本，主要用于练习各种工程化库，json 文件中不方便加入大量注释，所以在此说明这些脚本的作用和使用方法。

## javascript npm 脚本

全部 npm 脚本 如下，下面具体介绍

```json
"lint": "eslint ./src/*.js",
"lint-html": "eslint ./src/*.js -f html -o ./eslint-reports/lint-results.html",
"lint-fix": "eslint --fix ./src/*.js"

"watch-parcel": "parcel watch",
"build-parcel": "parcel build",

"build": "rm -rf dist lib es && rollup -c",

"standard": "./node_modules/.bin/standard",

"test": "node ./scripts/jest-test.js --env=jsdom --coverage",
"test-watch": "node ./scripts/jest-test.js --env=jsdom --coverage --watch",

"build-es": "./node_modules/.bin/babel src --out-dir es",

"build-api": "./node_modules/jsdoc-to-markdown/bin/cli.js ./src/*.js > leetcode-api.md",
```

### npm run lint/lint-html/lint-fix

使用 eslint 工具检查代码格式，https://www.npmjs.com/package/eslint，本地配置文件为 .eslintrc.json

### npm run watch-parcel/build-parcel

使用 parcel 工具进行编译，https://www.npmjs.com/package/parcel

### npm run build

使用 rollup 工具进行编译，https://www.npmjs.com/package/rollup，本地配置文件为 rollup.config.js

### npm run standard

使用 standard 进行代码格式化，https://www.npmjs.com/package/standard

注：eslint 和 standard 格式化的效果不一样，不建议同时使用。eslint 配置更加丰富，standard 无需复杂配置更方便。

### npm run test/test-watch

使用 jest 工具进行单元测试，https://www.npmjs.com/package/jest，本地配置文件 jest.config.js

### npm run build-es

使用 babel 工具进行编译，把 es6 代码编译成 es5 代码，https://www.npmjs.com/package/@babel/cli，本地配置文件.babelrc

### npm run build-api

使用 jsdoc-to-markdown 工具，https://www.npmjs.com/package/jsdoc-to-markdown，自动生成 API 文档



## typescript npm 脚本

全部 npm 脚本 如下，下面具体介绍

```json
"compile": "rm -rf ./build && tsc",

"test-ts": "jest",

"lint": "gts lint ./src/*.ts",
"clean": "gts clean",
"fix": "gts fix",

"prepare": "npm run compile",
"pretest": "npm run compile",
"posttest": "npm run lint"
```

### npm run compile

作用：清空 build 目录，重新把 ts 文件编译成 js 文件。

tsc 是 TypeScript 内置的编译器，可以将 TypeScript 代码编译成 JavaScript 代码。如果不支持这个命令，需要全局安装 node 和 typescript 环境。

~~~bash
npm install -g typescript
~~~

### npm run test-ts

作用：使用第三方库 jest 进行单元测试，https://www.npmjs.com/package/jest

### npm run clean/lint/fix

作用：使用第三方库 gts 进行代码格式检查和自动修复，https://www.npmjs.com/package/gts，类似 eslint。GTS is Google's TypeScript style guide, and the configuration for our formatter, linter, and automatic code fixer.

### npm run prepare/pretest

这是内置钩子函数，表示在测试前进行 ts 编译

### npm run posttest

这是内置钩子函数，表示在测试后进行代码格式检查



## test.sh

bash 脚本，一次性执行 js ts py 的单元测试。

