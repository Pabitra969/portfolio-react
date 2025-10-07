import React from 'react'
import Boxelement from './Boxelement'

const About = () => {
	const titles = [
		"HTML & CSS",
		"JavaScript",
		"React",
		"AI/ML",
		"Git & GitHub",
		"Tailwind CSS",
	]

	return (
		<>
			<div id="about" className="scroll-mt-30 max-sm:pl-10 md:pl-20 lg:pl-35 max-sm:pr-10 md:pr-20 lg:pr-35 lg:mb-30 max-sm:mb-20" >
				<h1 class="text-2xl font-bold" >About Me</h1>
				<p class="pt-5">I build user-friendly web applications with HTML, CSS, JavaScript, React. I enjoy turning complex problems into simple, intuitive designs.</p>
				<div className="flex flex-wrap gap-2">
					{titles.map((t, i) => (
						<Boxelement key={i} title={t} />
					))}
				</div>
			</div>
		</>
	)
}

export default About