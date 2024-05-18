


export const TabNumDetail = ({ Parag1, Parag2, Parag3, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, }) => {
    return (
        <div className="">
            <div className="lg:flex lg:justify-center lg:gap-[10rem] mt-[2rem] xr:flex xr:flex-col xr:justify-center xr:gap-[5rem] xr:ml-[5rem] x:flex x:flex-col x:justify-center x:gap-[5rem] x:ml-[4rem] sam:flex sam:flex-col sam:justify-center sam:ml-[4rem] sam:gap-[5rem]">
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg">
                    <img className='w-[15rem]' src={image1} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag1}</p>
                    <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                        <img className='w-[8rem] h-[2.5rem]' src={image2} alt="" />
                        <img className='w-[3rem]' src={image3} alt="" />
                    </div>
                </div>
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg ">
                    <img src={image4} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag2}</p>
                    <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                        <img className='w-[8rem] h-[2.5rem]' src={image5} alt="" />
                        <img className='w-[3rem]' src={image6} alt="" />
                    </div>
                </div>
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg ">
                    <img src={image7} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag3}</p>
                    <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                        <img className='w-[8rem] h-[2.5rem]' src={image8} alt="" />
                        <img className='w-[3rem]' src={image9} alt="" />
                    </div>
                </div>

            </div>
            <div className="flex justify-center gap-[10rem] mt-[2rem] xr:hidden x:hidden sam:hidden">
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg">
                    <img className='w-[15rem]' src={image10} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag1}</p>
                    <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                        <img className='w-[8rem] h-[2.5rem]' src={image11} alt="" />
                        <img className='w-[3rem]' src={image12} alt="" />
                    </div>
                </div>
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:hidden x:hidden sam:hidden">
                    <img src={image13} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag1}</p>
                    <div className="flex gap-[1rem] pt-[1rem] pl-[1rem]">.
                        <img className='w-[8rem] h-[2.5rem]' src={image14} alt="" />
                        <img className='w-[3rem]' src={image15} alt="" />
                    </div>
                </div>
                <div className="bg-white h-[15rem] w-[15rem] shadow-2xl rounded-lg xr:hidden x:hidden sam:hidden">
                    <img src={image16} alt="" />
                    <p className='font-semibold pl-[1rem]'>{Parag1}</p>
                    <div className="flex gap-[3rem] pt-[1rem] pl-[1rem]">
                        <img className='w-[8rem] h-[2.5rem]' src={image17} alt="" />
                        <img className='w-[3rem]' src={image18} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}