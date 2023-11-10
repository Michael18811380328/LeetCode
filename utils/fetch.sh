# 批量克隆项目或者更新已有项目（用于代码备份）
function fetch() {
    my_array=('HelloVUE' 'HelloGo' 'HelloTs' 'HelloJS' 'LeetCode' 'HelloJava' 'HelloPython' 'interview' 'HelloBlog' 'HelloWorld' 'ImagesMichael' 'Personal')
    for i in {0..11}
    do
        str="${my_array[i]}"
        if [ ! -d "${str}" ]; then
            git clone "git@github.com:Michael18811380328/${str}.git"
        else
            cd ${str} && git pull && cd ..
        fi
    done
}

fetch
