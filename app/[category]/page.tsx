import NewsList from '@/components/NewsList'
import { ArticleType, NewsDataType } from '@/typings'
import { categories, fetchNews } from '@/utils/news'
import React from 'react'
import json from '../../utils/newsdatajson.json'

type ParamsType = {
    params: {
        category: string
    }
}
const Newq = async ({params: {category}}: ParamsType) => {
    // const res = await fetchNews(category, '');
    const newsdata = json.articles;
    const results: number = json.articles.length;
    return (
    <>
        <NewsList data={newsdata} query={category} totalResults={results} entriesPerPage={8} />
    </>
    )
}

export async function generateStaticParams() {
    return categories.map(category => ({
        category: category
    }));
}

export const dynamicParams = true;
export const revalidate = 10;

export default Newq