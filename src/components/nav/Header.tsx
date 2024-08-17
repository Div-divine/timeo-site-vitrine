import NavBar from "./NavBar"
import { createClient } from "@/prismicio";


export default async function Header() {

    const client = createClient();
    const menuItems = await client.getSingle("menu")

    

    return (
        <div className="bg-[#03171E]"><NavBar menu={menuItems} /></div>
    )
}
