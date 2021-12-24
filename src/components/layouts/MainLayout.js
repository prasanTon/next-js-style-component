import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

//create childern for destructor
const MainLayout = ({childern}) => {
    return (
        //fragement same react
        <>
            <Navbar />
            {childern}
            <Footer />
        </>
    )
}

export default MainLayout
