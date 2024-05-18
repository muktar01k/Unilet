import Woman from '../assets/woman.png'
import Location from '../assets/locationSvg.png'
import Arrow from '../assets/arrowSvg.png'
import Line1 from '../assets/line1.png'
import BlueBg from '../assets/blueBG.png'
import Star from '../assets/star.png'
import Company from '../assets/companyDiv.png'
import Line2 from '../assets/line2.png'
import Phone from '../assets/phoneDetail.png'
import Like from '../assets/line.png'

const Middle = () => {

    return (
        <div className="bg-[#FBFBFB] w-[60rem] h-[89rem] xr:h-[100rem] sam:h-[100rem] x:h-[100rem] lg:ml-[13rem] mt-[5rem] rounded-xl pt-[2rem] xr:w-[23rem] xr:ml-[1.5rem] sam:w-[20rem] sam:ml-[1.2rem] pro:ml-[1.8rem] x:w-[21rem] x:ml-[1.5rem] smm:ml-[1.7rem]">
            <p className="text-[#13BCB3] font-bold text-center text-[2rem]">How It Works</p>
            <p className='text-center xr:w-[22rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velitt</p>

            <div className="flex lg:gap-[10rem] justify-center pt-[3rem]  xr:flex xr:flex-col xr:gap-[3rem] sam:flex sam:flex-col sam:gap-[3rem] x:flex x:flex-col x:gap-[3rem] ">
                <img className='w-[20rem] xr:w-[20rem] xr:ml-[2rem] x:w-[19rem] x:ml-[1.3rem] sam:w-[18rem] sam:ml-[1rem]' src={Woman} alt="" />
                <div className="flex lg:gap-[1rem] relative xr:gap-[2rem] xr:flex xr:justify-center xr:text-right sam:gap-[2rem] sam:flex sam:justify-center x:flex x:justify-center x:text-right">
                    <img className='w-[2rem] h-[2rem] static mt-[0.5rem] mr-[0.7rem]' src={Location} alt="" />
                    <img className='absolute right-[16rem] ' src={BlueBg} alt="" />
                    <div className="sam:text-right sam:mr-[2rem]">
                        <p className='font-bold text-[#13BCB3]'>Search For Address</p>
                        <p className='w-[15rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur tempora doloribus exercitationem ut!</p>
                        <button className='bg-[#13BCB3] text-[white] w-[8rem] flex gap-[1rem] justify-center h-[2rem] rounded-sm pt-[0.2rem] mt-[0.5rem] xr:ml-[7rem] x:ml-[7rem] sam:ml-[7rem]'>Learn More <img className='pt-[0.5rem]' src={Arrow} alt="" /></button>
                    </div>
                </div>

            </div>
            <div className="lg:ml-[13rem] lg:w-[30rem] xr:w-[15rem] xr:mt-[1rem] xr:ml-[5rem] x:w-[15rem] x:ml-[4rem] sam:w-[15rem] sam:ml-[4rem]">
                <img src={Line1} alt="" />
            </div>

            <div className="flex justify-center gap-[4rem]">
                <div className=" pl-[2rem] lg:text-right xr:text-left xr:mt-[1rem] x:text-left x:mt-[1rem] x:ml-[2rem] sam:text-left sam:mt-[1rem] sam:ml-[2rem]">
                    <p className='font-bold text-[#13BCB3]'>Add Your Review</p>
                    <p className='w-[15rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur tempora doloribus exercitationem ut!</p>
                    <button className='bg-[#13BCB3] text-[white] w-[8rem] flex gap-[1rem] justify-center h-[2rem] rounded-sm pt-[0.2rem] mt-[0.5rem]'>Learn More <img className='pt-[0.5rem]' src={Arrow} alt="" /></button>
                </div>
                <div className="relative ">
                    <img className='static' src={BlueBg} alt="" />
                    <img className='absolute top-[1rem] left-[0.7rem]' src={Star} alt="" />
                </div>
                <div className="w-[20rem]">
                    <img src={Company} alt="" />
                </div>
            </div>
            <div className="ml-[13rem] w-[30rem] xr:w-[15rem] xr:ml-[4rem] xr:mt-[1rem] x:w-[15rem] x:ml-[3rem] x:mt-[1rem] sam:w-[15rem] sam:ml-[3rem] sam:mt-[1rem]" >
                <img src={Line2} alt="" />
            </div>
            <div className="flex lg:gap-[4rem] justify-center xr:flex xr:flex-col xr:gap-[3rem] xr:ml-[2rem] x:flex x:flex-col x:gap-[3rem] sam:flex sam:flex-col sam:gap-[3rem] sam:ml-[0.5rem]">
                <div className="w-[20rem] ">
                    <img src={Phone} alt="" />
                </div>
                <div className="relative">
                    <img className='static top-[1rem]' src={BlueBg} alt="" />
                    <img className='absolute top-[1rem] left-[1rem]' src={Like} alt="" />

                </div>
                <div className="">
                    <p className='font-bold text-[#13BCB3] '>Share your Review</p>
                    <p className='w-[15rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur tempora doloribus exercitationem ut!</p>
                    <button className='bg-[#13BCB3] text-[white] w-[8rem] flex gap-[1rem] justify-center h-[2rem] rounded-sm pt-[0.2rem] mt-[0.5rem]'>Learn More <img className='pt-[0.5rem]' src={Arrow} alt="" /></button>
                </div>
            </div>
            <button className='bg-[black] text-[white] w-[7rem] h-[3rem] rounded-xl ml-[30rem] mt-[5rem] xr:ml-[8rem] x:ml-[8rem] sam:ml-[7rem]'>Get Started</button>
        </div>
    )
}

export default Middle