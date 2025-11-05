import { Link, useLocation } from "react-router"
import { NavigationMenuItem, NavigationMenuLink } from "../navigation-menu"
import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { cn } from "@/lib/utils"

export const CustomMenu = () => {
    const {pathname}= useLocation()

    const isActive = (path:string) => {
        return pathname === path
    }
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex-row">

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/') && 'bg-slate-200',' p-2 rounded-md')}>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}>
                        <Link to="/search">Buscar</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
