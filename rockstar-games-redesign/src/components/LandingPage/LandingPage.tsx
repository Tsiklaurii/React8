import Header from "../Header/Header"

import banner from '../../assets/images/GTA_6_banner.svg'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <img src={banner} alt="banner" className="w-full" />
        </div>
    )
}

export default LandingPage