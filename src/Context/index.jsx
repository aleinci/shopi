import {createContext, useState, useEffect} from 'react'
import {api} from '../pages/Home/api.jsx';
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) =>{

	//Account
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	//shopping cart increment quantity
	const [count, setCount] = useState(0);

	//product detail open / close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	//Product detail show product
	const [productToShow, setProductToShow] = useState({});

	//Product to cart
	const [cartProducts, setCartProducts] = useState([]);

	//Checkout side menu open / close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	//SHopping Cart - Order
	const [order, setOrder] = useState([]);

	//Get Products
	const [items, setItems] = useState(null);
	const [filteredItems, setFilteredItems] = useState(null);

	//Get Products by Title
	const [searchByTitle, setSearchByTitle] = useState(null);

	//Get Products by Tag
	const [searchByCategory, setSearchByCategory] = useState('');

	useEffect(() => {
		fetch('https://api.escuelajs.co/api/v1/products')
		  .then(response => response.json())
		  .then(data => setItems(data))
		// setItems(api);
	  }, [])

	  const filteredItemsByTitle = (items, searchByTitle) =>{
		return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
	  }

	  const filteredItemsByCategory = (items, tag) =>{
		return items?.filter(item => item.category.name.toLowerCase().includes(tag.toLowerCase()))
	  }

	  const filterBy = (searchType, item, searchByTitle, searchByCategory) =>{
		if(searchType === 'BY_TITLE'){
			return filteredItemsByTitle(items, searchByTitle)
		}

		if(searchType === 'BY_CATEGORY'){
			return filteredItemsByCategory(items, searchByCategory)
		}

		if(searchType === 'BY_TITLE_AND_CATEGORY'){
			return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
		}

		if(!searchType){
			return items
		}
	  }

	  useEffect(() => {
		if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
		if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
		if (searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
		if (!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
	  }, [items, searchByTitle, searchByCategory])


	return(
		<ShoppingCartContext.Provider value={{
			email,
			setEmail,
			name,
			setName,
			password,
			setPassword,
			count,
			setCount,
			openProductDetail,
			closeProductDetail,
			isProductDetailOpen,
			productToShow,
			setProductToShow,
			cartProducts,
			setCartProducts,
			isCheckoutSideMenuOpen,
			openCheckoutSideMenu,
			closeCheckoutSideMenu,
			order,
			setOrder,
			items,
			setItems,
			searchByTitle,
			setSearchByTitle,
			filteredItems,
			searchByCategory,
			setSearchByCategory
		}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}

export {ShoppingCartContext, ShoppingCartProvider};