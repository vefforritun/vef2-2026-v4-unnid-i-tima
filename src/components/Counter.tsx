import { useState } from "react";

type Props = {
  title: string;
};

export function Counter({ title }: Props) {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>{title}</h2>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </section>
  );
}
