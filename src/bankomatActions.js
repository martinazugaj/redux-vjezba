export function incAction() {
  return { type: "INC" };
}

export function decAction(value) {
  return { type: "DEC", value: value };
}

export function resetAction() {
  return { type: "RESET" };
}
