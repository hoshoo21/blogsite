import { Fragment } from "react";
import MainNavigation from "./mainnavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation></MainNavigation>
            <main>{props.children} </main>
        </Fragment>
    );
}
export default Layout;