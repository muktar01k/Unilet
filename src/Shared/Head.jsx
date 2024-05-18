import House from '../assets/house.png'
import Hand from '../assets/hand.png'
import cut from '../assets/cut.png'
import Rotate from '../assets/rotate.png'
import Time from '../assets/time.png'


export const Heade = ({ word1, word2, word3, word4, word5, word6, word7, word8, word9 }) => {

    return (
        <div className=" ">
            <div className=" bg-Background bg-no-repeat h-[40rem] ">
                <div className="text-center lg:pt-[5rem] x:pt-[9rem] sam:pt-[8rem]">
                    <h1 className="font-bold text-[3rem] drop-shadow-xl sam:text-[3rem] ">{word1}</h1>
                    <p className="font-semibold text-[1rem] ">{word2}</p>
                    {/* <div className="w-[7rem] text-center bg-[black] text-[white]"> */}
                    <button className="mt-[1rem] w-[7rem] text-center bg-[black] text-[white] h-[2rem]" href="">{word3}</button>
                    {/* </div> */}
                </div>
            </div>

            <div className="">
                <p className="font-semibold text-[1.5rem] text-[#0FB3AF] text-center">{word4}</p>
                <p className="lg:text-center lg:w-[50rem] mt-[1rem] lg:ml-[15rem] xr:w-[410px] smm:w-[390px] sam:w-[360px] sam:text-center sam:font-semibold xr:text-center pro:text-center pro:w-[428px] x:text-center x:w-[374px] x:text-center">{word5}</p>
            </div>
            <div className="lg:flex lg:justify-center lg:gap-[8rem] pt-[3rem] xr:flex xr:flex-col xr:items-center xr:gap-[3rem] sam:flex sam:flex-col sam:items-center sam:gap-[3rem] pro:items-center x:flex x:flex-col x:items-center x:gap-[2rem]">

                <div className="w-[8rem] relative xr:text-center xr:bg-[white] xr:shadow-xl xr:w-[20rem] xr:pl-[5rem] xr:h-[17rem] xr:rounded-2xl sam:text-center sam:bg-[white] sam:shadow-xl sam:w-[19rem] sam:pl-[4rem] sam:h-[17rem] sam:rounded-2xl x:text-center x:bg-[white] x:shadow-xl x:w-[19rem] x:pl-[5rem] x:h-[17rem] x:rounded-2xl ">
                    <img className='static ' src={House} alt="" />
                    <img className='absolute top-[4rem] lg:left-[2.5rem] w-[3rem] xr:left-[8rem] x:left-[8rem] sam:left-[7rem]' src={Hand} alt="" />
                    <p className='w-[8rem] text-center'>{word6}</p>

                </div>
                <div className="w-[8rem] relative xr:text-center xr:bg-[white] xr:shadow-xl xr:w-[20rem] xr:pl-[5rem] xr:h-[19rem] xr:rounded-2xl sam:text-center x:text-center sam:bg-[white] sam:shadow-xl sam:w-[19rem] sam:pl-[4rem] sam:h-[17rem] sam:rounded-2xl x:bg-[white] x:shadow-xl x:w-[19rem] x:pl-[5rem] x:h-[19rem] x:rounded-2xl">
                    <img className='static ' src={House} alt="" />
                    <img className='absolute top-[4rem] lg:left-[2.5rem] w-[3rem] xr:left-[8rem]  x:left-[8rem] sam:left-[7rem]' src={cut} alt="" />
                    <p className='w-[8rem] text-center'>{word7}</p>
                </div>
                <div className="w-[8rem] relative xr:text-center xr:bg-[white] xr:shadow-xl xr:w-[20rem] xr:pl-[5rem] xr:h-[19rem] xr:rounded-2xl x:text-center sam:bg-[white] sam:shadow-xl sam:w-[19rem] sam:pl-[5rem] sam:h-[19rem] sam:rounded-2xl x:bg-[white] x:bg-[white] x:shadow-xl x:w-[19rem] x:pl-[5rem] x:h-[18rem] x:rounded-2xl">
                    <img className='static ' src={House} alt="" />
                    <img className='absolute top-[4rem] lg:left-[2.5rem] w-[3rem] xr:left-[8rem]  x:left-[8rem]  sam:left-[8rem]' src={Rotate} alt="" />
                    <p className='w-[8rem] text-center'>{word8}</p>
                </div>
                <div className="w-[8rem] relative xr:text-center xr:bg-[white] xr:shadow-xl xr:w-[20rem] xr:pl-[5rem] xr:h-[19rem] xr:rounded-2xl x:text-center sam:bg-[white] sam:shadow-xl sam:w-[19rem] sam:pl-[5rem] sam:h-[19rem] sam:rounded-2xl x:bg-[white] x:bg-[white] x:shadow-xl x:w-[19rem] x:pl-[5rem] x:h-[19rem] x:rounded-2xl">
                    <img className='static ' src={House} alt="" />
                    <img className='absolute top-[4rem] lg:left-[2.5rem] w-[3rem] xr:left-[8rem]  x:left-[8rem]  sam:left-[8rem]' src={Time} alt="" />
                    <p className='w-[8rem] text-center'>{word9}</p>
                </div>
            </div>
        </div>
    )
}


