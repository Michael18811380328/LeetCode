# Github actions 工作流使用说明

## 从工作流开始

这个文档简单介绍了工作流的配置，详情参考链接：

https://docs.github.com/articles/configuring-workflows

### 自定义何时触发工作流

- 当 `main` 和 `release/*` 分支 push 后，触发工作流

  ```yml
  on:
    push:
      branches:
      - main
      - release/*
  ```

- 当有分支 `pull request` 到 `main` 分支上，触发工作流

  ```yml
  on:
    pull_request:
      branches:
      - main
  ```

- 定期执行工作流：从周一到周五每天2:00运行

  ```yml
  on:
    schedule:
    - cron: "0 2 * * 1-5"
  ```

其他触发工作流执行的事件，参考

https://docs.github.com/articles/events-that-trigger-workflows

### 手动运行工作流

手动运行工作流，可以将工作流配置为使用“workflow_dispatch”事件。

这将启用“操作”选项卡上的“运行工作流”按钮。

```yml
on:
  workflow_dispatch:
```

更多信息：https://docs.github.com/articles/configuring-a-workflow#manually-running-a-workflow

### 在不同操作系统上运行工作流

GitHub Actions 提供了 Linux、Windows 和 macOS 操作系统。

设置操作系统，使用“runs on”指定操作系统和版本号：

```yml
jobs:
  my_job:
    name: deploy to staging
    runs-on: ubuntu-18.04
```

可用的虚拟机类型包括:

- `ubuntu-latest`, `ubuntu-18.04`, or `ubuntu-16.04`
- `windows-latest` or `windows-2019`
- `macos-latest` or `macos-10.15`

更多信息：https://docs.github.com/articles/virtual-environments-for-github-actions

### 使用一个操作 action

操作 Action 是可重用的代码单元，可以由 GitHub 上的任何人构建和分发。您可以在 GitHub Marketplace 以及官方的 actions 存储库中找到各种操作

https://github.com/actions/

要使用操作，必须指定包含该操作的存储库。我们还建议您指定一个Git标记，以确保您使用的是操作的发布版本。

```yml
- name: Setup Node
  uses: actions/setup-node@v1
  with:
    node-version: '10.x'
```


#### uses: actions/checkout@v1 中不同版本的 checkout 动作的区别：

v1：

是最早的版本，使用 git clone 命令来检出仓库的代码
不支持子模块（submodules）
不支持 fetch-depth 参数
不支持 token 参数

v2：
使用 git clone 命令来检出仓库的代码
支持子模块（submodules），但需要手动配置
支持 fetch-depth 参数，但需要手动配置
支持 token 参数，可以指定用于检出的令牌


v3：
使用 git fetch 命令来检出仓库的代码
支持子模块（submodules），无需手动配置
支持 fetch-depth 参数，无需手动配置
支持 token 参数，可以指定用于检出的令牌
提供更好的性能和安全性

v4：
使用 git fetch 命令来检出仓库的代码
支持子模块（submodules），无需手动配置
支持 fetch-depth 参数，无需手动配置
支持 token 参数，可以指定用于检出的令牌
提供更好的性能和安全性
支持新的参数，如 path 和 ssh-key

总的来说，v4 是最新的版本，提供了最好的性能和安全性。v3 和 v2 也可以使用，但可能需要手动配置一些参数。v1 是最早的版本，不建议使用。

建议使用 actions/checkout@v4，除非您有特定的原因需要使用旧版本。

#### uses: actions/setup-node 中不同版本区别：

actions/setup-node 是一个 GitHub Actions 的动作，它用于设置 Node.js 环境。

以下是不同版本的 setup-node 动作的区别：

v1：
是最早的版本，支持 Node.js 10.x 和 12.x
不支持 Node.js 14.x 和 16.x
不支持 node-version 参数

v2：
支持 Node.js 10.x、12.x、14.x 和 16.x
支持 node-version 参数，可以指定 Node.js 的版本
提供更好的性能和安全性

v3：
支持 Node.js 10.x、12.x、14.x、16.x 和 18.x
支持 node-version 参数，可以指定 Node.js 的版本
提供更好的性能和安全性
支持新的参数，如 architecture 和 check-latest

最新版本：
目前最新的版本是 v3
支持 Node.js 10.x、12.x、14.x、16.x、18.x 和 20.x
支持 node-version 参数，可以指定 Node.js 的版本
提供更好的性能和安全性
支持新的参数，如 architecture 和 check-latest
建议使用 actions/setup-node@v3，因为它是最新的版本，提供了最好的性能和安全性。

#### uses: actions/setup-python 版本说明

`actions/setup-python` 是一个 GitHub Actions 的动作，它用于设置 Python 环境。

以下是不同版本的 `setup-python` 动作的区别：

**v1**：

* 是最早的版本，支持 Python 2.x 和 3.x
* 不支持 Python 3.9 和 3.10
* 不支持 `python-version` 参数

**v2**：

* 支持 Python 2.x、3.x、3.9 和 3.10
* 支持 `python-version` 参数，可以指定 Python 的版本
* 提供更好的性能和安全性

**v3**：

* 支持 Python 2.x、3.x、3.9、3.10、3.11 和 3.12
* 支持 `python-version` 参数，可以指定 Python 的版本
* 提供更好的性能和安全性
* 支持新的参数，如 `architecture` 和 `check-latest`

**最新版本**：

* 目前最新的版本是 `v4`
* 支持 Python 2.x、3.x、3.9、3.10、3.11、3.12 和 3.13
* 支持 `python-version` 参数，可以指定 Python 的版本
* 提供更好的性能和安全性
* 支持新的参数，如 `architecture` 和 `check-latest`

建议使用 `actions/setup-python@v4`，因为它是最新的版本，提供了最好的性能和安全性。

更多参考：

https://docs.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses

### 运行命令

您可以在虚拟机上运行命令。

```yml
- name: Install Dependencies
  run: npm install
```

https://docs.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsrun

### 在操作系统和运行版本的矩阵中运行作业

您可以跨一组不同的值（例如不同版本的代码库或操作系统）自动运行 Action。

例如，使用矩阵策略在3个版本的Node和3个操作系统上运行：

```yml
jobs:
  test:
    name: Test on node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        node_version: ['8', '10', '12']
        os: [ubuntu-latest, windows-latest, macOS-latest]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node_version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node_version }}

    - name: npm install, build and test
      run: |
        npm install
        npm run build --if-present
        npm test
```

https://docs.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstrategy


### 条件运行步骤或作业

GitHub操作使用工作流上下文中的数据支持步骤和作业的条件。

例如，要仅作为push的一部分而不是pull_request中运行步骤，可以根据事件名称在“if：”属性中指定条件：

```yml
steps:
- run: npm publish
  if: github.event_name == 'push'
```

https://docs.github.com/articles/contexts-and-expression-syntax-for-github-actions

全部官方文档参考：https://docs.github.com/cn/actions/quickstart
