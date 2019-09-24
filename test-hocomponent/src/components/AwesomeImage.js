import React from 'react';

export default function({src='http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg',width=300,height=200}){
    // console.log(props);
return(
    <div className="AwesomeImage" style={{
        width:`${width}px`,
        height:`${height}px`,
        backgroundImage:`url(${src})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        borderRadius:"8px"
    }}>

    </div>
);
}