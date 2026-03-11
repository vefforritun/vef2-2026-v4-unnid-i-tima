import { useEffect, useState } from "react";
import { Link } from "react-router";
import { LoadingSkeleton } from "../components/LoadingSkeleton/LoadingSkeleton";
import { NewsList } from "../components/NewsList/NewsList";
import { getNews } from "../lib/news.api";
import type { NewsState, NewsItem, NewsItemResult } from "../types";
import { NewsForm } from "../components/NewsForm/NewsForm";

export function IndexPage() {
  const [newsState, setNewsState] = useState<NewsState>("initial");
  const [news, setNews] = useState<NewsItemResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setNewsState("loading");
      const newsResponse = await getNews();
      console.log(newsResponse)

      if (newsResponse.ok) {
        setNews(newsResponse.data);
        setNewsState("data");
      } else {
        setNewsState("error");
        console.error("error fetching news", newsResponse.error);
      }
    };

    fetchData();
  }, []);


  return (
    <section>
      <h1>Fréttir!</h1>
      <p>state: {newsState}</p>
      <NewsForm />
      {newsState === "loading" && <LoadingSkeleton />}
      {newsState === "data" && news && <NewsList news={news.data} />}
      {newsState === "error" && <p>Villa kom upp</p>}
      <ul>
        <li>
          <Link to="/frettir/foo">Foo fréttin</Link>
        </li>
        <li>
          <Link to="/ny-frett">Ný frétt</Link>
        </li>
      </ul>
    </section>
  );
}
