import React, {useState} from "react"
import Header from "./components/Header"
import SearchBox from "./components/SearchBox"
import ResultsContainer from "./components/ResultsContainer"


const names = require("@rstacruz/startup-name-generator");


function App() {
  const [headerTitle] = useState("Name It!");

  const [searchText, setSearchText] = useState("");

  const [inputAnimation, setUserAnimation] = useState(true);

  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleSearchInput = (value) => {
    setSearchText(value);
    setUserAnimation( value ? false : true)
    setSuggestedNames(value ? names(value) : [] )
  }

  return (
    <>
      <Header 
      title={headerTitle} 
      inputExpanded={inputAnimation}
      />
      <SearchBox 
      value={searchText} 
      onHandleSearchInput={handleSearchInput}
      />
      <ResultsContainer suggestedNames={suggestedNames}/>
    </>
  )
}

export default App