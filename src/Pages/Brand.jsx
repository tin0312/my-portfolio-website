import React from "react"

export default function Brand(){
    return(
        <div className="brand-container ">
            <div className="developer-wrapper">
                <h1 className="developer-name">Hello, my name is <br/> Justin Hoang</h1>
                <p className="developer-introduction">As an eager learner and developer, I am delicated <br/>to making ideas into reality by web application  </p>
            </div>
            <div className = "photo-wrapper">
                <img src="src/images/developer-photo.jpeg" alt="Justin Hoang" className="developer-image"/>
            </div>
        </div>
    )
}
