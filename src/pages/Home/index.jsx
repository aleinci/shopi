import {useContext} from 'react';
import { ShoppingCartContext } from '../../Context';
import {Layout} from '../../Components/Layout';
import {Card} from '../../Components/Card';
import {ProductDetail} from '../../Components/ProductDetail';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function Home() {

  const context = useContext(ShoppingCartContext);

  
  const rendererView = () =>{

      if (context.filteredItems?.length > 0){
        return(
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} /> 
          ))
        )
      } else {
        return(
          <div className='font-medium text-xl mb-4'>We don't have anything :C</div>
        )
      }
    }

  return (
    <Layout>
     <div className='flex justify-center items-center relative w-80'>
        <h1 className='font-medium text-xl mb-4 mt-4'>Exclusive Products</h1>
      </div>
      <input 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
        type="text" 
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
     <div className='grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
       {rendererView()}
     </div>
     <ProductDetail />
    {context.cartProducts.length > 0 &&
      <div onClick={() => context.openCheckoutSideMenu()} className='fixed bg-gray-200 flex justify-center items-center p-3 rounded-full bottom-6 right-6 cursor-pointer'>
        <ChevronLeftIcon className='h-6 w-6 text-black' />
      </div>
    }
    </Layout>
  )
}

export default Home
