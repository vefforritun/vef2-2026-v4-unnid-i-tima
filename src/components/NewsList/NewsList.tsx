import { Link } from "react-router";
import type { NewsItem } from "../../types";

type Props = {
  news: NewsItem[];
};

export function NewsList({ news }: Props) {
  return (
    <ul>
      {news.map((i) => (
        <li><Link to={`/frettir/${i.slug}`}>{i.title} eftir {i.author.name}</Link></li>
      ))}
    </ul>
  );
}
