import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../Topbar';
import connect_routes from './connect_routes';

const Connect = () => {
    
    return (
        <BrowserRouter>
            <div>
                <Topbar />
                {connect_routes}
            </div>
        </BrowserRouter>
    )
}

export default Connect;