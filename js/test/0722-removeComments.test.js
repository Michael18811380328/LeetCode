import { removeComments } from '../src/0722-removeComments';

test('removeComments', () => {
  expect(removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"])).toEqual(["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]);

  expect(removeComments(["a/*comment", "line", "more_comment*/b"])).toEqual(["ab"]);

  expect(removeComments(["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"])).toEqual(["struct Node{","    ","    int size;","    int val;","};"]);

  expect(removeComments(["main() {", "/* here is commments", "  // still comments */", "   double s = 33;", "   cout << s;", "}"])).toEqual(["main() {","   double s = 33;","   cout << s;","}"]);

  // 无注释
  expect(removeComments(["int main() {", "    return 0;", "}"])).toEqual(["int main() {", "    return 0;", "}"]);

  // 单行注释
  expect(removeComments(["int main() {", "// 这是单行注释", "    return 0;", "}"])).toEqual(["int main() {", "    return 0;", "}"]);

  // 多行注释
  expect(removeComments(["int main() {", "/* 这是多行注释", "    这也是多行注释", "*/", "    return 0;", "}"])).toEqual(["int main() {", "    return 0;", "}"]);
});
