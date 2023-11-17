import { useContext } from "react"
import PageTitleContext from "../context/PageTitleProvider"

const usePageTitle = () => {
    return useContext(PageTitleContext)
}

export default usePageTitle