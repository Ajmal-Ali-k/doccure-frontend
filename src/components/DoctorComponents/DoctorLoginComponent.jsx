import React, { useState } from 'react';
import doctorImage from '../../Assets/OQ6UTW0.jpg'
function DoctorLoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={doctorImage} alt="Doctor" className="w-48 h-48 rounded-full mb-8 " />
        <h1 className="text-3xl font-bold mb-4">Doctor Login</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900  text-sm  mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-900 text-sm mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:bg-blue-600">Login</button>
        </form>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-blue-500"></div>
    </div>
  );
}

export default DoctorLoginComponent;
