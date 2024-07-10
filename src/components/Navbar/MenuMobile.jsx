import { useState } from "react";
import { navMenuData } from "./staticData";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./../ui/sheet";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet onOpenChange={(e) => setIsOpen(e)}>
            <SheetTrigger asChild>
                {isOpen ? (
                    <VscChromeClose
                        className="text-[16px] text-white "
                        onClick={() => setIsOpen(!isOpen)}
                    />
                ) : (
                    <BiMenuAltRight
                        className="text-[20px] text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                )}
            </SheetTrigger>
            <SheetContent className="bg-primary text-primary-content border-none rounded-l-lg ">
                <SheetHeader>
                    <SheetTitle className="text-white font-bold text-2xl">
                        ICNAAO 2024
                    </SheetTitle>
                </SheetHeader>
                {/* daisy ui magic for nested list  */}
                <ul className="menu bg-transparent w-full rounded-box active:glass prose-md text-md ">
                    {navMenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
                {/* end of nested lists  */}
                <SheetFooter>
                    <aside>
                        <p className="text-muted-foreground mt-11 w-3/4 mx-auto">
                            &copy; 2024 - All right reserved by DoMSC NITH
                        </p>
                    </aside>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MenuMobile;
