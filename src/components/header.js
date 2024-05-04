import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { info } from "../../info";
const Header = () => {
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        window.location.href=info.cvURL;
    };
    const handleLogoClick = async (e) => {
        e.preventDefault();
        navigate('/about')
    };

    return (
        <div className="flex justify-between bg-steel-100 shadow-lg sm:bg-dark lg:bg-slate-800">
            <div className="flex w-1/12 hover:rotate-180 transition duration-300 ease-in-out cursor-pointer">
                <img className="w-6/12 m-auto rounded-full" src={logo} alt="My Website Logo" onClick={handleLogoClick} />

            </div>
            <div className="flex items-center">
                <ul className="flex p-4">
                    <li className="px-3 text-slate-400 font-bold">Open to Coffee: {"✅"}</li>
                    <li className="px-3 text-slate-400 font-bold">
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isPending ? "underline-offset-4" : isActive ? "underline-offset-4 to-blue-600" : ""}>About Me</NavLink>
                    </li>
                    <li className="px-3 text-slate-400 font-bold">
                        <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li className="px-3 text-slate-400 font-bold">
                        <NavLink to="/expeience">Experience</NavLink>
                    </li>
                    <li className="px-3 text-slate-400 font-bold">
                        <NavLink onClick={(e)=>handleClick(e)}>Profile</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
