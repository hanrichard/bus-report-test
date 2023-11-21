import { calStatus } from "./utility";

describe("utlity component", () => {
  it("should render correct numbers", () => {
    expect(calStatus(123)).toBe("isLate");
    expect(calStatus(23)).toBe("isOnTime");
    expect(calStatus(-123)).toBe("isEarly");
    expect(calStatus(null)).toBe("isNull");
  });
});
