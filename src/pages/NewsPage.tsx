import { Link, useParams } from "react-router";
import { Counter } from "../components/Counter";

export function NewsPage() {
  let params = useParams();

  console.log(params);
  return (
    <>
      <p>fréttasíða</p>
      <Counter title="News page counter" />
      <p>
        <Link to="/">Aftur á forsíðu</Link>
      </p>
    </>
  );
}
