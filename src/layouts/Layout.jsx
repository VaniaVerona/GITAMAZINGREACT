import Header  from "../components/Header"
import  Footer from "../components/Footer"
import ContenedorMain from "../components/ContenedorMain"

function Layout ({children}) {
    return (
        <>
            < Header />
            <ContenedorMain>           
             {children}
            </ContenedorMain>     
             < Footer />
               </>
    )

}
export default Layout
