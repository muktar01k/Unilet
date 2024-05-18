import { Link } from "react-router-dom"
import NavLogo from '../assets/image 1.png'
import Ham from "../assets/hamburger.png"
import { useState } from "react"


export const NavHeader = ({ text1, text2, text3, text4, text5 }) => {

    const [toggleBurger, setToggleBurger] = useState(false)

    function Hamburger() {
        setToggleBurger(!toggleBurger)
    }


    return (
        <nav className='flex lg:gap-[15rem] justify-center h-[4rem] pt-[1rem] xr:gap-[5rem] xr:w-[414px] sam:w-[360px] sam:gap-[4rem] pro:w-[428px] x:gap-[5rem] x:justify-center x:w-[375px] smm:w-[390px]'>
            <div className="w-[7rem]">
                <Link to='/'><img src={NavLogo} alt="" /></Link>
            </div>
            <div className="">
                <div onClick={Hamburger} className="w-[3rem] xr:ml-[7rem] x:ml-[7rem] sam:ml-[6rem]">
                    <img src={Ham} alt="" />
                </div>
                {toggleBurger && (
                    <div className="xr:bg-[#13BCB3]  xr:h-[18rem] sam:h-[16rem] sam:bg-[#13BCB3] xr:w-[10rem] sam:w-[9rem] sam:rounded-[0.5rem] xr:rounded-[0.5rem] x:bg-[#13BCB3] smm:h-[17rem] smm:bg-[#13BCB3] x:rounded-[0.5rem] smm:mt-[0.3rem]">
                        <div className="font-semibold flex gap-[2rem] pt-[0.5rem] xr:flex xr:flex-col x:flex x:flex-col sam:flex sam:flex-col sam:gap-[1.5rem]">
                            <Link to='/'>{text1}</Link>
                            <Link to='/Review'>{text2}</Link>
                            <Link to='/ReadReviews'>{text3}</Link>
                            <Link to='/Articles'>{text4}</Link>
                            <div className="w-[6rem] h-[2rem] bg-[black] text-[white] text-center rounded-[0.5rem] mt-[0.5rem]">
                                <button>{text5}</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>

        </nav>


    )
}









