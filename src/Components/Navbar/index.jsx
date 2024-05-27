import {useEffect, useState} from 'react';
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';
import './style.css';

const Navbar = () => {

	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const context = useContext(ShoppingCartContext);

	const activeStyle = 'underline underline-offset-4';

	const closeMenu = () =>{
		setIsOpenMenu(false)
	}

	const openMenu = () =>{
		setIsOpenMenu(true)
	}

	useEffect(()=>{
		const showNavbar = () =>{
			if(window.innerWidth >= 640){
				openMenu()
			}else if(window.innerWidth < 640){
				closeMenu()
			}

			
		}
		window.addEventListener("resize", showNavbar)

		return() => {
			window.removeEventListener("resize", showNavbar)
		}
	},[])

	return(
		<nav className='bg-gray-200 flex justify-between items-center gap-3 fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>

			<div>
				<ul className='flex items-center gap-3'>
					<li className='font-semibold text-xl'>
						<NavLink 
							to='/'
							onClick={() => context.setSearchByCategory('')}>
								
							Shopi
						</NavLink>
					</li>	
					{/*<li>
						<NavLink 
							to='/'
							onClick={() => context.setSearchByCategory('')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							All
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/clothes'
							onClick={() => context.setSearchByCategory('clothes')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Clothes
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/electronics'
							onClick={() => context.setSearchByCategory('electronics')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Electronics
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/furniture'
							onClick={() => context.setSearchByCategory('furniture')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Furniture
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/toys'
							onClick={() => context.setSearchByCategory('toys')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Toys
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/others'
							onClick={() => context.setSearchByCategory('others')}
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Others
						</NavLink>
					</li>*/}
				</ul>
			</div>


			<div className='flex flex-row-reverse sm:flex-row sm:justify-between w-full items-center gap-3'>
				<div className='sm:hidden'>
					{
						isOpenMenu ? <XMarkIcon onClick={() => closeMenu()} className='w-6 h-6'/> 
						: <Bars3Icon onClick={() => openMenu()} className='w-6 h-6'/>
					}
				</div>

				<ul className={`${isOpenMenu ? "":"hidden"} w-full right-0 sm:w-auto bg-gray-200 navbar flex flex-col sm:flex-row absolute sm:relative items-center sm:gap-3`}>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/'
							onClick={() => context.setSearchByCategory('')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							All
						</NavLink>
					</li>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/clothes'
							onClick={() => context.setSearchByCategory('clothes')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							Clothes
						</NavLink>
					</li>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/electronics'
							onClick={() => context.setSearchByCategory('electronics')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							Electronics
						</NavLink>
					</li>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/furniture'
							onClick={() => context.setSearchByCategory('furniture')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							Furniture
						</NavLink>
					</li>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/toys'
							onClick={() => context.setSearchByCategory('toys')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							Toys
						</NavLink>
					</li>
					<li className='w-full sm:w-auto flex text-center'>
						<NavLink 
							to='/others'
							onClick={() => context.setSearchByCategory('others')}
							className={`p-2 sm:p-0 w-full ${({isActive}) => 
								isActive ? activeStyle : undefined
						}`}>
							Others
						</NavLink>
					</li>
				</ul>
				<ul className='flex items-center gap-3'>
					<li className='text-black/60'>
						{context.name}
					</li>	
					<li>
						<NavLink 
							to='/my-orders'
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							My Orders
						</NavLink>
					</li>
					{/*<li>
						<NavLink 
							to='/my-account'
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							My Account
						</NavLink>
					</li>
					<li>
						<NavLink 
							to='/sign-in'
							className={({isActive}) => 
								isActive ? activeStyle : undefined
						}>
							Sign In
						</NavLink>
					</li>*/}
					<li>
						<NavLink 
							to='/furniture'
							className={`flex items-center ${({isActive}) => 
								isActive ? activeStyle : undefined}`
						}>
							<ShoppingBagIcon className='h-6 w-6 text-black'/> 
							<div></div>
							{context.cartProducts.length}
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export {Navbar};