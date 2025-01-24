export default function defineOrAssignProperty<T extends object>(
  object: T,
  propertyName: keyof T | string,
  val: any,
): T {
  if (propertyName in object) {
    Object.defineProperty(object, propertyName, {
      value: val,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    (object as any)[propertyName] = val;
  }
  return object;
}
