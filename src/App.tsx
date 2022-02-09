import './App.scss';
import {FiAtSign} from 'react-icons/fi'
import {FiLock} from 'react-icons/fi'

function App() {
  return (
    <section className="container">
      
        <div className="left">
          <img src="images/rocket.png" alt="" />
          <h1>Sign Up</h1>
          <p>It's not long before you embark on this journey!</p>
          <form className='form' >
              <div>
                <label htmlFor="e-mail">e-mail</label>
                <div className='input-container' >
                  <input type="text" placeholder='email' />
                  <i><FiAtSign  className='icon' /></i>
                </div>
            </div>
            <div className='pass'>
                <label htmlFor="password">password</label>
                  <div className='input-container' >
                    <input type="text" placeholder='password'/>
                    <i><FiLock className='icon' /></i>
                  </div>
            </div>
            <div className='check-container'>
              <input type="checkbox" name="checked" id="" />
              <p className='check-text'>I've read and agree with Terms of Service and
                  our Privacy Police
                </p>
            </div>
              <div>
                <button>Create an account</button>
                <p className='text-sign'>Already have an account? <a href="#"><span>Sign In</span></a></p>
              </div>

          </form>
        </div>
          <div className="right">
            <img className='w-rok' src="images/w-rocket.png" alt="" />
          </div>
      
    </section>
  );
}

export default App;
