import styled from 'styled-components';
import { ContentsContainer } from '../util/templateStyle';

const ContentCartContainer = styled(ContentsContainer)`
    width: 300px;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
`;

const ContentImage = styled.img`
    width: 100px;
    object-fit: cover;
`;

const ContentInfoContainer = styled.div`
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ContentTitle = styled.h1`
    font-size: 1.25rem;
`;
const ContentMaker = styled.p`
    font-size: 0.9rem;
`;

export default function ContentCard(props) {
    const { id, stars, title, bookImage, author, publisher, watchedAt, content } = props;

    return (
        <ContentCartContainer id={id}>
            <ContentImage src={bookImage} />
            <ContentInfoContainer>
                <ContentTitle>{title}</ContentTitle>
                <ContentMaker>저자 : {author}</ContentMaker>
                <ContentMaker>출판 : {publisher}</ContentMaker>
            </ContentInfoContainer>
        </ContentCartContainer>
    );
}
