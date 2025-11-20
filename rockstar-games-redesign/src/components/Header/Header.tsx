import logo from '../../assets/images/logo.svg';
import arrow_drop_down from '../../assets/images/arrow_drop_down.svg'
import search from '../../assets/images/search.svg'
import login from '../../assets/images/login.svg'
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="bg-[#020202] p-[29px_140px] flex items-center place-content-between w-full">
            <div className='flex items-center gap-[47px]'>
                <img src={logo} alt="logo" className='w-[53px] h-[54px]' />
                <div className='flex gap-6'>
                    <div className='flex items-center gap-[5px]'>
                        <a href="#" className='text-[#FFFFFF]'>Jogos </a>
                        <img src={arrow_drop_down} alt="arrow_drop_down" className='cursor-pointer' />
                    </div>
                    <a href="#" className='text-[#FFFFFF]'>Loja</a>
                    <a href="#" className='text-[#FFFFFF]'>Ajuda</a>
                </div>
            </div>
            <div className='flex gap-10'>
                <Button btnText='Baixe o Launcher' className='p-[11px_16px]' />
                <div className='flex gap-6'>
                    <img src={search} alt="search" className='w-12 h-12 cursor-pointer' />
                    <img src={login} alt="login" className='w-12 h-12 cursor-pointer' />
                </div>
            </div>
        </div >
    )
}

export default Header