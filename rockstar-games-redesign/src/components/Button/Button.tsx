
type ButtonProps = {
    btnText: string;
    className?: string;
};

const Button = ({ btnText, className = "" }: ButtonProps) => {
    return (
        <button className={`bg-[#FCAF17] hover:bg-[#fca017c5] transition-colors rounded-lg cursor-pointer text-[20px] ${className}`}>{btnText}</button>
    );
};

export default Button;
