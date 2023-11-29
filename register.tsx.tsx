import {Metadata} from 'next'
import { AiFillApple } from "react-icons/ai";
import {FaGoogle, FaFacebook, FaRegEnvelope} from "react-icons/Fa";
import {MdLockOutline} from 'react-icons/md';
export default function register(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
              <div className="w-3/5 p-5 bg-blue-500">
              
              </div>
            <div className="w-3/5  bg-white py-36 px-12">
              <div className="text-right  font-bold">
                <span className="text-red-900">Liv</span>Guard
              </div>
            <div>
              <h2 className="text-left font-bold mb-2">Register</h2>
              <a className="text-xs ">Sign up with</a>
              <div className="flex justify-center my-2">
                  <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm"/>
                  </a>
                  <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <AiFillApple className="text-sm"/>
                  </a>
                  <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebook className="text-sm"/>
                  </a>
                 </div>
                <a>OR</a>
                <div>
                <h2 className="text-left font-bold mb-2">Your name</h2>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-1 flex items-center mb-4">
                  <input type="name" name="name" placeholder="First name" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-1 flex items-center mb-4">
                  <input type="name" name="name" placeholder="Last name" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                </div>
              </div>
             
                <h2 className="text-left font-bold mb-2">Login details</h2>
                
              <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-1 flex items-center mb-4">
                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
              <div className="bg-gray-100 w-64 p-1 flex items-center mb-4">
                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
              <a className="flex items-center text-xs"> Minimum characters with at least one uppercase, one lowercase,one special character and a number</a>
              <div className="flex  w-64 mt-5">
                <label className="text-left flex items-center text-xs"><input type="checkbox" name="remember"/> By clicking LOGIN you agree to our website Terms&Conditions.</label>
                </div>
                <div className="flex w-64 mt-3">
                <label className="flex items-center text-xs"><input type="checkbox" name="remember"/> Keep me logged in</label>
                </div>
                
              </div>
              
                </div>
              </div>
            </div>
          </main>
        </div>
      
    )
}