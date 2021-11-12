import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
class Screen1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Screen1</h1>
                <Link to="/S2">Move to Screen 2</Link>
            </div>
         );
    }
}
 
export default Screen1;