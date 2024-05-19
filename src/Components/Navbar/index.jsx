import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';

const Navbar = () => {

	const context = useContext(ShoppingCartContext);

	const activeStyle = 'underline underline-offset-4';

	return(
		<nav className='bg-gray-300 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-xl'>
					<NavLink 
						to='/'
						onClick={() => context.setSearchByCategory('')}>
							
						Shopi
					</NavLink>
				</li>	
				<li>
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
		</nav>
	);
}

export {Navbar};