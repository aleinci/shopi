import {Layout} from '../../Components/Layout';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';


function MyAccount() {

  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
     MyAccount - 
     {context.name}
    </Layout>
  )
}

export default MyAccount
