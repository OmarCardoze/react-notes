import React from 'react'
import Toggable from './Toggable'
import Proptypes from 'prop-types'

export default function LoginForm({ handleSubmit, username, handleUsernameChange, password, handlePasswordChange }) {

    return (
        <Toggable buttonLabel='Show login'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            value={username}
                            name='Username'
                            placeholder='Username'
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            value={password}
                            name='Password'
                            placeholder='Password'
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <button id='form-login-button'>
                        Login
                    </button>
                </form>
            </Toggable>
    )
}

LoginForm.propTypes = {
    handleSubmit: Proptypes.func.isRequired,
    username: Proptypes.string,
}