import { useState } from "react"
import React from "react"
import SearchImage from "./Api"
import ImageList from "./Components/ImageList"
import ImageShow from "./Components/ImageShow"
import SearchBar from "./Components/SearchBar"


function App(){

  const [images,setImages] = useState([]);

  const handleSubmit = async (term) =>{
       const result = await SearchImage(term);
       setImages(result);
    }
    return(
      <div>
        <SearchBar onSubmit ={handleSubmit} />
        <ImageList images = {images}/>
      </div>
    )
}
export default App