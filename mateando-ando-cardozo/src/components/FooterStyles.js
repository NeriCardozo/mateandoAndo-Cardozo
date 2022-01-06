import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 0px 20px 0px;
background: black;
position: absolute;
width: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(3,
						minmax(185px, 1fr));
grid-gap: 20px;
}
`;


export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
