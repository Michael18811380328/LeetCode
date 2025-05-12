// cheerio 为服务器特别定制的，快速、灵活、实施的jQuery核心实现
// 去掉了浏览器相关的 DOM API，便于服务器直接返回 HTML 模板
const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
