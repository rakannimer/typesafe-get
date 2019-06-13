import get from "../index";

// get({a:2}, 'b', 0)

describe("get", () => {
  test("exports", () => {
    expect(get).toBeTruthy();
  });
  test("works", () => {
    const obj = { a: 1, b: 2 };
    const undef = undefined;
    expect(get(() => obj.b, -1)).toEqual(2);
    //@ts-ignore
    expect(get(() => obj.c, -1)).toEqual(-1);
    expect(get(() => obj.a, -1)).toEqual(1);
    //@ts-ignore
    expect(get(() => undef.a[0].b, -1)).toEqual(-1);
  });
});
