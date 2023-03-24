import NewsList from '@/components/NewsList'
import { ArticleType, NewsDataType } from '@/typings';
import { fetchNews } from '@/utils/news';

export default async function Home() {
  const res = await fetchNews('general', '');
  const newsdata: ArticleType[] = res.articles;
  return (
    <>
      <NewsList data={newsdata.slice(0, 13)} query='tesla' totalResults={0} entriesPerPage={16}/>
    </>
  )
}
