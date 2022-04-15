-- 表: Person
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | email       | varchar |
-- +-------------+---------+
-- id是该表的主键列。
-- 该表的每一行包含一封电子邮件。电子邮件将不包含大写字母。
-- 编写一个SQL查询来 删除 所有重复的电子邮件，只保留一个id最小的唯一电子邮件。

# Write your MySQL query statement below
DELETE p1 FROM Person p1,
    Person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id;
