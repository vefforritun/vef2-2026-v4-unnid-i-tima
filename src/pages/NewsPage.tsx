import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { getNews, getNewsItem } from "../lib/news.api";
import type { NewsItem, NewsState } from "../types";

export function NewsPage() {
  let params = useParams();
  const [newsState, setNewsState] = useState<NewsState>("initial");
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setNewsState("loading");
      const newsResponse = await getNewsItem(params.slug ?? "");

      if (newsResponse.ok) {
        setNews(newsResponse.data);
        setNewsState("data");
      } else {
        setNewsState("error");
      }
    };

    fetchData();
  }, []);

  console.log(params);
  return (
    <>
      {JSON.stringify(news)}
      <p>
        <Link to="/">Aftur á forsíðu</Link>
      </p>
    </>
  );
}
