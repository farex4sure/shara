import React, { useState, useContext } from 'react';
import { menuLinks, newLinks } from '../Data';
import UserImg from '../assets/userImage.png';
import Logo from '../assets/logo-sm.png';
import { AuthContext } from '../context/AuthContext';
// //hooks
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { user } = useContext(AuthContext);
	const name = user?.user?.name;
	const { logout } = useLogout();
	return (
		<nav
			className={`w-full left-0 top-0 z-[999] absolute bg-white shadow-md text-white}`}
		>
			<div className="flex items-center justify-between">
				<div className="mx-7">
					<a href="/">
						<img className="w-16" src={Logo} alt="" />
					</a>
					{/* <h4
            className={`text-lg md:text-3xl uppercase font-bold  ${
              open ? "text-green-500" : "text-green-700"
            } text-blue-600`}
          >
            Sha<span className="text-green-500">ra</span>
          </h4> */}
				</div>
				<div
					onClick={() => setOpen(!open)}
					className={` ${
						open ? 'text-gray-900' : 'text-gray-100'
					} cursor-pointer text-3xl  m-5`}
				>
					<ion-icon name="menu" className="text-[#228e01] h-8 w-8"></ion-icon>
				</div>

				<div
					className={`text-white fixed overflow-scroll w-2/3 md:w-2/6 shadow-l-md min-h-screen px-7 py-2 font-medium bg-gray-50 top-0 duration-300 ${
						open ? 'right-0' : 'right-[-100%]'
					}`}
				>
					<ul className="flex flex-col justify-around gap-5 py-2 text-lg">
						<div
							onClick={() => setOpen(!open)}
							className={` ${
								open ? 'text-green-900' : 'text-green-100'
							} cursor-pointer text-3xl flex items-center justify-start`}
						>
							<ion-icon
								name="close-outline"
								className="text-[#228e01] h-6 w-6 md:h-8 md:h-8"
							></ion-icon>
						</div>
						{user ? (
							<>
								<div className="mt-px flex items-center justify-start">
									<div className="flex items-center justify-center pb-1">
										<img
											src={user?.user?.image || UserImg}
											alt=""
											className="w-14 h-14 rounded-full"
										/>
										<div className="p-1 text-green-500">
											<h5 className="text-lg font-bold capitalize">
												{name?.length > 14
													? `${name?.substring(0, 15)}".."`
													: name}
											</h5>
											<p className="text-lg">
												Bal: &#8358;{user?.wallet?.balance}
											</p>
										</div>
									</div>
									<hr className="bg-black" />
								</div>
								<div className="space-y-3 devide-y-1">
									{menuLinks.map((menu, i) => (
										<li
											onClick={() => setOpen(false)}
											key={i}
											className="px-2 md:px-6 text-green-600 rounded-xl hover:bg-green-500 hover:text-white"
										>
											<a
												href={menu?.link}
												className="flex p-2 sm:p-3 place-items-center gap-3 space-x-2"
											>
												<ion-icon
													name={menu.icon}
													className=" h-8 w-8 md:h-10 md:w-10 m-2"
												></ion-icon>
												<p>{menu?.name}</p>
											</a>
										</li>
									))}
									<li
										onClick={() => logout()}
										className="px-2 md:px-6 text-red-500 hover:bg-red-400 hover:text-white rounded-xl"
									>
										<p
											onClick={() => setOpen(false)}
											className="flex p-3 place-items-center gap-3 space-x-2"
										>
											<ion-icon
												name="log-out"
												className=" h-8 w-8 md:h-10 md:w-10 m-2"
											></ion-icon>
											<span>Log out</span>
										</p>
									</li>
								</div>
							</>
						) : (
							<ul className="p-1 text-green-500 h-full flex flex-col justify-around gap-10 py-2 text-lg">
								{newLinks.map((menu, i) => (
									<li
										onClick={() => setOpen(false)}
										key={i}
										className="px-2 md:px-6 text-green-600 rounded-xl hover:bg-green-500 hover:text-white"
									>
										<Link
											to={menu?.link}
											className="flex p-2 sm:p-3 place-items-center gap-3 space-x-2"
										>
											<ion-icon
												name={menu.icon}
												className=" h-8 w-8 md:h-10 md:w-10 m-2"
											></ion-icon>
											<p>{menu?.name}</p>
										</Link>
									</li>
								))}
							</ul>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
