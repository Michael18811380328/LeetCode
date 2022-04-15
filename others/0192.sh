# Read from the file words.txt and output the word frequency list to stdout.
# just learn basic bash script
# 1 cat: read file
# 2 tr -s: string to array (string.split(' ').split('\n'))
# 3 sort: sort array
# 4 uniq -c: get word numbers
# 5 sort -r: sort result
# 6 print word and times
cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{ print $2, $1 }'
