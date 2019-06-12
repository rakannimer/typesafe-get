export function get<O, I>(
  obj: I,
  reducer: (obj: Exclude<I, undefined | null>) => O,
  defaultTo: O
) {
  type ReturnType = Exclude<O, undefined | null>;
  try {
    const returnValue = reducer(obj as Exclude<I, undefined | null>);
    if (returnValue === undefined || returnValue === null) {
      return defaultTo as ReturnType;
    } else {
      return returnValue as ReturnType;
    }
  } catch (err) {
    return defaultTo as ReturnType;
  }
}

export default get;
