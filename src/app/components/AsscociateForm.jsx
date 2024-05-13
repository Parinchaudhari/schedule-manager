'use client'
import Image from 'next/image'
import React from 'react'

export default function AsscociateForm() {
  return (
<div className="flex items-center justify-center min-h-screen">
  <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="md:flex">
      <div className="md:w-1/2 px-8 py-6 bg-blue-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Associate</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700" htmlFor="firstName">First Name</label>
              <input
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                id="firstName" type="text" placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700" htmlFor="lastName">Last Name</label>
              <input
                className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                id="lastName" type="text" placeholder="Enter last name" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="email" type="email" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="jobTitle">Job Title</label>
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="jobTitle" type="text" placeholder="Enter job title" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="birthdate">Birthdate</label>
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="birthdate" type="date" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="department">Department</label>
            <select
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="department">
              <option defaultValue value="1">Department A</option>
              <option value="2">Department B</option>
              <option value="3">Department C</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="associateType">Associate Type</label>
            <select
              className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="associateType">
              <option defaultValue value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="flex">Flex</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
        <Image className="object-cover w-full h-full ml-2" src="undraw_connected_re_lmq2.svg" height={0} width={0} alt="Image" />
      </div>
    </div>
  </div>
</div>



  
  
  

  )
}
