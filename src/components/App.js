
import React,{useState} from "react";
import './../styles/App.css';



const App = () => {
  let arr = ["apple","banana","cherry","date","elderberry","fig"]
  let [filteredArr, setFilteredArr] = useState(arr);
  function handleChange(e){
    let searchedValue = e.target.value;

    let a = arr.filter((value)=>{
      if(value.includes(searchedValue.toLowerCase())){
        return true;
      }
      return false;
    });
    setFilteredArr(a);
    // console.log();
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" onChange={handleChange}/>
        <ul>
          {
            
          }
          {
            filteredArr && filteredArr.map((e,i)=>(
                <li key={i}>{e}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App