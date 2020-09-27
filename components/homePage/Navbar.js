import { useState, useEffect } from "react";

export default function Navbar(){
    function containerClasses(){
        let temp = [
          "flex",
          "justify-between",
          "mx-3"
        ]
        let cls = '';
    
        temp.forEach(item =>{
          cls = cls + ' ' + item;
        })
    
        return cls;
      }
    return(
        <div className={containerClasses()}>
            <img className="w-32" src="tempLogo.png" alt="logo"/>
        </div>
    )
}