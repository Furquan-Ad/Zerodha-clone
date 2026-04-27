import React from 'react';
function Pricing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p className="text-muted">we poineered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: "none"}}>See pricing <i className="fa-solid fa-arrow-right-long mx-2"></i></a>

                </div>

               
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="Container">
                        <div className="row text-center">
                            <div className="col border p-3">
                                <h1><i className="fa-solid fa-indian-rupee-sign"></i>0</h1>
                                <p>Free equity delivery and <br></br> direct mutual funds</p>

                            </div>
                            <div className="col border p-3">
                                <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                                <p>Intraday F&O</p>
                                
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
      );
}

export default Pricing;