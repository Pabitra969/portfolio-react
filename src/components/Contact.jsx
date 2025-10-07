import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-30 max-sm:pl-10 md:pl-20 lg:pl-35 max-sm:pr-10 md:pr-20 lg:pr-35 lg:mb-30 mb-15">
      <h1 className="text-2xl font-bold">Contact Me !</h1>
      <p className="pt-5">If you'd like to work together or have questions, reach out — I usually reply within a few days.</p>
      <div className="flex flex-wrap gap-10 mt-5 items-center">
        <button className="self-center bg-bluish text-primary-50 px-6 py-2 rounded-lg hover:cursor-pointer">
          <a href="mailto:pkg2000696@gmail.com">Email Me</a>
        </button>

        <div className="flex items-center self-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>

          <a href="https://www.linkedin.com/in/pabitra-kumar-ghorai969/" class="text-bluish text-xl" target='_blank'>LinkedIn</a>
        </div>
      </div>

    </div>
  )
}

export default Contact