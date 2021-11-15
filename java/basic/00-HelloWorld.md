### 00-HelloWorld

注意 HelloWorld.java(文件名需与类名一致)

编译执行Java程序

~~~bash
javac HelloWorld.java
java HelloWorld
~~~

javac 后面跟着的是java文件的文件名，例如 HelloWorld.java。 该命令用于将 java 源文件编译为 class 字节码文件;

运行 javac 命令后，如果成功编译没有错误的话，会出现一个 HelloWorld.class 的文件。

然后运行 java HelloWorld 执行编译后的文件，在控制台上可以显示出具体的内容。

#### javac 说明

NAME
       javac - Java compiler

SYNOPSIS
       javac [ options ] [ sourcefiles ] [ @argfiles ]

PARAMETERS
       Arguments may be in any order.

       options        Command line options.

       sourcefiles    One or more source files to be compiled (such as MyClass.java).

       @argfiles      One or more files that list source files.  The -J options are not allowed in these files.
