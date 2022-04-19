# Read from the file file.txt and print its transposed content to stdout.
# 思路：读取文件，然后根据换行符和空格转换成矩阵，矩阵转置，再转换成字符串输出
columns=$(cat file.txt | head -n 1 | wc -w)
for i in $(seq 1 $columns)
do
awk '{print $'''$i'''}' file.txt | xargs
done
