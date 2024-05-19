import NavBar from "./NavBar"
import Bgg from '../assets/ReadBg.png'
import RealHouse from '../assets/RealHoude1.png'
import Arrow from '../assets/Arrow2.png'
import Ranking from '../assets/Ranking1.png'
import RealHouse2 from '../assets/RealHouse2.png'
import RealHouse3 from '../assets/RealHouse3.png'
import RealHouse4 from '../assets/RealHouse4.png'
import RealHouse5 from '../assets/RealHouse5.png'
import Footer from "./Footer"

const Review = () => {
    return (
        <div className="">
            <NavBar />
            <div className="bg-Bgg bg-no-repeat h-[40rem] lg:pt-[13rem] xr:pt-[13rem] x:pt-[11rem] sam:pt-[11rem] ">
                <p className="font-bold text-[3rem] text-center text-[#13BCB3] xr:text-[2rem]">Review a property that you've lived in</p>
                <p className="text-center text-xl">(or still living)</p>
                <div className="flex justify-center mt-[2rem] xr:flex xr:mt-[6rem] x:mt-[4rem]">
                    <label htmlFor="">StreetAddress:</label>
                    <input className="w-[30rem] p-[0.5rem] ml-[1rem] xr:w-[15rem] x:w-[14rem] sam:w-[10rem]" placeholder="start typing the address of the property" type="text" />
                    <p className="text-[white] bg-[#3C3C3B] w-[7rem] text-center">Search</p>
                </div>
            </div>

            <div className="">
                <p className="text-center text-[#13BCB3] font-bold text-4xl pt-[2rem]">Here's Some Examples Of reviews</p>
                <p className="text-center">More than 10000 clients who are happy with Us.Are you next One?</p>
                <div className="">

                 <marquee>
                    <div className="xr:flex xr:h-[20rem] x:flex x:h-[20rem]">
                    <div className="flex justify-center lg:gap-[5rem] mt-[3rem] xr:gap-[2rem] mt-[2rem] xr:flex ">
                        <div className="bg-white lg:h-[15rem] lg:w-[15rem] shadow-2xl rounded-lg xr:w-[15rem]">
                            <img className='w-[15rem]' src={RealHouse} alt="" />
                            <p className='font-semibold pl-[1rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white lg:h-[15rem] lg:w-[15rem] shadow-2xl rounded-lg xr:w-[17rem]">
                            <img src={RealHouse2} alt="" />
                            <p className='font-semibold pl-[1rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white lg:h-[15rem] lg:w-[15rem] shadow-2xl rounded-lg xr:w-[17rem]">
                            <img src={RealHouse3} alt="" />
                            <p className='font-semibold pl-[1rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                    </marquee>
                   <div className="bg-[black] w-[10rem] h-[3rem] ml-[38rem] mt-[3rem] rounded-xl text-[white] text-center pt-[0.5rem]  xr:ml-[8rem] sam:ml-[7rem]">
                    <button>View All</button>
                   </div>
                </div>
            </div>
            <div className="mt-[1rem]">
            <Footer/>
            </div>
        </div>
    )
}

export default Review