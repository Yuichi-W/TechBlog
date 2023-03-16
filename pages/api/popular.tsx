// Next.jsから提供される、APIリクエストを表す型
import { NextApiRequest, NextApiResponse } from 'next';
// ダミーデータをインポート
import data from './data';

// api/popular
export default function handler(req: NextApiRequest, res: NextApiResponse){
    const { Popular } = data;

    if(Popular) return res.status(200).json(Popular);
    return res.status(404).json({ error : "Data Not Found"})
}