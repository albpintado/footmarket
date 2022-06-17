export const parseTransferType = (type: string | null) => {
  if (type === null) {
    return "No disponible";
  }
  if (type === "N/A") {
    return "Fin de contrato";
  }
  if (type === "Loan") {
    return "Cesión";
  }
  if (type === "Free" || type === "€ Free") {
    return "Libre";
  }
  return type;
};
