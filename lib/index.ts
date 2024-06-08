import { DUMMY_NEWS } from '@/mock-news';

const numArr: number[] = [];

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export const getAvailableNewsYears = () => {
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      return [...years, year];
    }
    return years;
  }, numArr).sort((a, b) => b - a);
}

export const getAvailableNewsMonths = (year: string) => {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        return [...months, month + 1];
      }
    }
    return months;
  }, numArr).sort((a, b) => b - a);
}

export function getNewsForYear(year: string) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: string, month: string) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
