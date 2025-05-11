import React from 'react'

const CourseCard = (course) => {
  return (
    <div className='shadow-xl '>
        <h1 className='text-2xl font-bold '>{course.title}</h1>
        <p >{course.description}</p>
    </div>
  )
}

export default CourseCard