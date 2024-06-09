import { ThemeProvider } from 'styled-components';
import theme from './util/theme';
import Router from './Router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		width: 100vw;
		height: 100vh;
		font-family: 'Noto Sans KR'
	}
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
}
