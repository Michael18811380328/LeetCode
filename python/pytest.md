# Pytest 安装注意事项

pytest 是 python 测试工具之一。LeetCode 部署 pytest 用来单元测试。详细说明见官网文档（http://www.pytest.org/en/latest/）。


## 安装pytest

1.安装方法

~~~bash
pip install pytest
~~~

2.查看安装的版本

~~~bash
pytest --version
~~~

3.注意事项

安装过程中，界面报错

pip "Cannot uninstall 'six'. It is a distutils installed project..."

~~~bash
sudo pip install pytest -U

# 安装，报错
Cannot uninstall 'six'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.

# 首先更新这个第三方工具
sudo pip install six --upgrade --ignore-installed six

# 继续安装，报错
Cannot uninstall 'pyparsing'. It is a distutils installed project and thus we cannot accurately determine which files belong to it which would lead to only a partial uninstall.

# 需要手动更新到最新版
sudo pip install -I pyparsing==2.2.0

# 继续安装，成功
~~~



## 测试实例

```python
# 将代码保存，命名为test_sample.py
def func(x):
    return x +1

def test_answer():
    assert func(3)==5
```

在当前目录下执行 pytest 或者 pytest -q（q是quiet的简拼），会寻找当前目录及其子目录下以test开头的py文件或者以test结尾的py文件，找到文件后，在文件中找到以test开头函数并执行。

测试结果为F，并在FALURES中输出部分详细的错误原因，实际是 assert func(3)==5出现问题了，错误的原因是 4 = func(3)而我们的断言是 func(3)=5

```python 
F                                                                                                                                  [100%]
================================================================= FAILURES ==================================================================
________________________________________________________________ test_answer ________________________________________________________________

    def test_answer():
>       assert inc(3) == 5
E       assert 4 == 5
E        +  where 4 = inc(3)

```

当我们把结果改成正确的 4

~~~bash
1 passed in 0.03 seconds
~~~


## 实例二（多个测试样例）

多个测试样例，可以将其放到一个测试类中：

```python
class TestClass:
    def test_one(self):
        x = "this"
        assert 'h' in x

    def test_two(self):
        x = "hello"
        assert hasattr(x, 'check')
```

## 编写pytest测试样例的规则

- 测试文件以test_开头（以_test结尾也可以）
- 测试类以Test开头，并且不能带有 **init** 方法
- 测试函数以test_开头
- 断言使用基本的assert即可


参考链接：https://www.cnblogs.com/shenh/p/11572657.html

## 测试覆盖率

```bash
pytest --cov=mymodule src/tests/
```
