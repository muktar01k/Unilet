import Logo from '../assets/image 1.png'
import Call from '../assets/Call.png'
import Email from '../assets/Email.png'
import Location1 from '../assets/Location.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'
import Facebook from '../assets/Facebook.png'

const Footer = () => {

    return (
        <footer className="xr:w-[414px] pro:w-[428px] x:w-[375px] smm:w-[390px] sam:w-[360px] lg:w-[1345px]">
            <div className="lg:h-[22rem] flex bg-[#FBFBFB] justify-center lg:pt-[2rem] lg:gap-[5rem] xr:gap-[2rem] xr:flex xr:flex-col xr:h-[45rem] xr:pt-[3rem] xr:pt-[2rem] x:gap-[2rem] x:flex x:flex-col x:h-[45rem] x:pt-[3rem] smm:mt-[2rem] sam:flex sam:flex-col sam:h-[45rem] sam:pt-[3rem] lg:mt-[2rem]">
                <div className="w-[15rem] xr:w-[5em] x:w-[9rem] sam:w-[8rem]">
                    <img className='xr:ml-[10rem] x:ml-[8rem] sam:ml-[7rem]' src={Logo} alt="" />
                    <p className='w-[15rem] mt-[1rem] text-left xr:text-center xr:ml-[5rem] x:text-center x:ml-[5rem] sam:ml-[5rem]'>we're shutting the door on second-rate student housing</p>
                </div>
                <div className="xr:flex xr:justify-center xr:gap-[1.5rem] pro:gap-[1.9rem] x:flex x:justify-center x:gap-[1rem] sam:flex sam:justify-center sam:gap-[1rem] lg:flex lg:gap-[4rem]">
                    <div className="pt-[1rem]">
                        <p className='font-bold text-[#13BCB3] text-xl'>Qulick Links</p>
                        <p className='pt-[0.5rem]'>Reaview a property</p>
                        <p className='pt-[0.5rem]'>Articles</p>
                        <p className='pt-[0.5rem]'>About us</p>
                        <p className='pt-[0.5rem]'>Contact Us</p>
                        <p className='pt-[0.5rem]'>Terms & Conditions</p>
                        <p className='pt-[0.5rem]'>Privacy Policy</p>
                    </div>
                    <div className="pt-[1rem]">
                        <p className='font-bold text-[#13BCB3] text-xl'>Stay In Touch</p>
                        <div className="flex gap-[0.5rem] pt-[0.8rem]">
                            <img className='w-[1rem] h-[1rem] ' src={Call} alt="" />
                            <p>012 9638595661</p>
                        </div>
                        <div className="flex gap-[0.5rem] pt-[0.8rem]">
                            <img className='w-[1.5rem] h-[1.5rem] pt-[0.5rem]' src={Email} alt="" />
                            <p className='pt-[0.1rem]'>info@uniletadvisor.com</p>
                        </div>
                        <div className="flex gap-[0.5rem] pt-[0.8rem]">
                            <img className='w-[1.6rem] h-[1.9rem] pt-[0.5rem]' src={Location1} alt="" />
                            <p className='pt-[0.4rem] w-[12rem]'>10 Archibald St TooWoomba QLD 4350</p>
                        </div>
                    </div>
                </div>
                <div className="pt-[1rem] xr:ml-[2rem] x:ml-[2rem]">
                    <p className='font-bold text-[#13BCB3] text-xl'>Connect With </p>
                    <div className="flex gap-[1rem] pt-[0.9rem]">
                        <img className='w-[1rem]' src={Facebook} alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className="flex gap-[1rem] pt-[0.9rem]">
                        <img className='w-[1rem]' src={Instagram} alt="" />
                        <p>Instagram</p>
                    </div>
                    <div className="flex gap-[1rem] pt-[0.9rem]">
                        <img className='w-[1rem]' src={Twitter} alt="" />
                        <p>Twitter</p>
                    </div>
                </div>

            </div>
            <div className="">
                <hr className='w-[60rem] bg-[grey] text-center lg:ml-[15rem] xr:w-[20rem] xr:ml-[3rem] x:w-[20rem] x:ml-[2rem] sam:w-[20rem] sam:ml-[1rem]' />
                <p className='text-center'>Unilet Advise @ 2024. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer