import Link from 'next/link';
import classes from './main-navigation.module.css'
import Logo from './logo';
const MainNavigation = (props) => {

    return (
        <header className={classes.header}>
            <Link href="/" legacyBehavior>
                <a>
                    <Logo />
                </a>
            </Link>

            <nav>
                <ul>
                    <li><Link href="/posts" legacyBehavior> Posts</Link></li>
                    <li><Link href="/contact" legacyBehavior>  Contact  </Link> </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainNavigation;