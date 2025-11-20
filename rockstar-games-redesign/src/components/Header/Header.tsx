import logo from '../../assets/images/logo.svg';
import arrow_drop_down from '../../assets/images/arrow_drop_down.svg'
import search from '../../assets/images/search.svg'
import login from '../../assets/images/login.svg'

const Header = () => {
    return (
        <div className="bg-[#020202] p-[29px_140px] flex items-center place-content-between">
            <div className='flex items-center gap-[47px]'>
                <img src={logo} alt="logo" className='w-[53px] h-[54px]' />
                <div className='flex gap-6'>
                    <div className='flex font-helvetica items-center gap-[5px]'>
                        <a href="#" className='text-[#FFFFFF]'>Jogos </a>
                        <img src={arrow_drop_down} alt="arrow_drop_down" className='cursor-pointer' />
                    </div>
                    <a href="#" className='text-[#FFFFFF] font-helvetica'>Loja</a>
                    <a href="#" className='text-[#FFFFFF] font-helvetica'>Ajuda</a>
                </div>
            </div>
            <div className='flex gap-10'>
                <button className='bg-[#FCAF17] rounded-lg p-[11px_16px] cursor-pointer'>Baixe o Launcher</button>
                <div className='flex gap-6'>
                    <img src={search} alt="search" className='w-12 h-12' />
                    <img src={login} alt="login" className='w-12 h-12' />
                </div>
            </div>
        </div>
    )
}

export default Header