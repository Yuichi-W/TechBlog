// Next.jsから提供される、APIリクエストを表す型
import { NextApiRequest, NextApiResponse } from 'next';
// ダミーデータをインポート
import data from '../data';

export default function hanlder(req: NextApiRequest, res: NextApiResponse){
    const { Posts } = data;
    if (Posts) return res.status(200).json(Posts);

    return res.status(404).json({ error : "Data Not Found"})
}