import React from 'react'

export default function LoginForm () {
    return (
        <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
  
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
  
        <button>
          Login
          </button>
      </form>
    )
}