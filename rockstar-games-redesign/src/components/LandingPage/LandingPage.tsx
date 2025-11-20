import Header from "../Header/Header"

import banner from '../../assets/images/GTA_6_banner.svg'
import Footer from "../Footer/Footer"

const LandingPage = () => {
    return (
        <div>
            <Header />
            <img src={banner} alt="banner" className="w-full" />
            <Footer />
        </div>
    )
}

export default LandingPage