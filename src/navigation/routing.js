import React, { Component } from 'react';
import S1 from '../components/screen1';
import S2 from '../components/Screen2';
import S3 from '../components/Screen3';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<S1 />} />
                    <Route path="S2" element={<S2 />} />
                    <Route path="S3" element={<S3 />} />
                </Routes>
            </BrowserRouter>
         );
    }
}
 
export default Routing;