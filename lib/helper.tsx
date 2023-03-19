// apiのendpointを指定（/api/posts）
const baseURL = "http://localhost:3000/api/posts";

// 戻り値: idが指定されている場合はそのidに一致するポストオブジェクト、指定されていない場合は全てのポストオブジェクトの配列
export const getPost = async (id?: number) => {
    // APIからポストデータを取得するためのリクエストを送信する
    const res = await fetch(`${baseURL}`);
    // レスポンスのJSONデータを解析する
    const posts = await res.json()

    // idが指定されている場合は、idに一致するポストを配列から探して返す
    if(id){
        return posts.find((value: { id: number }) => value.id == id)
    }

    // idが指定されていない場合は、全てのポストオブジェクトの配列を返す
    return posts;
}