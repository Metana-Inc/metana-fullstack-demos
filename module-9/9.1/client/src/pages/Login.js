import { useState } from 'react';

// The login view
function LoginPage() {
  const [hasError, setHasError] = useState(false);
  const loginAction = () => {
    console.log('=== debug: placeholder for login action');
  };

  return (
    <div
      id="login-container"
      className="flex flex-col justify-center items-center my-auto h-3/4"
    >
      <h2 className="text-2xl">Login</h2>
      <form
        id="login"
        method="POST"
        action="#"
        onSubmit={loginAction}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 min-w-72"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class={`shadow appearance-none border ${
              hasError ? 'border-red-600' : ''
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="******************"
          />
          {hasError && (
            <p class="text-red-500 text-xs italic hidden">
              Please choose a password.
            </p>
          )}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-600"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
