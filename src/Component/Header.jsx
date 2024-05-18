import { HeadDetails } from "../Shared/Data"
import { Heade } from "../Shared/Head"

const Header = () => {

    return (
        <div className="xr:w-[414px] xr:pt-[2rem] x:w-[375px] smm:w-[390px] pro:w-[428px] sam:w-[360px]">

            {
                HeadDetails.map((HeadDetail) => (<Heade {...HeadDetail} />))
            }

        </div>
    )
}

export default Header