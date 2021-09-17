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
 
# 开源项目
# Michael18811380328.github.io
# react-and-redux
# web-to-react-native-style
# NeteaseCloudMusicApi
# LGBTQIA-In-China
# Michael18811380328
# pkudsa2021
# Front-End-Interview
# guide
# game
# src
# blog
# codecombat
# simple-statistics

# 私有项目
# Minecraft
# Work-log
# webpack-babel
# review-code
