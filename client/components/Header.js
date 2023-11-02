import { Menu } from "semantic-ui-react";
import Link from 'next/link'

const Header = () => {
    return ( <Menu style= {{marginTop: "20px"}} >
            <Link href="/">
                <Menu.Item>
                    Main
                </Menu.Item>
            </Link>
            <Link href="/add">
                <Menu.Item>
                    Create contact
                </Menu.Item>
            </Link>
            <Link href="/view">
                <Menu.Item>
                    View contact
                </Menu.Item>
            </Link>
        </Menu> );
    }
 
export default Header;