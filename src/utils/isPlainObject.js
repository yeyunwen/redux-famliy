const isPlainObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  // Object.create(null) === {} 有可能通过这种方式创建
  return proto === Object.prototype || proto === null;
};

export default isPlainObject;
