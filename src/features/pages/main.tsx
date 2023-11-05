import React from 'react';
import { Helmet } from 'react-helmet';
import { Sidebar } from '../../components/sidebar';
import Router from '../../Routes';
import { Container } from '../../components/container';

export function Main () {
    return (
        <> 
        <div className='flex w-full h-screen font-inter'>
            <Sidebar/>
            <Router/>
            <Container/>
        </div>
        
        </>
    );

}