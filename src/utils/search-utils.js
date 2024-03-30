export function deepSearch(object, key, predicate) {
  if (object.hasOwnProperty(key) && predicate(key, object[key]) === true)
    return object;

  for (let i = 0; i < Object.keys(object).length; i++) {
    let value = object[Object.keys(object)[i]];
    if (typeof value === "object" && value != null) {
      let o = deepSearch(object[Object.keys(object)[i]], key, predicate);
      if (o != null) return o;
    }
  }
  return null;
}

export const findByKey = (obj, kee) => {
    if (kee in obj) return obj[kee];
    for(n of Object.values(obj).filter(Boolean).filter(v => typeof v === 'object')) {
        let found = findByKey(n, kee)
        if (found) return found
    }
}

export const findByProperty = (obj, predicate) => {
    if (predicate(obj)) return obj
    for(n of Object.values(obj).filter(Boolean).filter(v => typeof v === 'object')) {
        let found = findByProperty(n, predicate)
        if (found) return found
    }
}

export function deepSearchItems(object, key, predicate) {
  let ret = [];
  if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) {
    ret = [...ret, object];
  }
  if (Object.keys(object).length) {
    for (let i = 0; i < Object.keys(object).length; i++) {
      let value = object[Object.keys(object)[i]];
      if (typeof value === "object" && value != null) {
        let o = this.deepSearchItems(
          object[Object.keys(object)[i]],
          key,
          predicate
        );
        if (o != null && o instanceof Array) {
          ret = [...ret, ...o];
        }
      }
    }
  }
  return ret;
}
