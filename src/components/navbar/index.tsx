import { useState } from "react"
import ornamenta from "../../assets/ornamenta.png"
import useMediaQuery from "../../hooks/useMediaQuery"
import { SelectedPage } from "../../shared/types"
import ActionButton from "../../shared/actionbutton"
import Link from "./link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const navbarBackground = isTopOfPage ? "bg-gradient-whitegreen drop-shadow" : "bg-green-1 drop-shadow"
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full h-10 py-6`}
            >
                <div
                    className={`${flexBetween} mx-auto w-5/6`}
                >
                    <div
                        className={`${flexBetween} w-full gap-16`}
                    >
                        {/*Left Side */}
                        <img alt="logo" src={ornamenta}/>
                        {/*right Side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link 
                                        page="Home"
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage} 
                                    />
                                    <Link 
                                        page="About Us"
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage} 
                                    />
                                    <Link 
                                        page="Planters"
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage} 
                                    />
                                    <Link 
                                        page="Contact"
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage} 
                                    />
                                </div>
                                    <div>
                                        <ActionButton 
                                            setSelectedPage={setSelectedPage}
                                        >
                                            Contact Us
                                        </ActionButton>
                                    </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-gray-2 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile Menu Modals */}
            {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-gray-4 drop-shadow-xl">
                {/* Close Icon */}
                <div className="flex justify-end p-20">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-2"/>
                    </button>
                </div>
                {/* Menu Items */}
                <div className="ml-[33%] flex flex-col gap-8 text-sm">
                    <Link 
                        page="Home"
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                    />
                    <Link 
                        page="AboutUs"
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                    />
                    <Link 
                        page="Planters"
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                    />
                    <Link 
                        page="Contact"
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                    />
                </div>
            </div>)}
        </nav>
    )
}

export default Navbar