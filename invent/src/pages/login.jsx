import loginImage from '../assets/iventory_img_login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Login() {
    return (
        <>
        <div className="login_page min-w-screen min-h-screen bg-gradient-to-b from-blue-100 to-white">
            {/* <div className="login_image">
                <img src={loginImage} alt="" />
            </div> */}
            <div className="login_card rounded-2xl bg-white items-center p-5 m-2 border border-[#64748B]">
                <p className="font-bold text-[32px]">StockFlowICT</p>
                <p className="text-[#64748B]">Inventory Management System</p>
                <div className="login_form flex flex-col gap-3 mt-5 ">
                    <label htmlFor="username">Email / Username</label>
                    <input className="border-0 border-b-2 border-gray-400 focus:outline-none" type="text" placeholder='Enter your email or username' />
                    <label htmlFor="password">Password</label>
                    <input className="border-0 border-b-2 border-gray-400 focus:outline-none" type="text" placeholder='Enter your password' />
                    <fieldset className='fieldset bg-transparent border-none rounded-box flex w-64 border p-4 '>
                        <label className='label text-[#000000] text-[14px]'>
                            <input type="checkbox" className='checkbox'/>
                            Remember me
                        </label>
                    </fieldset>
                    <button className="!bg-[#2563EB] text-[#ffffff]">Login</button>

                    <div className="flex mt-3 m-auto text-[12px] items-center text-[#64748B]"> <FontAwesomeIcon icon={faCopyright} />itcsmkn5bdg</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login