import sql from "better-sqlite3";

import { NewsType } from "@/types";

const db = sql("./database/data.db");

export const getAllNews = () =>
  db.prepare<[], NewsType>("SELECT * FROM news").all();

export const getNewsItem = (slug: string) =>
  db.prepare<string, NewsType>("SELECT * FROM news WHERE slug = ?").get(slug);

export const getLatestNews = () =>
  db
    .prepare<[], NewsType>("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();

export const getAvailableNewsYears = () =>
  db
    .prepare<[], { year: string }>(
      "SELECT DISTINCT strftime('%Y', date) as year FROM news"
    )
    .all()
    .map(({ year }) => year);

export const getAvailableNewsMonths = (year: string) =>
  db
    .prepare<string, { month: string }>(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map(({ month }) => month);

export const getNewsForYear = (year: string) =>
  db
    .prepare<string, NewsType>(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

export const getNewsForYearAndMonth = (year: string, month: string) =>
  db
    .prepare<string[], NewsType>(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
