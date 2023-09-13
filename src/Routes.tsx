import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Container } from './components/container';
import { UserHistory } from './components/userHistory';
import { UserManual } from './components/userManual';
import { Documents } from './components/documents';

const Router = () => {
  return (<div>
    <Routes>
        <Route/>
        <Route path='/' element={<Container/>}>
            <Route path='/' element={<Navigate replace to = "dashboard"/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/user-history' element={<UserHistory/>}/>
            <Route path='/user-manual' element={<UserManual/>}/>
            <Route path='/documents' element={<Documents/>}/>
        </Route>
        
    </Routes>
  </div>
  )
}

export default Router;