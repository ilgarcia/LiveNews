import { categories } from "../../constants";

import fetchNews from "../../lib/fetchNews";
import NewsList from "./NewsList";

async function page() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  
  return (
    <section>
      <NewsList news={news} />
    </section>
  );
}

export default page;
