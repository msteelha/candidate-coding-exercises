//Sort an array of either numbers or strings then process them. Processing for strings 
//is to capitalize them. Processing for numbers is to sort out all the odd numbers and 
//keep just the evens.
export const processNumbersOrStrings = (
    array: string[] | number[], 
    sortOrder: "ascending" | "descending" = "ascending")
    : string[] | number[] => {
    
    if (array.length<1) {
        throw Error("processNumbersOrStrings: Array is empty.")
      }
      
    const initialType: string = typeof array[0];
    array.forEach( (element: string | number) => {
      if (typeof element !== initialType) {
        throw Error("processNumbersOrStrings: Items in array are not the same.");
      }
    });
  
    let sortedArray = [];
    if (sortOrder==="descending"){
      sortedArray = array.sort((x:number|string,y:number|string)=>x>y?-1:1);
    } else {
      sortedArray = array.sort(); //default is ascending
    }
  
    if (typeof array[0] === "string") {
      let typedStrings: string[] = sortedArray as string[];
  
      return typedStrings.map(w => w.toUpperCase());
  
    } else if (typeof array[0] === "number") {
      const typedNumbers: number[] = sortedArray as number[];
      let processedNumbers: number[] = [];
      typedNumbers.forEach(element => {
        if (element%2===0) processedNumbers.push(element);
          });
          
      return processedNumbers;
    } else {
      throw TypeError(`processNumbersOrStrings: Array input must be a string[] or number[]. This array is of type: ${typeof array[0]}`);
    }
  }
  