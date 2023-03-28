import { Format } from '../layout/format'
import { Trending } from '../components/trending'
import { Latest } from '../components/latest'
import { Popular } from '../components/popular'
import { Category } from '../components/category'

import type { Blog } from '../types/blog';
import { client } from "../lib/client";

type Props = {
  blog: Array<Blog>;
};

export default function Home({ latestBlogs }: Props) {
// export default function Home() {
  console.log(latestBlogs)
  return (
    <Format>
      <Trending />
      <Latest latestBlogs={latestBlogs} />
      <Popular />
      <Category />
    </Format>
  )
}
export const getStaticProps = async () => {
  // 最新のブログ記事を15件取得
  const latestData = await client.get({ endpoint: 'blogs', queries: { orders: '-createdAt', limit: 15 } });
  const latestBlogs = latestData.contents;

  return {
    props: {
      latestBlogs,
    },
  }
};

