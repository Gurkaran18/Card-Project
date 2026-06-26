import React from 'react'
import bookmark from '../bookmark-line.svg'

const Cards = (props) => {
  return (
      <div className="card">
    
              <div className="top">
    
                <div className="logo-container">
                <img id = "img1" src= {props.brandLogo}  alt="" />
                </div>
    
                <button>Save <img src={bookmark} alt="bookmark" /> </button>
              </div>
    
              <div className="center">
                  <h4>{props.company}<span id = {props.datePosted}>5 days ago</span></h4>
                  <h3>{props.post}</h3>
    
                  <div id="tags">
                      <h4>{props.tag1}</h4>
                      <h4>{props.tag2}</h4>
                  </div>
              </div>
    
              <div className="line">
    
              </div>
              
              <div className="bottom">
    
                <div>
                  <h3>{props.pay}</h3>
                  <p>{props.location}</p>
                </div>
    
                <div>
                  <button>Apply Now</button>
                </div>
    
              </div>
    
            </div>
  )
}

export default Cards