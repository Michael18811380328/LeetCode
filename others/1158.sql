# Write your MySQL query statement below
# buyer_id 和 join_date 容易计算
# orders_in_2019 需要 count Orders 表, buyer_id = user_id and order_date is 2019

SELECT 
    u.user_id AS buyer_id,
    u.join_date AS join_date,
    count(if (year(o.order_date) = 2019, 1, null)) AS orders_in_2019
FROM
    Users u
LEFT JOIN
    Orders o ON u.user_id = o.buyer_id
GROUP BY
    u.user_id;
