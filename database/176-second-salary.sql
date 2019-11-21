# Write your MySQL query statement below
# 
# 编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 。

-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- 例如上述 Employee 表，SQL查询应该返回 200 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 null。

-- +---------------------+
-- | SecondHighestSalary |
-- +---------------------+
-- | 200                 |
-- +---------------------+

-- 第一种思路：获取当前的全部薪水信息，并使用降序排列，然后偏移量设置为1，输出一个值，重命名列名
-- 第一种思路更好：如果需要获取第N个高的数据，这个可以获取。第二种思路获取N高很复杂

select (select distinct Salary from Employee order by Salary Desc limit 1 offset 1) as SecondHighestSalary

-- 第二种思路：获取当前最高的值。然后以这个为条件，再次遍历数据表，筛选出结果不是整个值的第二高的值。

