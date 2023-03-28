export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    subtitle: string
    description: string
    img: {
      url: string
      height: number
      width: number
    }
    category: string
  }