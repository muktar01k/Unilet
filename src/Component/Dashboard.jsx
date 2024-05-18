import Center from "./Center"
import Downpart from "./Downpart"
import Footer from "./Footer"
import Header from "./Header"
import Middle from "./Middle"
import NavBar from "./NavBar"

const Dashboard =()=>{
    return(
        <div className="relative">
          <NavBar/>
          <Header/>
         <Middle/>
         <Center/>
         <Downpart/>
         <Footer/>
        </div>
    )
}

export default Dashboard