import { Inter } from 'next/font/google';
import 'normalize.css/normalize.css';
import './global.css';
import { css } from '@linaria/core';
import Navbar from '@/components/Navbar';
import { styled } from '@linaria/react';

export const metadata = {
	title: 'Estate Explorer',
	description: 'The best place to find your new home',
};

const inter = Inter({ subsets: ['latin'] });

const body = css`
	display: flex;
	flex-direction: column;
	background-color: rgb(250 250 250);
`;

const ScrollableContainer = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	padding-bottom: 5.4rem;
`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={inter.className}>
			<body className={body}>
				<Navbar />
				<ScrollableContainer>{children}</ScrollableContainer>
			</body>
		</html>
	);
};

export default RootLayout;
