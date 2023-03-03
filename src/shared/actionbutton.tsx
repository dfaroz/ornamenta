import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children,setSelectedPage }: Props) => {
  return (
    <AnchorLink
        className="flex flex-row justify-between outline outline-1 rounded-md text-center text-white px-10 py-2 hover:text-green-1"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton