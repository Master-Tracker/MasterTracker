import React from 'react'

export function Dashboard() {
  return (
    <>
    <div className='max-h-screen overflow-hidden'>
      <iframe
        title='google map'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15442.64423810828!2d120.9991027!3d14.618374050000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1694535892963!5m2!1sen!2sph"
        width="1100"
        height="750"
        style={{ border: '0' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </>
  )
}