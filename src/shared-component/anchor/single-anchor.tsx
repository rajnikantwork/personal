import React from "react";
import { Link } from "react-router-dom";

interface SingleAnchorProps {
  urlPath: string;
  text: string;
  type: boolean;
}

const SingleAnchor: React.FC<SingleAnchorProps> = ({ urlPath, text, type }) => {
  return (
    <>
      {type ?
        <Link
          to={urlPath}
          className="single-btn bg-acholor text-white flex items-center py-4 px-8 rounded-full gap-3 trns-3s delay-0 hover:bg-black"
        >
          {text}
          <i className="w-[14px] h-[14px] leading-[13px] overflow-hidden flex relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" > <path d="M16.1421 1.33345C16.1421 0.781166 15.6944 0.33345 15.1421 0.33345L6.14214 0.333451C5.58985 0.333451 5.14214 0.781166 5.14214 1.33345C5.14214 1.88574 5.58985 2.33345 6.14214 2.33345L14.1421 2.33345L14.1421 10.3335C14.1421 10.8857 14.5899 11.3335 15.1421 11.3335C15.6944 11.3335 16.1421 10.8857 16.1421 10.3335L16.1421 1.33345ZM1.70711 16.1827L15.8492 2.04056L14.435 0.626344L0.292893 14.7685L1.70711 16.1827Z"></path> </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" > <path d="M16.1421 1.33345C16.1421 0.781166 15.6944 0.33345 15.1421 0.33345L6.14214 0.333451C5.58985 0.333451 5.14214 0.781166 5.14214 1.33345C5.14214 1.88574 5.58985 2.33345 6.14214 2.33345L14.1421 2.33345L14.1421 10.3335C14.1421 10.8857 14.5899 11.3335 15.1421 11.3335C15.6944 11.3335 16.1421 10.8857 16.1421 10.3335L16.1421 1.33345ZM1.70711 16.1827L15.8492 2.04056L14.435 0.626344L0.292893 14.7685L1.70711 16.1827Z"></path> </svg>
          </i>
        </Link>
        :
        <Link to={urlPath} className="flex items-center [&:hover_span]:[transform:translate3d(0,0,0)] [&:hover_i:first-of-type]:!opacity-100 [&:hover_i:last-of-type]:!opacity-0"> 
          <i className="w-[60px] h-[60px] opacity-0 trns-3s rounded-full flex items-center justify-center bg-acholor [&>svg]:fill-white [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31,0H15V2H28.59L.29,30.29l1.41,1.41L30,3.41V16h2V1A1,1,0,0,0,31,0Z"></path></svg>
          </i>
          <span className="bg-acholor text-white text-lg px-10 py-4 rounded-full trns-3s [transform:translate3d(-60px,0,0)] [transform-style:preserve-3d]">{text}</span>
          <i className="w-[60px] h-[60px] opacity-1 trns-3s rounded-full flex items-center justify-center bg-acholor [&>svg]:fill-white [&>svg]:w-5 [transform:translate3d(-60px,0,0)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31,0H15V2H28.59L.29,30.29l1.41,1.41L30,3.41V16h2V1A1,1,0,0,0,31,0Z"></path></svg>
          </i>
        </Link>
      }
    </>
  );
};

export default SingleAnchor;
