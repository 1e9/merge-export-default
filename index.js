export default (modules = {}) => {
  if (JSON.stringify(modules || {}) === '{}') return {};
  
  return Object.keys(modules).reduce((acc, moduleKey) => {
    const { default: defaultExport, ...module } = modules[moduleKey] || {};
    const moduleExports = !!defaultExport ? { ...module, [`${moduleKey}_default`]: defaultExport } : module;
    return {
      ...acc,
      ...moduleExports,
    };
  }, {});
};
