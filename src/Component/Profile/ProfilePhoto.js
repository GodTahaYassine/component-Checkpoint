import React from "react";
import myWonderfulImage from "./imageInSrc.jpg"
const Photo = () => {
 return <img src={myWonderfulImage} alt="" width="320" height="240" controls/>;
};
export default Photo;