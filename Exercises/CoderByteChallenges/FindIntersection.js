function FindIntersection(strArr) { 
    // code goes here  
  
    var firspart=strArr[0];
    var secondpart=strArr[1];
  
    var firsArray=[];
    var secondArray=[];
  
    firspart.split(",").map((anyNumber)=>{firsArray.push(Number(anyNumber))});
    secondpart.split(",").map((anyNumber)=>{secondArray.push(Number(anyNumber))});
  
    var result= (secondArray.filter(e => firsArray.includes(e))).toString();
  
    if(!result){
      return false;
  
    }
    else{
      return result;
    }
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));