'use client'
import { AsscociateForm, Banner, TableComponent } from '@/app/components'
import React, { useState } from 'react'

export default function scheduleManger() {
    const [view, setview] = useState(2)
    const changeView = (e) => {
        console.log(e.target.id)
        setview(e.target.id)
    }
    console.log(view)
    return (
        <>
            <Banner bannerName="Welcome to Schedule Manager" />
            <div className="flex justify-center md:mt-10 my-4">
                <div className="flex">
                    <button id="1" onClick={changeView} title='Add Associate' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none">
                        <svg id="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-person-standing">
                            <circle cx="12" cy="5" r="1" />
                            <path d="m9 20 3-6 3 6" />
                            <path d="m6 8 6 2 6-2" />
                            <path d="M12 10v4" />
                        </svg>
                    </button>
                    <button id="2" onClick={changeView} title='Add Department' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 focus:outline-none">
                        <svg id="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-panel-top">
                            <rect width="18" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                        </svg>
                    </button>
                    <button id="3" onClick={changeView} title='View Asscociate' className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none">
                        <svg id="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-view">
                            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
                            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                        </svg>
                    </button>
                </div>
            </div>

            {
                view == "1" &&
                <AsscociateForm />
            }
            {
                view == "3" &&
                <div className='mx-10'>
                    <TableComponent />
                </div>
            }
        </>
    )
}
