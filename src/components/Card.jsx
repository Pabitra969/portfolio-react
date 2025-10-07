import React from 'react'

const Card = ({ title, body, link }) => {
	return (
		<>
			<div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 rounded-2xl border border-[rgba(255,255,255,0.03)]">

				<h2 className="block font-bold text-[17px] mb-4">{title}</h2>
				<p className="mb-7">{body}</p>
				<a href={link} target="_blank" rel="noopener noreferrer" className="link font-bold hover:cursor-pointer text-bluish">View project →</a>
			</div>
		</>
	)
}

export default Card