import Link from 'next/link';
import classes from './MainHeader.module.css';

const MainHeader = () => (
  <header id="main-header">
    <div id="logo">
      <Link href="/">NextNews</Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
