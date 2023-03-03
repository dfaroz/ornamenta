import { SelectedPage } from "../shared/types"
import Link from "../components/navbar/link"

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void}

const Footer = ({ selectedPage, setSelectedPage}: Props) => {
    return (
        <>
            <div className="flex flex-row justify-center bg-green-1 py-5">
                <div className="flex flex-col">
                    <p className="text-white text-2xl text-center">
                        Feel free to contact us
                    </p>
                    <div className="flex flex-row justify-around gap-20 text-sm mt-5">
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
                    <div></div>
                </div>
            </div>
            <div className="flex justify-center bg-black py-2 mb-5">
                <div>
                    <p className="text-white text-sm text-center">
                        Copyright 2023 Ornamenta. All right reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer