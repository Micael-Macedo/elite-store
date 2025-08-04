import { ILink } from "@/type/link-interface"
import Link from "../link/page"
import Search from "../search/page"
import Cart from "../cart/page"

export default function Header() {
    const listLinks: ILink[] = [
        {
            url: "/home",
            text: "Home"
        },
        {
            url: "/categories",
            text: "Categories"
        },
        {
            url: "/Deals",
            text: "Deals"
        },
        {
            url: "/about",
            text: "About"
        },
    ]
    return (
        <header>
            <nav className="flex justify-between">
                <ul></ul>
                <ul className="flex justify-between">
                    {
                        listLinks.map(link => (
                            <li><Link {...link} /></li>
                        )) 
                    }
                </ul>
                <ul>
                    <li><Search /></li>
                </ul>
                <ul>
                    <li><Cart /></li>
                </ul>
            </nav>
        </header>
    )
}