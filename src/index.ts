export function get<O>(
  reducer: () => O,
  defaultTo: Exclude<O, undefined | null>
): Exclude<O, undefined | null> {
  type ReturnType = Exclude<O, undefined | null>;
  try {
    const returnValue = reducer();
    if (returnValue === undefined || returnValue === null) {
      return defaultTo;
    } else {
      return returnValue as ReturnType;
    }
  } catch (err) {
    return defaultTo;
  }
}

export default get;
