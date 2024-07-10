import { useState, useEffect } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY >= 40) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    return (
        <div
            className={` w-full  items-center  z-50 fixed  top-0 transition-all duration-500  ${
                show ? "" : ""
            } `}
        >
            {/* <div
    className={`bg-red-w-full flex justify-between`}
  > */}
            <div
                className={` relative ${
                    show
                        ? "bg-primary text-primary-content rounded-b-3xl border-b-[1px] border-primary-content/30"
                        : "bg-primary text-primary-content rounded-b-lg "
                } items-center w-full flex justify-between transition-all duration-500 py-1`}
            >
                <div className="flex gap-2 items-center ml-5">
                    <Link href="/">
                        <div className=" flex items-end gap-2 ">
                            <img src={logo} alt="logo" className="" />
                        </div>
                    </Link>
                </div>

                {/* menu start  */}

                <div
                    className={`min-h-full px-3 rounded-3xl mx-auto left-0 right-0 w-fit my-auto  flex-row  gap-2 items-center hidden xl:flex py-2  ${
                        show ? " text-primary-content" : "text-primary-content"
                    } `}
                >
                    <Menu />
                </div>

                <div className="  flex items-center gap-2   mr-5">
                    {/* mobile menu  */}
                    <div className="xl:hidden block px-2">
                        <MenuMobile />
                    </div>
                    {/* Mobile menu end */}
                </div>

                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default Navbar;
