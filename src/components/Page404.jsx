import React from 'react';
import error404 from './error404.png';

const PageNotFound = () => {
    return (
        <div id="wrapper text-center">
            <img src={error404} height="700" width="700" alt='Page Not found'/>
        </div >
    )
}
export default PageNotFound
