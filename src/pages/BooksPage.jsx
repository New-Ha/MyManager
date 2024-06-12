import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Calender from '../components/Calender';
import ContentCard from '../components/ContentCard';

export const CultureContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CultureHeaderContainer = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const SearchAndTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CultureTitle = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    grid-auto-rows: 4.5rem;
    overflow: auto;
`;

export const CardContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(30%, 1fr));
`;

const mockBook = [
    {
        id: 0,
        stars: 5,
        title: '그리고 당신의 애인',
        book_img: 'https://image.yes24.com/goods/107005346/XL',
        author: '태주',
        publisher: '검은책',
        watched_at: '2023-12-25',
        content: '마음을 후벼판다.',
    },
    {
        id: 1,
        stars: 3,
        title: '그리고 당신의 애인',
        book_img: 'https://image.yes24.com/goods/107005346/XL',
        author: '태주',
        publisher: '검은책',
        watched_at: '2023-12-25',
        content: '마음을 후벼판다.',
    },
    {
        id: 2,
        stars: 4,
        title: '그리고 당신의 애인',
        book_img: 'https://image.yes24.com/goods/107005346/XL',
        author: '태주',
        publisher: '검은책',
        watched_at: '2023-12-25',
        content: '마음을 후벼판다.',
    },
];

export default function BooksPage() {
    return (
        <CultureContainer>
            <CultureHeaderContainer>
                <SearchAndTitle>
                    <SearchBar />
                    <CultureTitle>BOOK REPORT</CultureTitle>
                </SearchAndTitle>
            </CultureHeaderContainer>
            <CardContainer>
                {mockBook.map(book => (
                    <ContentCard
                        key={book.id}
                        id={book.id}
                        stars={book.stars}
                        title={book.title}
                        bookImage={book.book_img}
                        author={book.author}
                        publisher={book.publisher}
                        watchedAt={book.watched_at}
                        content={book.content}
                    />
                ))}
            </CardContainer>
        </CultureContainer>
    );
}
