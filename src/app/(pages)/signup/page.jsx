'use client';
import { Banner } from '@/app/components'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
    let [loginData, setloginData] = useState({ businessType: "", email: "", password: "", fName: "", lName: "", company: "", storeNo: 0 })
    let [error, setloginError] = useState({ businessType: false, email: false, password: false, fName: false, lName: false, company: false, storeNo: false })

    const setEmail = (e) => {
        let { name, value } = e.target;
        console.log(value)
        if (name === "email") {
            if (value == '') {
                setloginError((pre) => {
                    return {
                        ...pre,
                        email: "1"
                    }
                })
                setloginData((pre) => {
                    return {
                        ...pre,
                        email: value
                    }
                })
            }
            else {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailRegex.test(value)) {
                    setloginData((pre) => {
                        return {
                            ...pre,
                            email: value
                        }
                    })
                    setloginError((pre) => {
                        return {
                            ...pre,
                            email: false
                        }
                    })
                }
                else {
                    setloginData((pre) => {
                        return {
                            ...pre,
                            email: value
                        }
                    })
                    setloginError((pre) => {
                        return {
                            ...pre,
                            email: false
                        }
                    })
                }
            }
        }
    }

    const setPassword = (e) => {
        let { name, value } = e.target;
        console.log(value)
        if (value == "") {
            setloginData((pre) => {
                return {
                    ...pre,
                    [name]: value
                }
            })
            setloginError((pre) => {
                return {
                    ...pre,
                    [name]: "1"
                }
            })
        }
        else {
            setloginData((pre) => {
                return {
                    ...pre,
                    [name]: value
                }
            })
            setloginError((pre) => {
                return {
                    ...pre,
                    [name]: false
                }
            })
        }
    }
    function containsSpecialCharacters(value) {
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        return specialCharacters.test(value);
    }

    const checkOtherField = (e) => {
        let { name, value } = e.target
        if (containsSpecialCharacters(value)) {
            setloginError((pre) => {
                return {
                    ...pre,
                    [name]: "1"
                }
            })
        }
        else {
            setloginError((pre) => {
                return {
                    ...pre,
                    [name]: false
                }
            })
            setloginData((pre) => {
                return {
                    ...pre,
                    [name]: value
                }
            })
        }
        console.log(loginData)
        console.log(error)
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        if (!error.fName || !error.lName || !error.email || !error.businessType || !error.storeNo || !error.company) {
            try {
                console.log("submitted")
                let response = await axios.post("/api/user/signup", loginData)
                console.log(response.data.message)
                if(!response.data.signup){
                    toast.error(response.data.message,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
                else{
                    toast.success(response.data.message,
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    );
                }
                
            } catch (error) {
                console.log("error occurend during sending data for signup", error)
                
            }
        }
    }
    return (
        <>
            <Banner bannerName="Signup" />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image className="mx-auto h-10 w-auto" height={100} width={100} src="/logo.png" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
                </div>

                <div className="mt-10 mx-auto w-full max-w-lg ">
                    <form className="space-y-6 max-w-lg" onSubmit={handleSignup} >

                        <div className=''>
                            <label htmlFor="fName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                            <div className="mt-2">
                                <input id="fName" name="fName" onChange={checkOtherField} type='text' required className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.fName == "1" && <p className='text-sm text-red-700 my-1'>Provide valid First Name</p>}
                        </div>
                        <div className=''>
                            <label htmlFor="lName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <input id="lName" name="lName" onChange={checkOtherField} type='text' required className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.lName == "1" && <p className='text-sm text-red-700 my-1'>Provide valid Last Name</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" onChange={setEmail} type='email' autoComplete='email' required className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.email == "1" && <p className='text-sm text-red-700 my-1'>Provide an Email</p>}
                            {error.email == "2" && <p className='text-sm text-red-700 my-1'>Provide a valid Email</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" onChange={setPassword} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.password == "1" && <p className='text-danger my-1'>Provide an Password</p>}
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
                            <div className="mt-2">
                                <input id="company" name="company" onChange={checkOtherField} type='text' required className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.company == "1" && <p className='text-sm text-red-700 my-1'>Provide valid Company Name</p>}

                        </div>
                        <div>
                            <label htmlFor="businessType" className="block text-sm font-medium leading-6 text-gray-900">Business Type</label>
                            <div className="mt-2">
                                <select id="businessType" name="businessType" onChange={checkOtherField} required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="">Select Business Type</option>
                                    <option value="store">Store</option>
                                    <option value="shop">Shop</option>
                                    <option value="administrative">Administrative</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="storeNo" className="block text-sm font-medium leading-6 text-gray-900">Store/office/shop Number</label>
                            <div className="mt-2">
                                <input id="storeNo" name="storeNo" onChange={checkOtherField} type='text' required className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.storeNo == "1" && <p className='text-sm text-red-700 my-1'>Provide valid First Name</p>}

                        </div>
                        <div>
                            <button type="submit" disabled={error.fName || error.lName || error.email || error.businessType || error.storeNo || error.company} className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already Have an Account?
                        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
