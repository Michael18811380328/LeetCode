# Write your MySQL query statement below
# https://leetcode.cn/problems/article-views-i/
SELECT DISTINCT author_id AS id FROM Views WHERE Views.author_id = Views.viewer_id ORDER BY id ASC;
