import get from "../index";

describe("get", () => {
  test("exports", () => {
    expect(get).toBeTruthy();
  });
  test("works", () => {
    expect(get({ a: 1 }, obj => obj.a, 0)).toEqual(1);
    //@ts-ignore
    expect(get({}, obj => obj.a, 0)).toEqual(0);
    //@ts-ignore
    expect(get({}, obj => obj.a)).toEqual(undefined);
    expect(get({ a: "a" }, obj => obj.a, "")).toEqual("a");
    // @ts-ignore
    expect(get({ a: "a" }, obj => obj[0].c.d, "")).toEqual("");
  });
});
