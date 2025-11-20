type ButtonProps = {
    btnText: string
}

const Button = ({ btnText }: ButtonProps) => {
    return (
        <div>
            <button className='bg-[#FCAF17] hover:bg-[#fca017c5] transition-colors rounded-lg p-[15px_48px] cursor-pointer text-[20px]'>{btnText}</button>
        </div>
    )
}

export default Button