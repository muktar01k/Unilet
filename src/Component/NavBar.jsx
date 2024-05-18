import { Link } from 'react-router-dom'
import NavLogo from '../assets/image 1.png'
import { NavDetails } from '../Shared/Data'
import { NavHeader } from '../Shared/Nav'

const NavBar =()=>{

    return(
<div className="fixed z-10 bg-[white]">

    {
        NavDetails.map((NavDetail)=>(<NavHeader {...NavDetail}/>))
    }


       </div>
    )
}

export default NavBar