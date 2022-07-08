const timeConverter = require("./index");

describe("testing timeConverter function", () => {
  test("should take ms and return a string", () => {
    expect(timeConverter(21000)).toBe("21 : seconds");
  });

  test("should take ms as string  and return a string", () => {
    expect(timeConverter("21000")).toBe("21 : seconds");
  });

  test("should take ms sec is singular should return insingular and return a string", () => {
    expect(timeConverter(1000)).toBe("1 : second");
  });

  test("should take ms if after converting everything is singular then return everything as a singular  string", () => {
    expect(timeConverter(90061000)).toBe("1 : day,1 : hour,1 : minute,1 : second");
  });

  test("should take ms if after converting everything is prural then return everything as a prural  string", () => {
    expect(timeConverter(180122000)).toBe("2 : days,2 : hours,2 : minutes,2 : seconds");
  });
}
)