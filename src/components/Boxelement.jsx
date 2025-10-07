import React from 'react'

const Boxelement = ({ title }) => {
  return (
    <>
      <div className="bg-boxcolor text-gray-400 inline-block w-max px-3 py-1 whitespace-normal md:whitespace-nowrap rounded mt-4">
        {title}
      </div>
    </>
  )
}

export default Boxelement