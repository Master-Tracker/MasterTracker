import React from 'react'
import { Outlet } from 'react-router-dom'

export function Container() {
  return (
    <div className='z-0 bg-primary'>
      <Outlet/>
    </div>
  )
}
