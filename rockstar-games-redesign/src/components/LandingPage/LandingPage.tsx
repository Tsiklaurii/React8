import Header from "../Header/Header"

import banner from '../../assets/images/GTA_6_banner.svg'
import Footer from "../Footer/Footer"
import FeaturedGames from "../FeaturedGames/FeaturedGames"

import GTA_5 from '../../assets/images/game_posters/GTA_5.svg'
import GTA_online from '../../assets/images/game_posters/GTA_online.svg'
import RED from '../../assets/images/game_posters/RED.svg'
import RED_online from '../../assets/images/game_posters/RED_Online.svg'

const LandingPage = () => {
    return (
        <div className="bg-[#101010] font-helvetica justify-items-center">
            <Header />
            <img src={banner} alt="banner" className="w-full" />
            <FeaturedGames gamePoster1={GTA_5} gamePoster2={GTA_online} gamePoster3={RED} gamePoster4={RED_online}/>
            <Footer />
        </div>
    )
}

export default LandingPage