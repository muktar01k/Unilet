import RealHouse from '../assets/RealHoude1.png'
import Arrow from '../assets/Arrow2.png'
import Ranking from '../assets/Ranking1.png'
import RealHouse2 from '../assets/RealHouse2.png'
import RealHouse3 from '../assets/RealHouse3.png'
import RealHouse4 from '../assets/RealHouse4.png'
import RealHouse5 from '../assets/RealHouse5.png'
const Center = () => {

    return (
        <div className="">
            <div className="text-center xr:pt-[8rem] x:mt-[8rem] sam:mt-[8rem]">
                <p className="font-bold text-[#13BCB3] text-[2rem]">Recently Reviewed</p>
                <p className="font-semibold">More than 1000 clients who are happy with Us. Are You Next One?</p>
            </div>
            <marquee >
                <div className="xr:flex xr:h-[20rem] x:flex x:h-[20rem] sam:flex sam:h-[20rem]">
                    <div className="lg:flex justify-center gap-[10rem] xr:gap-[2rem] mt-[2rem] xr:flex x:gap-[2rem] x:flex sam:gap-[2rem] sam:flex">
                        <div className="bg-white h-[15rem] w-[15rem] xr:w-[15rem] shadow-2xl rounded-lg">
                            <img className='w-[15rem]' src={RealHouse} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:w-[15rem]">
                            <img src={RealHouse2} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:w-[15rem]">
                            <img src={RealHouse3} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center gap-[10rem] xr:gap-[3rem] mt-[2rem] xr:flex xr:pl-[3rem] x:gap-[3rem] x:flex x:pl-[3rem] sam:gap-[3rem] sam:pl-[3rem]">
                        <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:w-[15rem] x:w-[15rem]">
                            <img className='w-[15rem]' src={RealHouse4} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:w-[15rem] x:w-[15rem]">
                            <img src={RealHouse5} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>
                        <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:w-[15rem] x:w-[15rem]">
                            <img src={RealHouse3} alt="" />
                            <p className='font-semibold pl-[1rem] xr:pl-[0.5rem]'>123 That Road Bournemouth</p>
                            <div className="flex gap-[3rem] xr:gap-[1rem] pt-[1rem] pl-[1rem]">
                                <img className='w-[8rem] h-[2.5rem]' src={Ranking} alt="" />
                                <img className='w-[3rem]' src={Arrow} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </marquee>
            <div className="bg-[black] w-[10rem] h-[3rem] ml-[35rem] mt-[3rem] rounded-xl text-[white] text-center pt-[0.5rem] xr:ml-[8rem] x:ml-[8rem] sam:ml-[7rem]">

                <button>View All</button>
            </div>
        </div>
    )
}

export default Center