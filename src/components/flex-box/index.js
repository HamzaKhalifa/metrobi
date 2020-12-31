import React from 'react'

import './style.css';

const FlexBox = () => {
  return (
    <div className="container">
      <div className="direct_container header">Header</div>
      <div className="sub_container1">
        <div className="sub_container1__sub_container1">
          <div className="direct_container hero">Hero</div>
          <div className="direct_container sidebar">Sidebar</div>
        </div>

        <div className="sub_container1__sub_container2">
          <div className="direct_container main_contant">Main Content</div>
          <div className="direct_container extra_content">Extra Content</div>
        </div>
      </div>

      <div className="sub_container2">
        <div className="direct_container reload_image">Reload Image</div>
        <div className="direct_container related_posts">Reload Posts</div>
      </div>
      
      <div className="direct_container footer">Footer</div>
    </div>
  )
}

export default FlexBox
