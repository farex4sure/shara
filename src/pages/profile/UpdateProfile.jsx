import React, {useState} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { LoadingContext } from '../../context/LoadingContext';

const UpdateProfile = ({user, token, setEdit, setProfile}) => {
const {setLoading} = useContext(LoadingContext)  
  const [name, setName] = useState(user?.user.name);
  const [phone, setPhone] = useState(user?.user.phone); 
  const [email, setEmail] = useState(user?.user.email);
  const [address, setAddress] = useState(user?.user.address);
  const [iserror, setError] = useState(null);
  const data = {id: user?.user?._id, name, phone, email, address, token}
    const handleSubmit = (e) =>{	
      e.preventDefault()
      setLoading(true)
      
        axios.post('http://localhost:4000/user/update', data,
         {
           headers : {"Content-Type" : "multipart/form-data",
                     'Authorization' : `Bearer ${data.token}`,
                 }
           
         }).then(res =>   res.data)
         .then(data => {
           if (user.user._id === data.user._id) {
               user.user = data.user;
               user.wallet = data.wallet;
               }   
           localStorage.setItem("sharauser", JSON.stringify(user));
            setEdit(false)
           setProfile(true)
           setLoading(false)
         })
         .catch(err => {
             console.log(err)
             setLoading(false)
             setError(err.response?.data.error || err.message || err.response || err)
       })
    }
  return (    
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
            <div className="mr-auto place-self-center lg:col-span-7 w-full md:text-left text-center px-2">
                <div className="flex items-center px-2 w-full">							
                    <label htmlFor='name' className="w-3/12 md:w-1/12">Name</label>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    className="my-2 ml-1 p-1.5 text-sm md:text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    value={name}
                    placeholder="Name"
                    id="name"
                    />
                </div>
                <div className="flex items-center px-2">								
                    <label htmlFor='phone' className="w-3/12 md:w-1/12">Phone</label>
                    <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="my-2 ml-1 p-1.5  text-sm md:text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="phone"
                    placeholder="Phone Number"
                    id="phone"
                    />
                </div>
                <div className="flex items-center px-2">
                    <label htmlFor='email' className="w-3/12 md:w-1/12">Email</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="my-2 ml-1 p-1.5  text-sm md:text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    id="email"
                    />
                </div>
                <div className="flex items-center px-2">								
                    <label htmlFor='address' className="w-3/12 md:w-1/12">Address</label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="my-2 ml-1 p-1.5 text-sm md:text-lg w-full font-normal text-gray-500 bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        placeholder="Address"
                        autoComplete="address"
                        id='address'
                    />
                </div>
            </div>
            <div className="py-2 px-4 w-full flex justify-center">
                <button type='submit' className='p-2 w-full md:max-w-xl px-6 justify-center rounded-md text-xl bg-green-500 hover:bg-green-600 text-white'>Update Profile</button>
            </div>
            <div className="px-4 w-full">
                {iserror && <div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">{iserror}</div>}
            </div>
    </form >
  )
}

export default UpdateProfile