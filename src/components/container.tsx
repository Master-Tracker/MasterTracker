import React from 'react'
import { Outlet } from 'react-router-dom'

export function Container() {
  return (
    <div className='bg-primary'>
      <Outlet/>
    </div>
  )
}
