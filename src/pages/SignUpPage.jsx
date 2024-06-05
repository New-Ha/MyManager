import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 40%;
`;

const InputContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    > label {
    }
    > input {
        background: none;
        padding: 8px;
        border: none;
        border-bottom: 2px solid gray;
    }
`;

export default function SignUpPage() {
    return (
        <Container>
            회원가입
            <InputContainer>
                <label htmlFor="email">이메일</label>
                <input id="email" type="text" placeholder="email"></input>
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">비밀번호</label>
                <input id="password" type="password" placeholder="password"></input>
            </InputContainer>
            <InputContainer>
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input id="confirmPassword" type="password" placeholder="password"></input>
            </InputContainer>
            <button>회원가입</button>
        </Container>
    );
}
