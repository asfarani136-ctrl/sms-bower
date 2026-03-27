const API_KEY = process.env.SMSBOWER_API_KEY || "";
const BASE_URL = process.env.SMSBOWER_BASE_URL || "https://smsbower.page/stubs/handler_api.php";

function buildUrl(params: Record<string, string | number | undefined>) {
  const url = new URL(BASE_URL);
  url.searchParams.set("api_key", API_KEY);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }
  return url.toString();
}

export async function getServicesList() {
  const res = await fetch(buildUrl({ action: "getServicesList" }), { cache: "no-store" });
  return res.json();
}

export async function getPrices(service?: string, country?: string) {
  const res = await fetch(buildUrl({ action: "getPrices", service, country }), { cache: "no-store" });
  return res.json();
}

export async function getNumberV2({
  service,
  country,
  maxPrice,
}: {
  service: string;
  country: string;
  maxPrice?: number;
}) {
  const res = await fetch(buildUrl({ action: "getNumberV2", service, country, maxPrice }), { cache: "no-store" });
  return res.json();
}

export async function getStatus(id: string) {
  const res = await fetch(buildUrl({ action: "getStatus", id }), { cache: "no-store" });
  return res.text();
}

export async function setStatus(id: string, status: 1 | 3 | 6 | 8) {
  const res = await fetch(buildUrl({ action: "setStatus", id, status }), { cache: "no-store" });
  return res.text();
}
