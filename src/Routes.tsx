import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Container } from './components/container';
import { UserHistory } from './components/userHistory';

const Router = () => {
  return (<div>
    <Routes>
        <Route/>
        <Route path='/' element={<Container/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/user-history' element={<UserHistory/>}/>
        </Route>
        
    </Routes>
  </div>
  )
}

export default Router;