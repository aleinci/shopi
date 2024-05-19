import {useState, useEffect} from 'react';
import {Layout} from '../../Components/Layout';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';

function Register() {

  const navigate = useNavigate();

  const context = useContext(ShoppingCartContext);

  const [readName, setReadName] = useState("");
  const [readEmail, setReadEmail] = useState("");
  const [readPassword, setReadPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const confirmAccount = (event) => {
    event.preventDefault();

    if(readName.length > 0 && readEmail.length > 0 && readPassword.length > 0 && readPassword == confirmPassword){
      context.name = readName;
      context.email = readEmail;
      context.password = readPassword;
      console.log(context.name)
      navigate("/sign-in");
    }
    
  }

  useEffect(() =>{
    //  if() {
    //   navigate("./");
    // }
  },[, ])

  return (
    <Layout>
     <div className='flex justify-center items-center relative w-80'>
        <h1 className='font-medium text-xl mb-4'>Register</h1>
      </div>
        <form className='flex flex-col'>

          <label className='w-80 text-red-500'>{readName.length > 0 ? "" : "Invalid Name"}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="text" 
          placeholder='Name'
          onChange={event => setReadName(event.target.value)} />

          <label className='w-80 text-red-500'>{readEmail.length > 0 ? "" : "Invalid E-mail"}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="text" 
          placeholder='Example@example.com'
          onChange={event => setReadEmail(event.target.value)} />

          <label className='w-80 text-red-500'>{readPassword.length > 0 ? "" : "Invalid Password"}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="password" 
          placeholder='Password'
          onChange={event => setReadPassword(event.target.value)} />

          <label className='w-80 text-red-500'>{confirmPassword == readPassword ? "" : "The password does not match"}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="password" 
          placeholder='Confirm Password'
          onChange={event => setConfirmPassword(event.target.value)} />

          <div className='flex gap-2 w-80 justify-between'>
            
              <button onClick={confirmAccount} className='bg-black py-3 text-white border border-black rounded-lg w-full text-center
            hover:bg-white hover:text-black'>Log In</button>
            

            <Link className='bg-white py-3 text-black border border-black rounded-lg w-full text-center
            hover:bg-black hover:text-white' to='/my-orders/last'>
              <button>Register</button>
            </Link>
          </div>
        </form>
    </Layout>
  )
}

export default Register
