import NewsList from '@/components/NewsList';
import { getLatestNews } from "@/lib";

const LatestPage = () => {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Lates News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
