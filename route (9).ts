const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export function getMarkupPercent(input?: number) {
  const fallback = Number(process.env.DEFAULT_MARKUP_PERCENT || 25);
  const min = Number(process.env.MIN_MARKUP_PERCENT || 20);
  const max = Number(process.env.MAX_MARKUP_PERCENT || 30);
  return clamp(Math.round(input ?? fallback), min, max);
}

export function roundPkr(amount: number) {
  return Math.round(amount); // nearest 1 PKR
}

export function finalPricePkr({
  providerCostUsd,
  usdtPkrRate,
  markupPercent,
}: {
  providerCostUsd: number;
  usdtPkrRate: number;
  markupPercent?: number;
}) {
  const pct = getMarkupPercent(markupPercent);
  const pkr = providerCostUsd * usdtPkrRate * (1 + pct / 100);
  return roundPkr(pkr);
}
