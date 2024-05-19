import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import ArticlePc from "../assets/ArticlePc.png"
import Eli from "../assets/Eli.png"
import Article2 from "../assets/Eli2.png"
import Article3 from "../assets/Eli3.png"
import Article4 from "../assets/Eli4.png"
import Article5 from "../assets/Eli5.png"
import Article6 from "../assets/Eli6.png"
import Footer from "./Footer"




export const Articles = () => {


    return (
        <div className="">
            <div className="">
                <NavBar />
            </div>
            <div className="bg-Bgg2 bg-no-repeat h-[30rem] pt-[4rem] smm:pt-[10rem] sam:pt-[10rem]">
                <p className="font-bold text-center text-[white] text-[3rem]">Our Articles</p>
                <div className="font-semibold text-center text-[white] mt-[1rem]">
                    <Link to='/'>Home </Link> /<Link to='/InnerArticles'>Articles</Link>
                </div>
            </div>


            <div className=" lg:grid lg:grid-cols-3 items-center lg:pl-[7rem] smm:flex smm:flex-col smm:justify-center smm:w-[22rem] smm:gap-[2rem] smm:pl-[3rem] sam:flex sam:flex-col sam:justify-center sam:w-[22rem] sam:gap-[2rem] sam:pl-[1rem]">

                <div className="w-[20rem] ">
                    <img src={ArticlePc} alt="" />
                    <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                    <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                    <div className="flex pt-[1rem] gap-[0.5rem]">
                        <img src={Eli} alt="" />
                        <p className="text-[grey]">SnowDev</p>
                    </div>
                </div>


                <div className="">
                    <div className="w-[20rem] ">
                        <img src={Article2} alt="" />
                        <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                        <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                        <div className="flex pt-[1rem] gap-[0.5rem]">
                            <img src={Eli} alt="" />
                            <p className="text-[grey]">SnowDev</p>
                        </div>
                    </div>
                </div>



                <div className="">
                    <div className="w-[20rem] ">
                        <img src={Article3} alt="" />
                        <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                        <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                        <div className="flex pt-[1rem] gap-[0.5rem]">
                            <img src={Eli} alt="" />
                            <p className="text-[grey]">SnowDev</p>
                        </div>
                    </div>
                </div>

                <div className="pt-[2rem] flex gap-[5rem]">

                    <div className="">
                        <div className="w-[20rem] ">
                            <img src={Article4} alt="" />
                            <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                            <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                            <div className="flex pt-[1rem] gap-[0.5rem]">
                                <img src={Eli} alt="" />
                                <p className="text-[grey]">SnowDev</p>
                            </div>
                        </div>
                    </div>



                    <div className="">
                        <div className="w-[20rem] ">
                            <img src={Article5} alt="" />
                            <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                            <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                            <div className="flex pt-[1rem] gap-[0.5rem]">
                                <img src={Eli} alt="" />
                                <p className="text-[grey]">SnowDev</p>
                            </div>
                        </div>
                    </div>



                    <div className="">
                        <div className="w-[20rem] ">
                            <img src={Article6} alt="" />
                            <p className="font-bold pt-[1rem] text-[#3C3C3B]">Lorem is simply a dommy</p>
                            <p className="text-left w-[20rem] text-[grey]">Lorem Ipsum is simply text of the printing and type settings industry.pecimen variation of assets of Lorem Ipsum available</p>
                            <div className="flex pt-[1rem] gap-[0.5rem]">
                                <img src={Eli} alt="" />
                                <p className="text-[grey]">SnowDev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          

            <Footer/>
        </div>
    )
}