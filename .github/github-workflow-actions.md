# Github actions 工作流使用说明

## 从工作流开始

这个文档简单介绍了工作流的配置，详情参考链接：

https://docs.github.com/articles/configuring-workflows

### 自定义何时触发工作流

- 当 `main` 和 `release/*` 分支 push 后，触发工作流

  ```
  on:
    push:
      branches:
      - main
      - release/*
  ```

- 当有分支 `pull request` 到 `main` 分支上，触发工作流

  ```
  on:
    pull_request:
      branches:
      - main
  ```

- 定期执行工作流：从周一到周五每天2:00运行

  ```
  on:
    schedule:
    - cron: "0 2 * * 1-5"
  ```

其他触发工作流执行的事件，参考

https://docs.github.com/articles/events-that-trigger-workflows

### 手动运行工作流

手动运行工作流，可以将工作流配置为使用“workflow_dispatch”事件。

这将启用“操作”选项卡上的“运行工作流”按钮。

```
on:
  workflow_dispatch:
```

更多信息：https://docs.github.com/articles/configuring-a-workflow#manually-running-a-workflow

### 在不同操作系统上运行工作流

GitHub Actions 提供了 Linux、Windows 和 macOS 操作系统。

设置操作系统，使用“runs on”指定操作系统和版本号：

```
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

操作 Action 是可重用的代码单元，可以由 GitHub 上的任何人构建和分发。您可以在GitHub Marketplace以及官方的actions存储库中找到各种操作

https://github.com/actions/

要使用操作，必须指定包含该操作的存储库。我们还建议您指定一个Git标记，以确保您使用的是操作的发布版本。

```
- name: Setup Node
  uses: actions/setup-node@v1
  with:
    node-version: '10.x'
```

https://docs.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses

### 运行命令

您可以在虚拟机上运行命令。

```
- name: Install Dependencies
  run: npm install
```

https://docs.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsrun

### 在操作系统和运行版本的矩阵中运行作业

您可以跨一组不同的值（例如不同版本的代码库或操作系统）自动运行 Action。

例如，使用矩阵策略在3个版本的Node和3个操作系统上运行：

```
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

```
steps:
- run: npm publish
  if: github.event_name == 'push'
```

https://docs.github.com/articles/contexts-and-expression-syntax-for-github-actions

全部官方文档参考：https://docs.github.com/cn/actions/quickstart