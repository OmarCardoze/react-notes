import React from 'react'
import Toggable from './Toggable'

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

                    <button>
                        Login
                    </button>
                </form>
            </Toggable>
    )
}