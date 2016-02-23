
module.exports = function deepLockdown (obj) {
  Object.freeze(obj);
  Object.seal(obj);
  Object.preventExtensions(obj);

  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (obj.hasOwnProperty(prop) &&
    obj[prop] !== null &&
    (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
    (!Object.isFrozen(obj[prop]) ||
     !Object.isSealed(obj[prop]) ||
     !Object.isExtensible(obj[prop]))) {

      deepLockdown(obj[prop]);
    }
  });

  return obj;
};
