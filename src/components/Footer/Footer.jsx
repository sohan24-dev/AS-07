
import Image from 'next/image';
import Ins from '../../assets/instagram.png'
import face from '../../assets/facebook.png'
import twi from '../../assets/twitter.png'



const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <div className="container mx-auto text-center text-white space-y-4 py-8">
                <h2 className="text-5xl font-bold ">KeenKeeper</h2>
                <p className="">Your personal shelf of meaningful connections. Browse, tend,and nurture the relationships that matter most</p>
                <p>Social Links</p>
                <div className='flex gap-2.5 justify-center'>
                    <Image
                        src={Ins}
                        alt="My Photo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src={face}
                        alt="My Photo"
                        width={30}
                        height={30}
                    />
                    <Image
                        src={twi}
                        alt="My Photo"
                        width={30}
                        height={30}
                    />
                </div>
                <hr /> 
                <div className='flex flex-col justify-between sm:flex-row items-center space-y-4 sm:space-y-0'>
                    <p>@ 2026 keenKeeper. All rights reserved </p>
                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;