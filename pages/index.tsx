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

export default function Home({ latestBlogs, trendBlogs, popularBlogs, categoryBlogs }: Props) {
  console.log(latestBlogs, trendBlogs, popularBlogs, categoryBlogs);
  return (
    <Format>
      {/* <Trending blogs={trendBlogs} /> */}
      <Latest blogs={latestBlogs} />
      {/* <Popular blogs={popularBlogs} /> */}
      {/* <Category blogs={categoryBlogs} /> */}
    </Format>
  )
}

export const getStaticProps = async () => {
  // 最新のブログ記事を15件取得
  const latestData = await client.get({
      endpoint: 'blogs', queries: {
        orders: '-createdAt', limit: 15 
      } 
    });
  const latestBlogs = latestData.contents;

  // トレンドのブログ記事をtypeがtrendのものから15件取得
  const trendData = await client.get({
      endpoint: 'blogs', queries: {
          filters: `type[equals]trend`, orders: '-createdAt', limit: 15 
      } 
  });
  const trendBlogs = trendData.contents;

  // 人気のブログ記事をtypeがpopularのものから15件取得
  const popularData = await client.get({
      endpoint: 'blogs', queries: {
        filters: `type[equals]popular`, orders: '-createdAt', limit: 15 
      } 
  });
  const popularBlogs = popularData.contents;

  // カテゴリーごとにブログ記事を取得
  const categoryBlogsData = await client.get({
      endpoint: 'blogs', queries: {
          orders: '-createdAt', limit: 100 // 100件取得
      }
  });
  const categoryBlogs: Record<string, Array<Blog>> = {}; // categoryごとに分けたオブジェクトを用意
  categoryBlogsData.contents.forEach((blog) => {
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
