import { useEffect, useState } from "react";
import { Link } from "react-router";

export function IndexPage() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/news");

      console.log(response.status, response.statusText);

      const json = await response.json();

      console.log(json);

      setNews(json.data);
    };

    fetchData();
  }, []);

  console.log(news);

  return (
    <p>
      {news && (
        <ul>
            { news.map(i => (
                <li>{i.title}</li>
            ))}
        </ul>
      )}
      <ul>
        <li>
          <Link to="/frettir/foo">Foo fréttin</Link>
        </li>
        <li>
          <Link to="/ny-frett">Ný frétt</Link>
        </li>
      </ul>
    </p>
  );
}
