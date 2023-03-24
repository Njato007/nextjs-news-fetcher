export type ArticleType = {
    title: string,
    author: string,
    description: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
    url: string,
    source: {
        id: any,
        name: string,
    },
    id?: string,
    name?: string
}

export type NewsDataType = {
    author: string,
    title: string,
    description: string,
    image: string,
    published_at: string,
    langue: string,
    url: string,
    langue: string,
    country: string,
    source: string,
}