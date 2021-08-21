import NP from 'number-precision';

// 客户端转换表格
export const normalizeTable = (table) => {
  // do something in the client
  table['id_row_map'] = setIdRowMap(table);
};

// 在表格中设置 id-row map 便于索引查找
export const setIdRowMap = (table) => {
  let id_row_map = {};
  table.rows.forEach((r) => {
    if (!id_row_map[r._id]) {
      id_row_map[r._id] = r;
    }
  });
  return id_row_map;
};

// 获取指定长度的随机字符串
export const generatorBase64Code = (keyLength = 4) => {
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    key += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return key;
};

// 生成 tableID
export const generatorTableId = (value) => {
  let table_id;
  let isUnique = false;
  // 这里写的不好，应该直接把 table_id_map 拿出来
  while (!isUnique) {
    table_id = generatorBase64Code();
    isUnique = value.every(table => {
      return table._id !== table_id;
    });
    if (isUnique) {
      break;
    }
  }
  return table_id;
};

// 生成视图ID
export const generatorViewId = (views) => {
  let view_id;
  let isUnique = false;
  while (!isUnique) {
    view_id = generatorBase64Code(4);
    isUnique = views.every(item => {return item._id !== view_id;});
    if (isUnique) {
      break;
    }
  }
  return view_id;
};

// 生成统计ID
export const generatorStatId = (statistics) => {
  let stat_id;
  let isUnique = false;
  while (!isUnique) {
    stat_id = generatorBase64Code();
    isUnique = statistics.every(item => {return item._id !== stat_id;});
    if (isUnique) {
      break;
    }
  }
  return stat_id;
};

// 生成脚本ID
export const generatorScriptId = (scripts) => {
  let script_id;
  let isUnique = false;
  while (!isUnique) {
    script_id = generatorBase64Code();
    isUnique = scripts.every(item => {return item._id !== script_id;});
    if (isUnique) {
      break;
    }
  }
  return script_id;
};

// 生成表格ID
export const generatorFormId = (forms) => {
  let form_id = '';
  let isUnique = false;
  while (!isUnique) {
    form_id = generatorBase64Code();
    isUnique = forms.every(form => { return form._id !== form_id; });
    if (isUnique) {
      break;
    }
  }
  return form_id;
};

// 生成列KEY
export const generatorColumnKey = (columns) => {
  let column_key = '';
  let isUnique = false;
  while (!isUnique) {
    column_key = generatorBase64Code();
    isUnique = columns.every(column => {return column.key !== column_key;});
    if (isUnique) {
      break;
    }
  }
  return column_key;
};

// 生成链接ID
export const generatorLinkId = (links) => {
  let link_id = '';
  let isUnique = false;
  while (!isUnique) {
    link_id = generatorBase64Code();
    isUnique = links.every(link => {return link._id !== link_id;});
    if (isUnique) {
      break;
    }
  }
  return link_id;
};

// 生成数据处理ID
export const generatorDataProcessId = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return generatorBase64Code();
  }
  let id = '';
  let isUnique = false;
  while (!isUnique) {
    id = generatorBase64Code();
    isUnique = arr.every(item => item._id !== id);
    if (isUnique) {
      break;
    }
  }
  return id;
};

// 生成单选标签ID
export const generateOptionID = (options) => {
  // 这个IF有问题
  if (options.length === 1) {
    return '' + Math.floor(Math.random() * Math.pow(10, 6));
  }
  let optionID;
  let isIDUnique = false;
  while (!isIDUnique) {
    optionID =  '' + Math.floor(Math.random() * Math.pow(10, 6));
    isIDUnique = options.every((option) => {
      return option.id !== optionID;
    });
    if (isIDUnique) {
      break;
    }
  }
  return optionID;
};

// 获取浮点数
export const getFloatNumber = (data, format) =>  {
  if (!data && data !== 0) {
    return null;
  }
  let newData = parseFloat(data.replace(/[^.-\d]/g, ''));
  // 百分比转换成数值
  if (format === 'percent' && !isNaN(newData)) {
    return NP.divide(newData, 100);
  }
  return isNaN(newData) ? null : newData;
};

// 获取创建者列表（协作人+未知人）
// TODO: need delete after confirmed if there is no reference.
export const getCreators = (value = {}) => {
  let collaborators = value.collaborators || [];
  let creators = collaborators.map(collaborator => collaborator.email);
  creators.push('anonymous');
  return creators;
};

// 判断数字
export const isNumber = function(num) {
  return (num || num === 0) && Object.prototype.toString.call(num) === '[object Number]';
};

// 判断数字数组
export const isNumberArray = function (arr) {
  // if arr is empty, every method will return true
  return arr.every(item => isNumber(item));
};

// 是否是文件对象
export const isFileValue = function (object) {
  if (typeof object !== 'object') {
    return false;
  }
  const keys = Object.keys(object);
  const needKeys = ['name', 'size', 'url', 'type'];
  return needKeys.every(key => {
    return keys.includes(key);
  });
};

// 数组去重
export const uniqueArray = (array) => {
  return [...new Set(array)];
};

// 是否是自定义权限(权限是 c-xxx )
export const isCustomPermission = (permission) => {
  if (!permission) {
    return false;
  }
  const parts = permission.split('-');
  return parts.length === 2 && parts[0] === 'c';
};

// 获取自定义权限的ID
export const getCustomPermissionId = (permission) => {
  if (!permission) {
    return '';
  }
  const parts = permission.split('-');
  if (parts.length !== 2) {
    return '';
  }
  return parts[1];
};
