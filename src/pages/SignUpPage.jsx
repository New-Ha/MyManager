import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../assets/logo.svg?react';
import { supabase } from '../libs/supabaseClient';

export const SignContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    padding: 3rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;
    border-radius: 30px;
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
    gap: 1.25rem;
`;

export const SignInput = styled.input`
    width: 350px;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    background: none;
    border: 1.5px solid ${props => props.theme.darkGray};
    border-radius: 15px;
`;

export const SubmitButton = styled.button`
    margin-top: 1rem;
    width: 348px;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.red};
    border: 1.5px solid ${props => props.theme.black};
    border-radius: 30px;
    color: white;
    cursor: pointer;
`;

export const ErrorMessage = styled.div`
    color: ${props => props.theme.red};
    font-size: 0.75rem;
    margin-top: -1rem;
    padding-left: 4px;
`;

export default function SignUpPage() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const [confirmPw, setConfirmPw] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const newErrors = {};
        const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email);
        const validatePassword = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(userInfo.password);
        if (userInfo.email == '') {
            newErrors.email = '이메일 주소를 입력해주세요.';
        }
        if (!validateEmail) {
            newErrors.email = '유효한 이메일 주소를 입력하세요.';
        }
        if (!validatePassword) {
            newErrors.password = '비밀번호는 6자 이상이어야 하며, 특수문자를 포함해야 합니다.';
        }
        if (userInfo.password !== confirmPw) {
            newErrors.confirmPw = '비밀번호가 일치하지 않습니다.';
        }

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            const { error } = await supabase.auth.signUp(userInfo);
            setIsSubmitting(false);

            if (error) {
                setErrors('회원가입에 실패했습니다.');
                console.error(`submit error: ${error.message}`);
            } else {
                navigate('/');
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <SignContainer>
            <Logo />
            <LinkToSignContainer>
                <div>이미 회원이신가요?</div>
                <LinkToSign to="/sign/in">로그인 하기</LinkToSign>
            </LinkToSignContainer>
            <FormContainer onSubmit={handleSubmit}>
                <SignInput
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="이메일"
                />
                <ErrorMessage>{errors.email ? errors.email : ''}</ErrorMessage>
                <SignInput
                    type="password"
                    name="password"
                    value={userInfo.password}
                    minLength={6}
                    onChange={e => setUserInfo(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="비밀번호"
                />
                <ErrorMessage>{errors.password ? errors.password : ''}</ErrorMessage>
                <SignInput
                    type="password"
                    name="confirmPw"
                    value={confirmPw}
                    minLength={6}
                    onChange={e => setConfirmPw(e.target.value)}
                    placeholder="비밀번호 확인"
                />
                <ErrorMessage>{errors.confirmPw ? errors.confirmPw : ''}</ErrorMessage>
                <ErrorMessage>{errors.submit ? errors.submit : ''}</ErrorMessage>
                <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? '가입 중' : '가입하기'}
                </SubmitButton>
            </FormContainer>
        </SignContainer>
    );
}
