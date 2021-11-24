import React, { useContext } from "react";
import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {FiMessageCircle } from "react-icons/fi";
import {AiOutlineEllipsis} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import { ContextProvider } from "../Global/Context";

import styled from "styled-components";
import Comment from "./Comments";
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header" style={{display:'flex', flexDirection: 'row',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
              <div className="posts__header-avator">{post.username[0]}</div>
              <div className="posts__header-name">{post.username}</div>
            </div>
            < AiOutlineEllipsis style={{fontSize: '25px',marginLeft:'5px'}}/>
          </div>
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              < AiOutlineHeart style={{fontSize: '25px',marginLeft:'5px', cursor: "pointer"}}/>
              < FiMessageCircle style={{fontSize: '25px',marginLeft:'5px', cursor: "pointer"}}/>
              < FiSend style={{fontSize: '25',marginLeft:'5px', cursor: "pointer"}}/>
            </div>
            < BsBookmark style={{fontSize: '25px',marginLeft:'5px',cursor: "pointer"}}/>
          </div>
          <img src="/images/likesInsta.jpg" alt="" />
            
          <Comment id={post.id} />
        </div>
      ))}
    </>
  );
};

export default Posts;