import {Link} from "react-router-dom";

function NavItem({text, to, serverSideUrl = false}) {

    const classList = "border-b border-b-transparent py-2 transition hover:border-b-gray-800 cursor-pointer";

    if (serverSideUrl) {
        return (
            <a className={classList} href={to}>
                {text}
            </a>
        )
    }

    return (
        <Link to={to} className={classList}>
            {text}
        </Link>
    )
}

export default NavItem;