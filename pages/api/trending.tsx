// Next.jsから提供される、APIリクエストを表す型
import { NextApiRequest, NextApiResponse } from 'next';

// ダミーデータをインポート
import data from './data';

// APIのリクエストハンドラー関数
export default function handler(req: NextApiRequest, res: NextApiResponse){
    // ダミーデータからTrendingを取得
    const { Trending } = data;

    // Trendingが存在する場合は、HTTPステータスコード200を返し、TrendingデータをJSONで返す
    if(Trending) return res.status(200).json(Trending);

    // Trendingが存在しない場合は、HTTPステータスコード404を返し、エラーメッセージを含むJSONを返す
    return res.status(404).json({ error: "Data Not Found"});
}