
export const TapNum = ({ text, className, ...props}) => {
    return (
        <div {...props} className={`rounded-[5rem] w-[2rem] h-[2rem] text-center  ${className}`}>{text}</div>
    )
}








