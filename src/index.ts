function get<I, O>(obj: I, reducer: (obj: I) => O, defaultTo?: O) {
  try {
    const returnValue = reducer(obj);
    if (returnValue === undefined || returnValue === null) {
      return defaultTo;
    } else {
      return returnValue;
    }
  } catch (err) {
    return defaultTo;
  }
}

export default get;
