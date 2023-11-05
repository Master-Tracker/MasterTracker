import React from 'react';
import { Helmet } from 'react-helmet';
import { Sidebar } from '../../components/sidebar';
import Router from '../../Routes';
import { Container } from '../../components/container';

export function Main () {
    return (
        <> 
        <Helmet>
            <title>Master Tracker</title>
        </Helmet>
        <div className='flex w-full h-screen'>
            <Sidebar/>
            <Router/>
            <Container/>
        </div>
        
        </>
    );

}