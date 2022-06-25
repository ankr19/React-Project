import React from "react";
import imageurl from "./imageurl";
import Card from "./Mcard";

const Jcard = () => {
  // let image = {
  //   image1: 
  //   image2: require("../images/Burger2.jpg"),
  //   image3: require("../images/Chicken Biryani.jpg"),
  //   image4: require("../images/Chicken dish1.jpg"),
  //   image5: require("../images/Chicken dish1.jpg"),
  //   image6: require("../images/Chicken dish1.jpg"),
  //   image7: require("../images/Chicken dish1.jpg"),
  //   image8: require("../images/Chicken dish1.jpg"),
  //   image9: require("../images/Chicken dish1.jpg"),
  //   image10: require("../images/Chicken dish1.jpg"),
  //   image11: require("../images/Chicken dish1.jpg"),
  //   image12: require("../images/Chicken dish1.jpg"),
  // };
  return (
    <div className="container">
      <div className="row">
        {
          imageurl.map((menu)=>{
            return(
              <div className="col-md-4" key={menu.imgurl}>
                <Card src={menu.imgurl} name={menu.name} price={menu.price} rating={menu.rating} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Jcard;
