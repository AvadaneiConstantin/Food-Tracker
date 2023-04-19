import React, { useState, useRef, useEffect } from 'react';
import './Login.css';

function LoginForm() {
  const [showInputLogin, setShowInputLogin] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const closeModal = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSignupModal(false);
      }
    };

    document.addEventListener('click', closeModal);

    return () => {
      document.removeEventListener('click', closeModal);
    };
  }, []);

  const handleLoginClick = () => {
    setShowInputLogin(prevState => !prevState);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

  const handleSignupClose = () => {
    setShowSignupModal(false);
  };

  return (
    <div className='containerLoginForm'>
      <div className='containerApp'>
        <div className='form-container'>
          {showInputLogin && (
            <div id='inputLogin'>
              <input type='text' placeholder='Email adress' style={{ backgroundColor: 'white' }} />
              <input type='password' placeholder='Password' style={{ width: '230px' }} />
            </div>
          )}
          <button type='submit' onClick={handleLoginClick}>
            Login
          </button>
          <a onClick={handleSignupClick}>Sign up</a>
        </div>
      </div>

      {showSignupModal && (
        <div className='modal' onClick={e => e.stopPropagation()}>
          <div className='modal-content'>
            <span className='close' onClick={handleSignupClose}>
              &times;
            </span>
            <h2>Registration form:</h2>
            <form>
              <label htmlFor='full-name' className='registrationBox'>
                Full name:
              </label>
              <input type='text' className='registrationInput' id='full-name' name='full-name' required />

              <label htmlFor='email' className='registrationBox'>
                Email address:
              </label>
              <input type='email' className='registrationInput' id='email' name='email' required />

              <label htmlFor='password' className='registrationBox'>
                Password:
              </label>
              <input type='password' className='registrationInput' id='password' name='password' required />

              <label htmlFor='confirm-password' className='registrationBox'>
                Confirm password:
              </label>
              <input type='password' className='registrationInput' id='confirm-password' name='confirm-password' required />

              <button type='submit'>Confirm</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
