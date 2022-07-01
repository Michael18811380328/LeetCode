### 02-Java 基础语法

https://www.runoob.com/java/java-basic-syntax.html

#### 基本语法

注意：

- 类名：每个单词首字母大写，例如 MyFirstJavaClass 。
- 方法名：驼峰命名法
- 源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记 Java 是大小写敏感的），文件名的后缀为 .java。（如果文件名和类名不相同则会导致编译错误）。
- 主方法入口：所有的 Java 程序由 public static void main(String[] args) 方法开始执行。

#### 修饰符

Java可以使用修饰符来修饰类中方法和属性。主要有两类修饰符：

访问控制修饰符 : default, public , protected, private

非访问控制修饰符 : final, abstract, static, synchronized

#### Java 变量

局部变量

类变量（静态变量）

成员变量（非静态变量）


#### Java 枚举

~~~java
class FreshJuice {
  enum FreshJuiceSize{ SMALL, MEDIUM, LARGE }
  FreshJuiceSize size;
}
 
public class FreshJuiceTest {
   public static void main(String[] args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM;
   }
}

~~~
