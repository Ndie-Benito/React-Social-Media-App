import React from 'react'
import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/person/1.jpeg" alt="" className='shareProfileimg' />
                  <input type="text"
                      placeholder="What's in your mind Benito ?"
                      className="shareInput" />
                  
              </div>
              <hr className='shareHr'/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor='tomato' className='ShareIcon'/>
                          <span classname='ShareOptionText'>Photo or video</span>
                      </div>
                      <div className="shareOption">
                          <Label htmlColor='blue' className='ShareIcon' />
                          <span classname='ShareOptionText'>Tag</span>
                      </div>
                      <div className="shareOption">
                          <Room htmlColor='green' className='ShareIcon' />
                          <span classname='ShareOptionText'>Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotions htmlColor='goldenrod' className='ShareIcon' />
                          <span classname='ShareOptionText'>Feelings</span>
                      </div>
                      
                  </div>
                  <button className="shareButton">Share</button> 
              </div>
              
          </div>
      </div>
  )
}
