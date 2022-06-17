import { parseTransferType } from "utils/utils";

describe("utils", () => {
  describe("parseTransferType", () => {
    it("should return 'No disponible' when type is null'", async () => {
      const typeToTest = null;
      const typeReturned = parseTransferType(typeToTest);

      expect(typeReturned).toBe("No disponible");
    });
  });

  it("should return 'Fin de contrato' when type is 'N/A'", async () => {
    const typeToTest = "N/A";
    const typeReturned = parseTransferType(typeToTest);

    expect(typeReturned).toBe("Fin de contrato");
  });

  it("should return 'Cesión' when type is 'Loan'", async () => {
    const typeToTest = "Loan";
    const typeReturned = parseTransferType(typeToTest);

    expect(typeReturned).toBe("Cesión");
  });

  it("should return 'Libre' when type is 'Free'", async () => {
    const typeToTest = "Free";
    const typeReturned = parseTransferType(typeToTest);

    expect(typeReturned).toBe("Libre");
  });

  it("should return 'Libre' when type is '€ Free'", async () => {
    const typeToTest = "€ Free";
    const typeReturned = parseTransferType(typeToTest);

    expect(typeReturned).toBe("Libre");
  });
});
