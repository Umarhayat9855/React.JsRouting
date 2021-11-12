import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
class Screen2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Screen2</h1>
                <Link to="/S3">Move to Screen 3</Link>
            </div>
         );
    }
}
 
export default Screen2;