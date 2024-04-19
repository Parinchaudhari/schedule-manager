'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios';
import { Banner } from '@/app/components';
import Link from 'next/link';

export default function Login() {

    let [loginData, setloginData] = useState({ email: "", password: ""})
    let [error, setloginError] = useState({ email: false, password: false})

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
                            email: "false"
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
                            email: "2"
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
                    [name]: "false"
                }
            })
        }
    }

    const tryLogin = async (e) => {
        e.preventDefault()
        try {
            console.log(loginData)
            let response = await axios.post("/api/user/login", loginData)
            console.log(response)
        } catch (error) {
            console.log("error in occurend while login in", error)
        }

    }
    return (
        <>
            <Banner bannerName="Login" />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image className="mx-auto h-10 w-auto" height={100} width={100} src="/logo.png" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={tryLogin}>
                        
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
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" onChange={setPassword} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                            {error.password == "1" && <p className='text-danger my-1'>Provide an Password</p>}
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account?
                        <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create one here</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
