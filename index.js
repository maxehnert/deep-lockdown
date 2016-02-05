
module.exports = function deepLockdown (o) {
  Object.freeze(o);
  Object.seal(o);
  Object.preventExtensions(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
    && o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])
    && !Object.isSealed(o[prop])
    && !Object.isExtensible(o[prop])) {
      deepLockdown(o[prop]);
    }
  });

  return o;
};
