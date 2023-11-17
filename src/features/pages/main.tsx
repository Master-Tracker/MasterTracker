import React from 'react';
import { Sidebar } from '../../components/sidebar';
import Router from '../../Routes';
import { Container } from '../../components/container';

export function Main () {
    return (
        <> 
        <div className='flex h-screen overflow-hidden font-inter'>
        <div>
            <Sidebar />
        </div>
        <div className='flex justify-center w-screen'>
            <Router />
            <Container />
        </div>
        </div>
        
        </>
    );

}