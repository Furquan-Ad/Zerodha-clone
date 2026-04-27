import React from 'react';
function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                 <img src="media/images/education.svg" style={{width:"90%"}}  />
                </div>

               <div className="col-6">
                <h1 className="mb-5 mt-5 fs-2">Free and open market education</h1>
                <p>varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading   </p>
                <a href="" className="mx-5" style={{textDecoration: "None"}}>Versity<i className="fa-solid fa-arrow-right-long mx-2 mb-5"></i></a>
                
                <p>Trading Q&A, the most active trading and investment community in India for all your market related queries<br></br> </p>
                <a href="" className="mx-5" style={{textDecoration: "None"}}>TradingQ&A<i className="fa-solid fa-arrow-right-long mx-2"></i></a>


             

               </div>


            </div>
        </div>
      );
}

export default Education ;