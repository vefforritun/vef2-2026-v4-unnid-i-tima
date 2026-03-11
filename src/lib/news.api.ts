import type { NewsItem, NewsItemResult } from "../types";

type ApiResult<T> =
  | {
      data: T;
      ok: true;
    }
  | {
      ok: false;
      reason: "error" | "not-found";
      error?: Error;
    };

const API_URL = import.meta.env.VITE_API_URL || "";

/**
 * Return a list of news.
 */
export async function fetchFromApi<T>(path: string, body: any = null): Promise<ApiResult<T>> {
  let url;
  try {
    url = new URL(path, API_URL);
  } catch (e) {
    return {
      ok: false,
      reason: "error",
      error: e as Error,
    };
  }

  let response;
  try {
    let options = {}
    if (body) {
      options = { method: 'POST', body: JSON.stringify(body) }
    }
    response = await fetch(url, options);
  } catch (e) {
    return {
      ok: false,
      reason: "error",
      error: e as Error,
    };
  }

  if (!response.ok) {
    console.error("response failed", response.status, response.statusText);
    return {
      ok: false,
      reason: "error",
      error: new Error("not 2xx"),
    };
  }

  let json;
  try {
    json = await response.json();
  } catch (e) {
    return {
      ok: false,
      reason: "error",
      error: e as Error,
    };
  }
  const data = json as T;

  return {
    ok: true,
    data,
  };
}

export async function getNews(): Promise<ApiResult<NewsItemResult>> {
  return fetchFromApi("/news");
}

export async function getNewsItem(slug: string): Promise<ApiResult<NewsItem>> {
  return fetchFromApi(`/news/${slug}`);
}

export async function createNewsItem(body: any): Promise<boolean> {
  const response = fetchFromApi('/news', body)

  console.log(response);

  return false;

}
