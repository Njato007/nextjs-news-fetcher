export const fetchNews = async (categories: string, keywords: string, sources?: string, langues?: string, date_now?: string)=> {
    date_now = date_now || '2023-02-24';
    langues = langues || 'en';
    keywords = keywords || '';
    sources = sources || '';

    const url = `https://newsapi.org/v2/everything?q=${categories}&from=${date_now}&language=${langues}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`;
    // const url = `http://api.mediastack.com/v1/news?access_key=c152835ab7039609348b1b0b7b98cc5a&keywords=facebook&date=${date_now}&categories=${categories}&langues=${langues}&sources=${sources}&keywords=${keywords}&limit=100`;

    const res = await fetch(url, {
        cache: 'no-cache',
        next: { revalidate: 120 }
    });

    const newsdata = await res.json();
    return newsdata;
} 

export const categories = [
    'general', 'entertainment', 'health', 'sports', 'business', 'science', 'technology'
];