import {useState, useEffect} from 'react';
import {Layout} from '../../Components/Layout';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {ShoppingCartContext} from '../../Context';

function SignIn() {

  const navigate = useNavigate();

  const context = useContext(ShoppingCartContext);

  const [readEmail, setReadEmail] = useState("");
  const [readPassword, setReadPassword] = useState("");

  const [confirmEmail, setConfirmEmail] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);


  const confirmAccount = (event) => {
    event.preventDefault();
    if(readEmail == context.email && readEmail.length > 0) {setConfirmEmail(true)}
    else{
      setConfirmEmail(false);
    }

    if(readPassword == context.password && readPassword.length > 0) {setConfirmPassword(true)}
    else{
      setConfirmPassword(false);
    }
  }

  useEffect(() =>{
     if(confirmEmail && confirmPassword ) {
      navigate("/");
    }
  },[confirmEmail, confirmPassword])

  return (
    <Layout>
     <div className='flex justify-center items-center relative w-80'>
        <h1 className='font-medium text-xl mb-4'>SignIn</h1>
      </div>
        <form className='flex flex-col'>
          <label className='w-80 text-red-500'>{!confirmEmail && confirmEmail != null ? "Invalid E-mail" : ""}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="text" 
          placeholder='Example@example.com'
          onChange={event => setReadEmail(event.target.value)} />

          <label className='w-80 text-red-500'>{!confirmPassword && confirmPassword != null ? "Invalid Password" : ""}</label>
          <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type="password" 
          placeholder='Password'
          onChange={event => setReadPassword(event.target.value)} />

          <div className='flex gap-2 w-80 justify-between'>
            
              <button onClick={confirmAccount} className='bg-black py-3 text-white border border-black rounded-lg w-full text-center
            hover:bg-white hover:text-black'>Log In</button>
            

            <Link className='bg-white py-3 text-black border border-black rounded-lg w-full text-center
            hover:bg-black hover:text-white' to='/register'>
              <button>Register</button>
            </Link>
          </div>
        </form>
    </Layout>
  )
}

export default SignIn
