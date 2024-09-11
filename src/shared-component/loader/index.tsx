import React from "react";
import images from "../../constants/Image";

const PageLoader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-lg">
      <img src={images.LOADERIMG} alt="" />
    </div>
  );
};

export default PageLoader;
