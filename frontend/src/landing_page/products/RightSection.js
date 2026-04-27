import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className="container mt-5">
          <div className="row">
            <div className="col p-5 mt-5">
                <h1 className="mb-5 mt-5"> {productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href="{learnMore}">Learn More</a>
                </div>
            </div>
            <div className="col">
                <img src={imageURL} />
            </div>
          </div>
        </div>
     );
}

export default RightSection;