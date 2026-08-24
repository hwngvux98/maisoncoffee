const vndFormatter = new Intl.NumberFormat("vi-VN");

export function formatVnd(amountVnd: number): string {
  return `${vndFormatter.format(amountVnd)}đ`;
}
