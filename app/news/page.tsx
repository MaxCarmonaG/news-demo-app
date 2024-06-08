
import NewsList from '@/components/NewsList';

import { DUMMY_NEWS } from '@/mock-news';

const NewsPage = () => (
  <>
    <h1>New Page</h1>
    <NewsList news={DUMMY_NEWS} />
  </>
);

export default NewsPage;
