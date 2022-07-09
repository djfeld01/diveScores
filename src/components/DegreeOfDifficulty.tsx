import { csv } from 'd3';
import { useEffect,useState } from 'react';


const csvUrl =
    'https://gist.githubusercontent.com/djfeld01/3591017d1a773b03acb507ed94cafd5a/raw/93d82fdebb18691ab0bdd27e4a5acd28cb8ba9c0/divingDD.csv';

export const GetData=()=>{
    const [data, setData]= useState(null);

    useEffect(()=> {
        csv(csvUrl).then(setData);
        },[]);

          

        return data;}