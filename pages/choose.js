import { useState, useEffect } from "react";

let container = ["mx-20", "h-screen", "flex", "justify-around", "items-center"];
let secondContainer = ["mx-20", "h-screen", "flex", "flex-col", "items-center", "justify-center"];
let heading = [
  "text-3xl",
]
let inner = ["flex", "justify-around", "items-center", "mt-12"]
let card = [
  "h-64",
  "border-solid",
  "border-2",
  "w-64",
  "flex",
  "justify-around",
  "items-center",
  "font-bold",
  "text-3xl",
  "bg-black",
  "text-white",
  "group",
  "hover:bg-gray-800",
  "cursor-pointer",
];

export default function Choose() {
  const [userChoice, setUserChoice] = useState({
    cals: 0,
    meal: "",
  });

  useEffect(() => {});
  function containerClasses(temp) {
    let cls = "";

    temp.forEach((item) => {
      cls = cls + " " + item;
    });

    return cls;
  }

  function handleCalories(val) {
    if(userChoice.cals === 0){
      setUserChoice({ ...userChoice, cals: val });
    }else{
      setUserChoice({...userChoice, meal: val})
    }
  }
  if (userChoice.cals === 0) {
    return (
      <div className={containerClasses(secondContainer)}>
         <div className={containerClasses(heading)}>How many calories does your next meal need?</div>
        <div className={containerClasses(inner)}>
        <div
          className={containerClasses(card)}
          onClick={() => handleCalories(250)}
        >
          250 Cal
        </div>
        <div
          className={containerClasses(card)}
          onClick={() => handleCalories(350)}
        >
          350 Cal
        </div>
        <div
          className={containerClasses(card)}
          onClick={() => handleCalories(450)}
        >
          450 Cal
        </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={containerClasses(secondContainer)}>
        <div className={containerClasses(heading)}>What kind of meal are you looking for?</div>
        <div className={containerClasses(inner)}>
          <div className={containerClasses(card)} onClick={() => handleCalories("Snack")}>Snack</div>
          <div className={containerClasses(card)} onClick={() => handleCalories("Breakfast")}>Breakfast</div>
          <div className={containerClasses(card)} onClick={() => handleCalories("Lunch")}>Lunch</div>
          <div className={containerClasses(card)} onClick={() => handleCalories("Dinner")}>Dinner</div>
        </div>
      </div>
    );
  }
}
