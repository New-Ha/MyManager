import styled from 'styled-components';
import Logo from '../assets/logo.svg?react';
import { Link } from 'react-router-dom';

export const SignContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    padding: 3rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LinkToSignContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    font-size: 14px;
    > div {
        color: rgba(0, 0, 0, 0.7);
    }
`;

export const LinkToSign = styled(Link)`
    color: ${props => props.theme.green};
    text-decoration: none;
    font-weight: 600;
`;

export const FormContainer = styled.form`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const SignInput = styled.input`
    width: 350px;
    font-size: 1rem;
    padding: 1rem;
    background: none;
    border: 1px solid ${props => props.theme.gray};
    border-radius: 5px;
`;

export const SubmitButton = styled.button`
    margin-top: 1rem;
    width: 350px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1rem;
    background-color: ${props => props.theme.red};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;
export default function SignUpPage() {
    return (
        <SignContainer>
            <Logo />
            <LinkToSignContainer>
                <div>이미 회원이신가요?</div>
                <LinkToSign to="/sign/in">로그인 하기</LinkToSign>
            </LinkToSignContainer>
            <FormContainer>
                <SignInput type="email" name="email" placeholder="이메일" />
                <SignInput type="password" name="password" placeholder="비밀번호" />
                <SignInput type="confirmPw" name="confirmPw" placeholder="비밀번호 확인" />
                <SubmitButton type="submit">가입하기</SubmitButton>
            </FormContainer>
        </SignContainer>
    );
}
