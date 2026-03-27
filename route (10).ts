export async function getUsdtToPkrRate() {
  // Production note:
  // replace with your preferred market/OTC rate source.
  // For now we use a fallback to keep the app stable.
  const fallback = Number(process.env.USDT_PKR_FALLBACK_RATE || 279);
  return fallback;
}
