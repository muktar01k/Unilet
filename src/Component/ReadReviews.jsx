import { useState } from "react"
import NavBar from "./NavBar"
import { TapNum } from "./TabNum"
import RealHouse from '../assets/RealHoude1.png'
import Arrow from '../assets/Arrow2.png'
import Ranking from '../assets/Ranking1.png'
import RealHouse2 from '../assets/RealHouse2.png'
import RealHouse3 from '../assets/RealHouse3.png'
import RealHouse4 from '../assets/RealHouse4.png'
import RealHouse5 from '../assets/RealHouse5.png'
import DivHouse1 from '../assets/divhouse.png'
import DivHouse2 from '../assets/divhouse2.png'
import DivHouse3 from '../assets/divhouse3.png'
import DivHouse4 from '../assets/divhouse4.png'
import DivHouse5 from '../assets/divhouse5.png'
import { TabNumDetail } from "./TabNumDetail"
import Footer from "./Footer"



const ReadReviews = () => {
    const [activeNum, setActiveNum] = useState(1)

    function toggleNum(activeNum) {
        setActiveNum(activeNum)

    }


    return (
        <div className="">
            <NavBar />
            <div>
                <p className="text-[#13BCB3] text-center lg:pt-[6rem] text-[3.5rem] font-semibold xr:pt-[7rem] x:pt-[6rem] sam:pt-[6rem]">Read Reviews</p>
            </div>
            <div className="flex justify-center lg:gap-[20rem] xr:gap-[2rem] xr:flex xr:flex-col x:flex x:flex-col sam:flex sam:flex-col ">
                <div className=" x:ml-[3rem] xr:ml-[3rem] sam:ml-[2rem]">
                    <p>Search for a specific Uk address or town:</p>
                    <input className="lg:w-[20rem] mt-[1rem] border-2 border-[black] p-[0.2rem] xr:w-[18rem] xr:p-[0.5rem] sam:p-[0.3rem]" placeholder="start typing the address of thr property" type="text" />
                    <button className="w-[6rem] bg-black text-[white] h-[2rem]" htmlFor="">search</button>
                </div>
                <div className="pt-[1rem] x:ml-[3rem] xr:ml-[3rem] sam:ml-[2rem]">
                    <label htmlFor="">sort by result:</label><br />
                    <input className="lg:w-[20rem] mt-[1rem] border-2 border-[black] p-[0.2rem] xr:w-[18rem] xr:p-[0.5rem] sam:p-[0.3rem]" placeholder="most recent" type="text" />
                    <button className="w-[6rem] bg-black text-[white] h-[2rem]" htmlFor="">search</button>
                </div>
            </div>
            <div className="mt-[3rem] xr:flex xr:flex-col x:flex x:flex-col sam:flex sam:flex-col">
                {activeNum === 1 && <TabNumDetail
                    Parag1="123 That Road Bournemouth"
                    image1={RealHouse} image2={Ranking} image3={Arrow}
                    Parag2="123 That Road Bournemouth"
                    image4={RealHouse4} image5={Ranking} image6={Arrow}
                    Parag3="123 That Road Bournemouth"
                    image7={RealHouse5} image8={Ranking} image9={Arrow}

                    Parag4="123 That Road Bournemouth"
                    image10={DivHouse1} image11={Ranking} image12={Arrow}
                    Parag5="123 That Road Bournemouth"
                    image13={DivHouse2} image14={Ranking} image15={Arrow}
                    Parag6="123 That Road Bournemouth"
                    image16={DivHouse3} image17={Ranking} image18={Arrow}
                     
                />}



                {activeNum === 2 && <TabNumDetail
                    Parag1="123 That Road Bournemouth"
                    image1={RealHouse3} image2={Ranking} image3={Arrow}
                    Parag2="123 That Road Bournemouth"
                    image4={DivHouse2} image5={Ranking} image6={Arrow}
                    Parag3="123 That Road Bournemouth"
                    image7={DivHouse1} image8={Ranking} image9={Arrow}

                    Parag4="123 That Road Bournemouth"
                    image10={RealHouse5} image11={Ranking} image12={Arrow}
                    Parag5="123 That Road Bournemouth"
                    image13={RealHouse2} image14={Ranking} image15={Arrow}
                    Parag6="123 That Road Bournemouth"
                    image16={RealHouse} image17={Ranking} image18={Arrow} />}


                {activeNum === 3 && <TabNumDetail
                     Parag1="123 That Road Bournemouth"
                     image1={RealHouse2} image2={Ranking} image3={Arrow}
                     Parag2="123 That Road Bournemouth"
                     image4={DivHouse2} image5={Ranking} image6={Arrow}
                     Parag3="123 That Road Bournemouth"
                     image7={DivHouse5} image8={Ranking} image9={Arrow}
 
                     Parag4="123 That Road Bournemouth"
                     image10={RealHouse5} image11={Ranking} image12={Arrow}
                     Parag5="123 That Road Bournemouth"
                     image13={RealHouse3} image14={Ranking} image15={Arrow}
                     Parag6="123 That Road Bournemouth"
                     image16={RealHouse4} image17={Ranking} image18={Arrow} />}
            </div>
            <div className="flex gap-[1rem] justify-center mt-[1rem]">
                <div className="flex gap-5 mt-[1rem]">
                    <TapNum
                        text="1"
                        onClick={() => toggleNum(1)}
                        className={activeNum === 1 && "bg-[#13BCB3] text-white border-none"}
                    />
                    <TapNum
                        text="2"
                        onClick={() => toggleNum(2)}
                        className={activeNum === 2 && "bg-[#13BCB3] text-white border-none"}
                    />
                    <TapNum
                        text="3"
                        onClick={() => toggleNum(3)}
                        className={activeNum === 3 && "bg-[#13BCB3] text-white border-none"}
                    />
                </div>
                {/* <div className="mt-[2rem]">
                    {activeNum === 1 && <TabNumDetail parag1="123 That Road Bournemouth" image1={RealHouse} image2={Ranking} image3={Arrow}  image4={RealHouse4} image5={Ranking} image6={Arrow}/>}
                    {activeNum === 2 && <TabNumDetail parag1="123 That Road Bournemouth" image1={RealHouse2} image2={Ranking} image3={Arrow} />}
                    {activeNum === 3 && <TabNumDetail parag1="123 That Road Bournemouth" image1={RealHouse3} image2={Ranking} image3={Arrow} />}
                </div> */}
            </div>
            <div className="mt-[5rem]">
                <Footer />
            </div>
        </div>
    )
}

export default ReadReviews