# 183- 从不订阅的客户
# 某网站包含两个表，Customers 表和 Orders 表。编写一个 SQL 查询，找出所有从不订购任何东西的客户。

-- Customers 表：
-- +----+-------+
-- | Id | Name  |
-- +----+-------+
-- | 1  | Joe   |
-- | 2  | Henry |
-- | 3  | Sam   |
-- | 4  | Max   |
-- +----+-------+

-- Orders 表：
-- +----+------------+
-- | Id | CustomerId |
-- +----+------------+
-- | 1  | 3          |
-- | 2  | 1          |
-- +----+------------+

-- 例如给定上述表格，你的查询应返回：
-- +-----------+
-- | Customers |
-- +-----------+
-- | Henry     |
-- | Max       |
-- +-----------+

-- 首先从订阅表中获取ID不是空的全部信息（即全部信息），然后从用户表中获取ID不在上面集合中的信息，把Name字段改成Customer字段即可
select Name as Customers from Customers where Id not in (select CustomerId from Orders where Id is not null);
