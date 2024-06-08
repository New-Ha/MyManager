import { SignContainer, LinkToSignContainer, LinkToSign, FormContainer, SignInput, SubmitButton } from './SignUpPage';
import Logo from '../assets/logo.svg?react';

export default function SignInPage() {
    return (
        <SignContainer>
            <Logo />
            <LinkToSignContainer>
                <div>회원이 아니신가요?</div>
                <LinkToSign to="/sign/up">회원가입 하기</LinkToSign>
            </LinkToSignContainer>
            <FormContainer>
                <SignInput type="email" name="email" placeholder="이메일" />
                <SignInput type="password" name="password" placeholder="비밀번호" />
                <SubmitButton type="submit">로그인</SubmitButton>
            </FormContainer>
        </SignContainer>
    );
}
