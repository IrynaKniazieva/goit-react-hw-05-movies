import { useEffect, useState } from 'react';
import { TrendingList } from "components/TrendingList/TrendingList";
import { getTrendingMovies } from "../../components/Services/API"
import { Container, Title} from '../Home/Home.styled';

// export const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     const renderTrendingMovies = async () => {
//         try {
//             const trendingMovies = await getTrendingMovies();
//             setTrendingMovies(trendingMovies);
//         } catch (error) {
//             console.log(error)
//         }
//     };
//     renderTrendingMovies();
// },[]);
  
  
//     return (
//       <main>
//         <Container>
//           <Title>Trending today</Title>
//         <TrendingList movies={trendingMovies}/>
//         </Container>
        
//       </main>
//     );
//   };


export const Home = () => {
  return 
    <h1>Trending today</h1>
  
}