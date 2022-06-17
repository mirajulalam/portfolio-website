import React from 'react'
import resume from '../../assets/MirajulAlamAlif_web-developer_resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA