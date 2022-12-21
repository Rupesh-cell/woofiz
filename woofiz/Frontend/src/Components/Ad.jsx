import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Scss/ad.scss";


const Ad = () => {
  const [banner, setBanner] = useState([]);
  console.log(banner)


  const setData = () => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/api/salesbanner",
    };

    axios
      .request(options)
      .then(function (response) {
        setBanner(response.data.banner);

      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    setData()
  }, []);

  return (
    <>
      <div className="image-container">
        {banner?(banner?.map((items,index ) => {
          return ( <div className="image">
          <img
          src={items.image}
            alt=""
          />
        </div>)

        })  ) : (<h1>No Data available</h1>)}
        
      </div>
    </>
  );
};
export default Ad;
