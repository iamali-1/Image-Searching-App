import axios from "axios";
const SearchImage = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID 3c6Xut1F3D77mnWQN6BrOEHMF-H_Rjd2RZbO6sNerLU",
        },
        params:{
            query: term,}
        });
    
    return response.data.results;
    }
    export default SearchImage;