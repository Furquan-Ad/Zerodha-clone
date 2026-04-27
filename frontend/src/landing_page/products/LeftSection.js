import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col p-5">
          <img src={imageURL} />
        </div>
        <div className="col mt-5 ml-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} >Try Demo <i className="fa-solid fa-arrow-right-long mx-2"></i></a>
            <a href={learnMore} style={{marginLeft: "50px"}}>Learn More<i className="fa-solid fa-arrow-right-long mx-2"></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img style={{marginLeft: "30px"}} src="media/images/appstoreBadge.svg" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
