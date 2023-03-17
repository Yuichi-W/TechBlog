import { NextApiRequest, NextApiResponse } from 'next';
import data from '../data';

// APIのリクエストを受け取り、レスポンスを返す
export default function handler (req: NextApiRequest, res: NextApiResponse) {
    // パラメーター"postId"が存在する場合、数値に変換する
    const postId = req.query.postId && Number(req.query.postId);

    // データを取得する
    const { Posts } = data;

    // "postId"が存在する場合、投稿データを取得して返す
    if(postId) {
        // "Posts"配列から、"id"が"postId"と等しい投稿を検索する
        const post = Posts.find( value => value.id === postId)
        // 投稿データをレスポンスとして返す
        return res.status(200).json(post)
    }

    // "postId"が存在しない場合、エラーを返す
    return res.status(404).json({ error : "Post Not Found"})
}