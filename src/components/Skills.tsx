import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div data-aos="zoom-out-left">
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-gray-300 pt-2'>
                        A passionate web developer driven by creativity and innovation, crafting user-friendly, responsive designs while constantly exploring new technologies to build impactful solutions.
                    </p>
                </div> 


                <div>
                
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>

                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-left">html</h2>
                        <h2 data-aos="zoom-out-left">CSS</h2>
                        <h2 data-aos="zoom-out-left">TypeScript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-out-left">Next js</h2>
                        <h2 data-aos="zoom-out-left">Node.js</h2>
                        <h2 data-aos="zoom-out-left">Tailwind</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
