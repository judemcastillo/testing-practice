import { capitalize,reverseString,calculator,caesarCipher, analyzeArray } from "./script.js";

test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
}
);
test("reverseString", () => {
    expect(reverseString("hello")).toBe("olleh");
}
);
test("calculator", () => {
    const calc = calculator(10, 5);
    expect(calc.add()).toBe(15);
    expect(calc.subtract()).toBe(5);
    expect(calc.multiply()).toBe(50);
    expect(calc.divide()).toBe(2);
}
);
test("caesarCipher", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
}
);
test("analyzeArray", () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    expect(result.length).toBe(5);
});