import { categories } from "../../constants";

import fetchNews from "../../lib/fetchNews";

async function page() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <section>{/* NewsList */}</section>;
}

export default page;
