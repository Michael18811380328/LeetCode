const hrefReg = /\[.+\]\(\S+\)|<img src=(\S+).+\/>|!\[\]\(\S+\)|<\S+>/g;
const imageReg1 = /^<img src="(\S+)" .+\/>/;
const imageReg2 = /^!\[\]\((\S+)\)/;
const linkReg1 = /^\[.+\]\(\S+\)/;
const linkReg2 = /^<\S+>$/;

// 获取图片和链接对象
function getLinks(hrefs) {
  const hrefObj = {
    links: [],
    images: []
  };
  hrefs.forEach((href) => {
    // 如果搜多到链接，那么直接返回链接
    if (href.search(linkReg1) >= 0 || href.search(linkReg2) >= 0) {
      hrefObj.links.push(href);
    } else {
      // 如果匹配到图片，那么返回图片
      let imageSrcs = href.match(imageReg1);
      let imageSrcs1 = href.match(imageReg2);
      if (imageSrcs) {
        hrefObj.images.push(imageSrcs[1]);
      } else if (imageSrcs1) {
        hrefObj.images.push(imageSrcs1[1]);
      }
    }
  });
  return hrefObj;
}

/**
 * 将 markdown 转换成内容对象（用于长文件列预览）
 * @param {string} markdownContent 
 * @returns 长文本预览 object 
 */
export function getPreviewContent(markdownContent) {
  let preview = '';
  
  // 先去掉 HTML 标签（img）
  let newMarkdownContent = markdownContent.replace(hrefReg, '');

  // 获取修正后的 md 长度
  const newMarkdownLength = newMarkdownContent.length;

  // 遍历字符串
  for (let index = 0; index < newMarkdownLength; index++) {
    // 如果是 # 继续循环
    if (newMarkdownContent[index] === '#') {
      continue;
    }
    // 如果是回车，预览增加空格
    else if (newMarkdownContent[index] === '\n') {
      preview += ' ';
    }
    // 其他的，直接将字符放在预览中
    else {
      preview += newMarkdownContent[index];
    }
    // 超过50个字符的不处理
    if (preview.length === 50) {
      break;
    }
  }
  // 预览超过50就显示省略号（这里有问题，如果是恰好50个#那么这里预览页显示...）
  // 理论上这里有问题
  preview = preview.length === newMarkdownLength ? preview : `${preview}...`;

  // 如果有链接（获取链接中的图片和链接个数，并返回）
  const hrefs = markdownContent.match(hrefReg);
  if (hrefs) {
    const { images, links } = getLinks(hrefs);
    return { preview, images, links };
  }
  return { preview, images: [], links: [] };
}
