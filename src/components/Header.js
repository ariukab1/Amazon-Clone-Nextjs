import Image from "next/image";
import {MenuIcon,SearchIcon,ShoppingCartIcon,MagnifyingGlassIcon} from '@heroicons/react/solid';


function Header() {
    return (
        <header>
            <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
                <div>
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                <div className="bg-yellow-400">
                    <input type="text"/>
                    <SearchIcon  className="h-12 p-4"/>
                </div>
            </div>
        </header>
    );

}

export default Header;