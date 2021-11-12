import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
class Screen3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Screen3</h1>
                <Link to="/">Move to S1</Link>
            </div>
         );
    }
}
 
export default Screen3;