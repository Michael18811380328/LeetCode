ls -R ./ | while read line
do
  echo $line

  # 判断是否是文件，还是文件夹

  # 获取当前文件，判断当前文件最后一行是否为空行（这个命令会自动忽略空行）
  tail -n 1 $line

  cat $line | awk 'END {print}'

  grep -n ^$ $line
  # 这里过滤文件夹，和其他不符合的情况

  # 判断最后一行是否是空行
  echo -en '\n' >> $line

done

