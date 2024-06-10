
import { FC } from 'react';
import { getAllNews } from '@/lib';
import NewsList from '@/components/NewsList';

const NewsPage: FC = () => {
  const news = getAllNews();
  
  return (
    <>
      <h1>New Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
