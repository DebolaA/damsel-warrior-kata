import { convertToHexadecimal } from "../src/rgb-to-hex";

describe("converts rgb to hexadecimal", () => {
  it("should return hexadecimal value #0A05C8 of 10, 5, 200", () => {
    expect(convertToHexadecimal(10, 5, 200)).toBe("0A05C8");
  });
  it("should return hexadecimal value #FFFFFF of 255, 255, 255", () => {
    expect(convertToHexadecimal(255, 255, 255)).toBe("FFFFFF");
  });
  //   it("should throw and error if inputs are not numbers", () => {
  //     expect(() => convertToHexadecimal(45.5, 255, 255)).toThrow(
  //       "Input values should be numbers only"
  //     );
  //   });
  it("should return hexadecimal value #FFFFFF of 255, 255, 255", () => {
    expect(convertToHexadecimal(4.2, 255, 255)).toBe("04FFFF");
  });
});
