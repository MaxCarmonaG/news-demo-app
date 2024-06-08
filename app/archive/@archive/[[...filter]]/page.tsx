import { FC } from "react";
import NewsList from "@/components/NewsList";
import { getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth, getAvailableNewsMonths } from "@/lib";
import { PagePros } from "@/types";
import Link from "next/link";

const FilteredNewsPage: FC<PagePros> = ({ params }) => {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];
  
  const links = selectedYear ? getAvailableNewsMonths(selectedYear) : getAvailableNewsYears();

  const news = (selectedMonth && selectedYear)
    ? getNewsForYearAndMonth(selectedYear, selectedMonth)
    : selectedYear
      ? getNewsForYear(selectedYear)
      : []
  ;
    
  return (
    <>
      <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
            
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
          )})}
        </ul>
      </nav>
    </header>
    {
      news.length
        ? <NewsList news={news} />
        : <p>No news found for the selected period.</p>
    }
  </>
)};

export default FilteredNewsPage;
