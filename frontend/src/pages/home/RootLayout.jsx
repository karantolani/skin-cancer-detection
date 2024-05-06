import Header from "../../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Page from "../../components/Page.jsx";

function RootLayout() {
    return (
        <Page className="flex flex-col">
            <Header />
            <Outlet />
        </Page>
    )
}

export default RootLayout;