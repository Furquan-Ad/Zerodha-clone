import React from 'react';

function Hero() {
    return ( 
       <section className="container-fluid" id="heroPage">
         <div className="p-5 mt-5 mb-2" id="supportWrapper">
          <h4>Support Portal </h4>
          <a className="text-decoration-none" href="">Track tickets</a>

         </div>
         <div className="row">
          <div className="col ms-5 p-5 ">
            <h1 className="fs-3" >
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input   placeholder="Eg: how do i activate F&O, why is my order getting rejected." /> <br></br>
            <a href="" className="ms-0">Track account opening</a>
             <a href="" className="ms-2">Track segment activation</a>
              <a href="" className="ms-2">Intraday</a>
              <a href="" className="ms-2">margins</a>
               <a href="" className="ms-2">Kite user manual</a>
          </div >
          <div className="col ms-5 p-5">
            <h1 className="fs-3">Featured</h1>
            <ol>
              <li><a  href="" className="ms-0">Current Takeovers and Delisting - Januray 2024</a></li>
              <li><a  href="" className="ms-0">Latest Intraday leverages - MIS & CO</a></li>
            </ol>
          </div>
 
         </div>
       </section>
     );
}

export default Hero;