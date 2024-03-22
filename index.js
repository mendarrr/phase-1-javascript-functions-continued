// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
      activity = "roller-skate";
    }
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun("bathe my dog"));
  console.log(saturdayFun());
  
  function mondayWork(activity) {
    if (activity === undefined) {
      activity = "go to the office";
    }
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(saturdayFun("work from home"));
  console.log(saturdayFun());
  
  function wrapAdjective(visualFlair = "*") {
    return function(adj = "special") {
      return `You are ${visualFlair}${adj}${visualFlair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!")
  console.log(encouragingPromptFunction("a dedicated programmer"));