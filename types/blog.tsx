export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    description: string
    content: string
    img: {
      url: string
      height: number
      width: number
    }
    category: string[]
    type: string
    authorDirector: string
    authorName: string
    authorImg: {
      url: string
      height: number
      width: number
    }
}