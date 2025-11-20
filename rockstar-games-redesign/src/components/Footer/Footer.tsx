import footer_logo from '../../assets/images/footer_logo.svg'
import twitch from '../../assets/images/soc_networks/twitch.svg'
import insta from '../../assets/images/soc_networks/instagram.svg'
import twitter from '../../assets/images/soc_networks/twitter.svg'
import youtube from '../../assets/images/soc_networks/youtube.svg'
import fb from '../../assets/images/soc_networks/facebook.svg'

const Footer = () => {
    return (
        <div className="bg-[#020202] p-[93px_140px] flex items-center place-content-between">
            <div className='flex items-center gap-10'>
                <img src={footer_logo} alt="footer_logo" className='cursor-pointer' />
                <div className='flex flex-col gap-2'>
                    <div className='text-[#B1B1B1] flex gap-6'>
                        <a href="#">CONTATO</a>
                        <a href="#">SOBRE</a>
                        <a href="#">SUPORTE</a>
                        <a href="#">EMPREGOS</a>
                    </div>
                    <p className='text-[#B1B1B1] text-[13px]'>©2023 Rockstar Games, Inc.&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;YWR Studio.</p>
                </div>
            </div>
            <div className='flex gap-8'>
                <a href="#"><img src={twitch} alt="twitch" className='cursor-pointer' /></a>
                <a href="#"><img src={insta} alt="insta" className='cursor-pointer' /></a>
                <a href="#"><img src={twitter} alt="twitter" className='cursor-pointer' /></a>
                <a href="#"><img src={youtube} alt="youtube" className='cursor-pointer' /></a>
                <a href="#"><img src={fb} alt="fb" className='cursor-pointer' /></a>
            </div>
        </div>
    )
}

export default Footer