import { useState, useEffect } from "react";
import Navbar from "../components/homePage/Navbar";

export default function Home() {

  function containerClasses(){
    let temp = [
      "mx-auto"
    ]
    let cls = '';

    temp.forEach(item =>{
      cls = cls + ' ' + item;
    })

    return cls;
  }
  
  return (
    <div className={containerClasses()}>
      <Navbar />
    </div>
  );
}
