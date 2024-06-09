import ContentCard from '../components/ContentCard';
import SearchBar from '../components/SearchBar';
import { CardContainer, CultureContainer, CultureHeaderContainer, CultureTitle, SearchAndTitle } from './BooksPage';

const mockMovie = [
    {
        id: 0,
        title: '범죄도시4',
        poster: 'https://i.namu.wiki/i/rrHaHzTJSB5C7asmwf7DtFFVhVRB7mHMxo3W2UgFEskNo7zpQI68SL_2M7Bbftl3YoM-6yp-ydelIm7U2pOwHw.webp',
        director: 'Heo Myeong-haeng',
        actors: ['마동석', '김무열', '박지환'],
        watched_at: '2024-05-06',
        stars: 5,
        content: '졸잼졸잼',
    },
    {
        id: 2,
        title: '범죄도시4',
        poster: 'https://i.namu.wiki/i/rrHaHzTJSB5C7asmwf7DtFFVhVRB7mHMxo3W2UgFEskNo7zpQI68SL_2M7Bbftl3YoM-6yp-ydelIm7U2pOwHw.webp',
        director: 'Heo Myeong-haeng',
        actors: ['마동석', '김무열', '박지환'],
        watched_at: '2024-05-06',
        stars: 5,
        content: '졸잼졸잼',
    },
    {
        id: 3,
        title: '범죄도시4',
        poster: 'https://i.namu.wiki/i/rrHaHzTJSB5C7asmwf7DtFFVhVRB7mHMxo3W2UgFEskNo7zpQI68SL_2M7Bbftl3YoM-6yp-ydelIm7U2pOwHw.webp',
        director: 'Heo Myeong-haeng',
        actors: ['마동석', '김무열', '박지환'],
        watched_at: '2024-05-06',
        stars: 5,
        content: '졸잼졸잼',
    },
];

export default function MoviesPage() {
    return (
        <CultureContainer>
            <CultureHeaderContainer>
                <SearchAndTitle>
                    <SearchBar />
                    <CultureTitle>MOVIE REPORT</CultureTitle>
                </SearchAndTitle>
            </CultureHeaderContainer>
            <CardContainer>
                {mockMovie.map(movie => (
                    <ContentCard
                        key={movie.id}
                        id={movie.id}
                        stars={movie.stars}
                        title={movie.title}
                        bookImage={movie.poster}
                        author={movie.director}
                        publisher={movie.actors}
                        watchedAt={movie.watched_at}
                        content={movie.content}
                    />
                ))}
            </CardContainer>
        </CultureContainer>
    );
}
