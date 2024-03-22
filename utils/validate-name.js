// 这个是全局的统一提示函数（toaster已经全局统一提供）
const validateName = (name) => {
  if (typeof name !== 'string') {
    return false;
  }
  name = name.trim();
  if (name === '') {
    toaster.danger(gettext('Name is required'));
    return false;
  }
  if (name.includes('/')) {
    toaster.danger(gettext('Name cannot contain slash'));
    return false;
  }
  if (name.includes('\\')) {
    toaster.danger(gettext('Name cannot contain backslash'));
    return false;
  }
  return name;
};

// 直接返回错误情况，根据实际UI需求渲染不同的错误提示
// 项目中不同模块使用不同的错误提示（对话框内部错误，全局错误，移动端错误提示等）
const validateName2 = (name) => {
  if (typeof name !== 'string') {
    return { isValid: false, message: 'Name should be string' };
  }
  name = name.trim();
  if (name === '') {
    return { isValid: false, message: 'Name is required' };
  }
  if (name.includes('/')) {
    return { isValid: false, message: 'Name cannot contain slash' };
  }
  if (name.includes('\\')) {
    return { isValid: false, message: 'Name cannot contain backslash' };
  }
  return { isValid: true, message: name };
};

export { validateName, validateName2 };
