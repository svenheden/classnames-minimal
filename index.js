module.exports = function classNames(classes) {
  return Object.keys(classes).filter(function(name) {
    return classes[name];
  }).join(' ');
};
