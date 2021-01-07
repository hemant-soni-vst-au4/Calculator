import calculate from "../calculate";

describe("test for calculate", () => {
  test("Passing first value", () => {
    expect(
      calculate({ total: null, next: null, operation: null }, "1")
    ).toStrictEqual({ next: null, operation: null, total: "1" });
  });

  test("Addition operation", () => {
    expect(
        calculate({total: "2", next: "1", operation: "+"},'=')
    ).toStrictEqual({ "next": null, "operation": null, "total": "3" })
  });

  test("Substraction operation", () => {
    expect(
        calculate({total: "2", next: "1", operation: "-"},'=')
    ).toStrictEqual({ "next": null, "operation": null, "total": "1" })
  });

  test("Multiplication operation", () => {
    expect(
        calculate({total: "2", next: "3", operation: "x"},'=')
    ).toStrictEqual({ "next": null, "operation": null, "total": "6" })
  });

  test("Division operation", () => {
    expect(
        calculate({total: "6", next: "3", operation: "÷"},'=')
    ).toStrictEqual({ "next": null, "operation": null, "total": "2" })
  });
});
