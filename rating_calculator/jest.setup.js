global.requireSrc = (path) => {
  const normalizedPath = path.replace(/^\./, '').replace(/^\//, '');
  return require('./src/' + normalizedPath);
}