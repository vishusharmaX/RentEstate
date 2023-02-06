import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': 'bb0e31fff0mshfa45685c18a14bap10e42cjsn55c731d086a3',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    });
    return data;
}