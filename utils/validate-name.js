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

export { validateName };
