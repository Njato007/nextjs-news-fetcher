'use client'
import { ArticleType, NewsDataType } from "@/typings";
import NewItem from "../components/Article";
import Search from "./Search";
import { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
import { useRouter, useSearchParams } from "next/navigation";

type ListPropsType = {
  data: ArticleType[],
  query: string,
  totalResults: number,
  entriesPerPage?: number
}

export default function NewsList({ data, query, totalResults, entriesPerPage } : ListPropsType) {

  const params = useSearchParams();
  const [fNews, setFNews] = useState(data);
  const [publicData, setPublicData] = useState(data);
  const displayLimit = entriesPerPage || 8;
  const router = useRouter();

  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const goToPageIndex = (pageIndex: number) => {
    let e = pageIndex * displayLimit;
    let s = e - displayLimit;
    setCurrentPage(pageIndex);
    // get data related to page
    let limitedData = data.filter((_, index) => {
      return index >= s && index < e;
    });
    // show data
    setFNews(limitedData);
    // used in search
    setPublicData(limitedData);
  }

  useEffect(() => {

    const restPage = Math.floor(data.length % displayLimit); 
    const size = Math.floor(data.length / displayLimit) + (restPage === 0 ? 0 : 1);
    // show  only 8 element
    let paramId = parseInt(params.get('page') || '1');
    goToPageIndex(paramId || currentPage);
    setPageSize(size);

    console.log('useeffect is firing')

  }, [data]);

  const filterData = (query: string) => {
    setFNews(publicData.filter((item) => (
      item.title?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.author?.toLowerCase().includes(query)
    )));
  }

  function handleNext() {
    if (currentPage < pageSize) {
      // goToPageIndex(currentPage + 1);
      router.push(`/${query}?page=${currentPage + 1}`)
    }
  }

  function handlePrevious() {
    if (currentPage > 0) {
      // goToPageIndex(currentPage - 1);
      router.push(`/${query}?page=${currentPage - 1}`)
    }
  }

  function handlePoint(pageIndex: number) {
    let e = pageIndex * displayLimit;
    let s = e - displayLimit;
    // goToPageIndex(pageIndex);
    router.push(`/${query}?page=${pageIndex}`);
  }

  return (
    <div className="mb-4">
      <div className="w-full">
        <div className='p-2 py-1 mb-3 bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 rounded-md dark:divide-slate-500 divide-x-[1px] flex items-center justify-between space-x-3'>
          <Search onSearch={filterData} query={query} />
          <span className="text-md mb-0 uppercase text-slate-400 font-light pl-3 text-center whitespace-nowrap">{totalResults} Results</span>
        </div>
      </div>
      <PaginationButton onNext={handleNext} onPrev={handlePrevious} onPoint={handlePoint} activePage={currentPage}
        pageSize={pageSize} disabledPrev={currentPage <= 1} disabledNext={currentPage >= pageSize}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {
          fNews.map((item, index) => (
            <NewItem key={index} newsdata={item} />
          ))
        }
      </div>
      <PaginationButton onNext={handleNext} onPrev={handlePrevious} onPoint={handlePoint} activePage={currentPage}
        pageSize={pageSize} disabledPrev={currentPage <= 1} disabledNext={currentPage >= pageSize}
      />
    </div>
  )
}