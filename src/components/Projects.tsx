// import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'


const data =[
    {
    id:0,
    title: "Resume",
    desc: "This is html & CSS Resume ",
    img:"/resume_pic.jpg",
    tags:["Html", "Node", "CSS", "TypeScript"],
},
{
    id:1,
    title: "Dynamic Resume",
    desc: "A Html and CSS base resume for managing and organize",
    img:"/dynamic_resume.jpg",
    tags:["Html", "Node", "CSS", "TypeScript"],
},
{
    id:3,
    title: "Editable Resume",
    desc: "This is genrate and editable resume ",
    img:"/editable_resume.jpg",
    tags:["Html", "Node", "CSS", "TypeScript"],
},
{
    id:4,
    title: "Shareable Resume",
    desc: "A Resume is Genreate and share link and PDF",
    img:"/sharebale_resume.jpg",
    tags:["Html", "Node", "CSS", "TypeScript"],
},
{
    id:5,
    title: "Gym Foam",
    desc: "This is Gym foam and fill to add this member",
    img: "/gym.jpg",
    tags:["Html", "Node", "CSS",],
},
{
    id:6,
    title: "E-Commerce-Website",
    desc: "A Nextjs & TypeScript base Web for managing and organizaton and E-Commerce-Website",
    img: "/e_commerce_web.png",
    tags:["html", "Node", "CSS", "TypeScript" , "Next js"],
},

]



const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center' >
            {data.map((el)=> (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}
 



export default Projects
