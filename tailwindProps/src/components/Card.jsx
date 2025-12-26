import React from 'react'

function Card(props)  {
  return (
    <>
    <figure className="md:flex bg-slate-100  p-8 md:p-0 dark:bg-slate-800 m-16 rounded-xl">
        <img className="w-24 h-24 md:w-48 md:h-auto m-4 ml-12 p-4  mx-auto" src="https://images.pexels.com/photos/31721936/pexels-photo-31721936.jpeg" alt="" width="175" height="256" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {props.username}
              </div>
              <div className="text-slate-700 dark:text-slate-300">
                {props.branch}
              </div>
            </figcaption>
          </div>
      </figure>
    </>
  )
}

export default Card
