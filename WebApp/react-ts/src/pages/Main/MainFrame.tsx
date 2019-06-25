import React from 'react';
import HeaderBase from './Header/HeaderBase';
import IndexPage from './IndexPage/IndexPage';
import { Route } from 'react-router-dom';

const MainFrame: React.FC = () => {

    return (
        <>
            <HeaderBase />
            <Route exact path="/" component={IndexPage}/>
        </>
    );
}

export default MainFrame;