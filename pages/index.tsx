import { Format } from '../layout/format'
import { Trending } from '../components/trending'
import { Latest } from '../components/latest'
import { Popular } from '../components/popular'
import { Category } from '../components/category'

import type { Blog } from '../types/blog';
import { client } from "../lib/client";

type Props = {
  latestBlogs: Array<Blog>;
  trendBlogs: Array<Blog>;
  popularBlogs: Array<Blog>;
  categoryBlogs: Record<string, Array<Blog>>; // categoryごとに分けた配列を持つオブジェクト
};

export default function Home({ trendBlogs, latestBlogs, popularBlogs, categoryBlogs }: Props) {
  return (
    <Format>
      <Trending blogs={trendBlogs} />
      <Latest blogs={latestBlogs} />
      <Popular blogs={popularBlogs} />
      <Category blogs={categoryBlogs as Record<string, Blog[]>} />
    </Format>
  )
}

export const getStaticProps = async () => {
  // APIからブログデータを全て取得
  const allData = await client.get({
    endpoint: 'blogs',
    queries: {
      orders: '-createdAt', limit: 100 // 100件取得
    }
  });
  // const allBlogs = allData.contents;
  const allBlogs: Blog[] = allData.contents;

  // 最新のブログ記事を15件取得し「latestBlogs」に格納
  const latestBlogs = allBlogs.slice(0, 15);

  // ブログ種別（type）がtrenddeあるデータを取得し「trendBlogs」に格納する
  const trendData = allBlogs.filter((blog) => blog.type.includes('trend'));
  const trendBlogs = trendData.slice(0, 10);

  // ブログ種別（type）がpopularのものから15件取得し「popularBlogs」に格納
  const popularData: Array<Blog> = allBlogs.filter(blog => blog.type.includes('popular'));
  // 最新順に15件取得し「popularBlogs」に格納
  const popularBlogs: Array<Blog> = popularData.slice(0, 10);

  // カテゴリーごとにデータを整理し「categoryBlogs」に格納
  const categoryBlogs: Record<string, Array<Blog>> = {}; // categoryごとに分けたオブジェクトを用意
  allBlogs.forEach((blog) => {
    if (categoryBlogs[blog.category]) {
      // すでにカテゴリーの配列があれば追加
      categoryBlogs[blog.category].push(blog);
    } else {
      // カテゴリーの配列がなければ新しく作成
      categoryBlogs[blog.category] = [blog];
    }
  });

  return {
    props: {
      latestBlogs,
      trendBlogs,
      popularBlogs,
      categoryBlogs,
    },
  }
};
