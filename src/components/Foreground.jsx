import React, { useRef, useState } from "react";
import Card from "./Card";
import { RiInstagramFill } from "react-icons/ri";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { TbBrandStorytel } from "react-icons/tb";
import { TbBrandSlack } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";

function Foreground() {
  const ref = useRef()
  const data = [
    {
      desc :"Facebook, a pioneering social network, connects people worldwide. .",
      fileSize :"4.9Mb",
      close :true,
      icon:<LuFacebook size={"30px"} color="#1877F2"/>,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },
    {
      desc :"Instagram is a vibrant social media platform designed for sharing photos and videos. ",
      fileSize :"4.9Mb",
      close :true,
      icon: <RiInstagramFill
      size={"30px"}
      style={{ 
        color: "#fff", // Main Color (Gradient from purple to pink)
      }} />,

      tag:{
        isOpen:true,
        tagTitle:"Upload",
        tagColor:"blue"
      }
    },
    {
      desc :"lorem sakdnasdk kasadas asd adasds asas csdakdasdka;lsdakdl; kasl;dk asldka;s lkd;alsk d;asl",
      fileSize :"4.9Mb",
      close :false,
      icon:<TbBrandStorytel color="#517fa4" size={"30px"}/>,

      tag:{
        isOpen:false,
        tagTitle:"Download Nooooooooow",
        tagColor:"green"
      }
    },  
  ]
  return (
    <>
      <div ref={ref} className="fixed flex gap-5 flex-wrap top-0 left-0 h-screen w-full z-[3]">
      {data.map((item,index)=>(
        <Card reference={ref} data={item} />
      ))}
      </div>
      
    </>
  );
}

export default Foreground;
