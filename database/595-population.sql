# Write your MySQL query statement below
# 229 ms, 在所有 MySQL 提交中击败了32.43%的用户
select name, population, area from World where area > 3000000 || population > 25000000