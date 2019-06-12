import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default Root;