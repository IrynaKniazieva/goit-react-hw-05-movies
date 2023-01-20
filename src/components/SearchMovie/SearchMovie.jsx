// import { useEffect, useState } from 'react';
// import { getSearch } from "Services/API"
// import { useSearchParams } from 'react-router-dom';


// export const SearchMovie = () => {
//     const [movie, setMovie] = useState([]);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [query, setQuery] = useState('');
//     // const query = searchParams.get('moviename');

//     const onFormSubmit = (e) => {
//         e.preventDefault();
//         const value = e.target.value;
//         setSearchParams({moviename: value});
//     }

//     useEffect(() => {
//         getSearch(query).then(setMovie);

//     },[query])
    

//     return (
//         <div>
//             <form onSubmit={onFormSubmit}>
//                 <input> name ="moviename" type="text"</input>
//                 <button>Search</button>
//             </form>
//         </div>
//     )

// }

export const SearchMovie = ({onChange}) => {
    return (
        <div>
            <input type="text" onChange={e => onChange(e.target.value)}></input>
        </div>
    )
}