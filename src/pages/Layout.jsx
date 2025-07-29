import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getCharacters } from "../Api/callApi"
import { useEffect } from "react"
import { getAkatsuki } from "../Api/callApi"
import { getTailedBeasts } from "../Api/callApi"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { store, dispatch } = useGlobalReducer()

    const getCharacterApi = async () => {
        const dataApi = await getCharacters();
        dispatch({
            type: 'add_task',
            payload: dataApi
        })
    }
    const getAkatsukiApi = async () => {
        const dataApi = await getAkatsuki();
        dispatch({
            type: 'add_akatsuki',
            payload: dataApi
        })
    }
    const getTailedBeastsApi = async () => {
        const dataApi = await getTailedBeasts();
        dispatch({
            type: 'add_tailedBeasts',
            payload: dataApi
        })
    }
    

    useEffect(() => { getTailedBeastsApi(), getAkatsukiApi(), getCharacterApi() }, [])
    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}