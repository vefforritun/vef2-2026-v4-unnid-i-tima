import { useState } from "react";
import { createNewsItem } from "../../lib/news.api";

export function NewsForm() {
  const [title, setTitle] = useState("");

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form as any);

    const titleFromForm = formData.get('title')
    const intro = formData.get('intro')
    console.log('titleFromForm', titleFromForm, 'titleFromState', title, 'intro', intro)

    const body = { title, intro }

    // setState('loading');
    const response = await createNewsItem(body);

  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Titill:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) =>{ console.log(e.target.value);  setTitle(e.target.value)}}
        />
        <p>Þú ert að skrifa: {title}, strengurinn er núna {title.length} stafir.</p>
      </div>
      <div>
        <label>Intro</label>
        <input type="text" name="intro" />
      </div>
      <button>Búa til frétt</button>
    </form>
  );
}
