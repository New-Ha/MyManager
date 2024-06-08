import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    SignContainer,
    LinkToSignContainer,
    LinkToSign,
    FormContainer,
    SignInput,
    SubmitButton,
    ErrorMessage,
} from './SignUpPage';
import Logo from '../assets/logo.svg?react';
import { supabase } from '../libs/supabaseClient';

export default function SignInPage() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword(userInfo);
        if (error) {
            setErrors('아이디 또는 비밀번호를 확인해주세요.');
            console.error(error.message);
        } else {
            navigate('/');
        }
    };

    return (
        <SignContainer>
            <Logo />
            <LinkToSignContainer>
                <div>회원이 아니신가요?</div>
                <LinkToSign to="/sign/up">회원가입 하기</LinkToSign>
            </LinkToSignContainer>
            <FormContainer onSubmit={handleSubmit}>
                <SignInput
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="이메일"
                />
                <SignInput
                    type="password"
                    name="password"
                    value={userInfo.password}
                    onChange={e => setUserInfo(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="비밀번호"
                />
                <ErrorMessage>{errors !== '' ? errors : ''}</ErrorMessage>
                <SubmitButton type="submit">로그인</SubmitButton>
            </FormContainer>
        </SignContainer>
    );
}
