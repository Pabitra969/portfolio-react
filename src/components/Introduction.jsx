import React from 'react'

const Introduction = () => {
  return (
    <section class=" md:mt-30 sm:mt-15 mb-15 lg:mb-30 lg:mr-20 lg:ml-18">
      <div class="flex justify-center items-center gap-6 max-lg:block" >
        <div id="image" class="bg-bluish h-60 w-60 rounded-full flex items-center justify-center sm:ml-15 max-sm:ml-10" >
          <img src="/src/assets/Profile_Image.jpeg" alt="Profile Image Pabitra" class="rounded-full h-54 w-54" />
        </div>
        <div id="text" class="max-lg:m-10" >
          <h1 class="text-4xl">Hello this is Pabitra here.</h1>
          <p class="text-gray-400 " >A front-end developer who builds accessible, responsive web experiences. I also have experience in AI/ML model training and hosting.</p>
          <a
            href="#project"
            rel='noopener noreferrer'
            className="mt-5 bg-bluish text-black px-4 py-2 rounded hover:cursor-pointer inline-block"
          >
            See My Work
          </a>

          <a
            href="/resume.pdf"
            rel="noopener noreferrer"
            className="mt-5 sm:ml-5 bg-bluish text-black px-5 py-2 rounded hover:cursor-pointer inline-block"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  )
}

export default Introduction