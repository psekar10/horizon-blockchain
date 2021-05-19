import {useState} from 'react';
import styled from '@emotion/styled';

const DeveloperSDK = () => {
	return (
		<DeveloperContainer>
			<DeveloperWrapper>
				<DeveloperHeader>
					<h2>Our SDK + APIs make blockchain simple and user friendly</h2>
					<p>And they give you everything you’ll need to run your application beautifully on the blockchain.</p>
				</DeveloperHeader>
				<GridContainer>
					<GridWrapper>
						<GridBoxComponent 
							title="Smart Wallet built for a Multi-Chain World" 
							hoverDescription="The Sequence Wallet empowers your users with a friendly and secure experience for all of Ethereum. Plus, you'll never get stuck: you and your users can easily move between chains to capitalize on the lowest gas fees and highest security." 
							gridColumn="1/3" 
						/>
						<GridBoxComponent 
							title="Web & Backend SDKs" 
							hoverDescription="Powerful developer libraries and APIs that seamlessly integrate with Ethereum." 
						/>
						<GridBoxComponent 
							title="Audited Smart Contract Library" 
							hoverDescription="A standard library of audited smart contracts. Check out our Github." 
						/>
						<GridBoxComponent 
							title="Enhanced Transactions" 
							hoverDescription="Meta transaction support means users can batch transactions and pay for gas in the token of their choice. And, Sequence Meta transactions work with all existing contracts (without any changes required to your contracts)." 
							gridRow="2/4"
						/>
						<GridBoxComponent 
							title="Easy Minting, Transfer and Exchange of NFTs and Digital Items" 
							hoverDescription="Our widely-adopted ERC-1155 smart contracts help you easily create digital collectibles. Plus, enhance your capabilities with our NFT APIs for querying metadata and balances." 
							gridColumn="4"
							gridRow="2/4"
						/>
						<GridBoxComponent 
							title="Social / Email Login & Recovery for Wallets" 
							hoverDescription="Easily sign in via Google, Facebook or other socials. No blockchain knowledge required." 
						/>
						<GridBoxComponent 
							title="Niftyswap (NFT) Market Protocol" 
							hoverDescription="Offer your users an ecommerce-like market experience for trading ERC-1155 tokens. Users will love instant liquidity with Niftyswap's AMM design! Build your own custom UI's — we've already built the backend for you." 
							gridColumn="3" 
							gridRow="2/4"
						/>
						<GridBoxComponent 
							title="Friendly Payments" 
							hoverDescription="Easy credit card on-ramps, and your users don’t need to own crypto to pay fees." 
						/>
					</GridWrapper>
				</GridContainer>
			</DeveloperWrapper>
		</DeveloperContainer>
	)
}

export default DeveloperSDK;

const GridBoxComponent = ({title, hoverDescription, gridColumn="", gridRow=""}) => {
	const [description, setDescription] = useState(false);
	return (
		<BoxContainer gridColumn={gridColumn} gridRow={gridRow} onMouseEnter={()=>setDescription(true)} onMouseLeave={()=>setDescription(false)}>
			<h2>{title}</h2>
			<SpanWrapper description={description}>
				<p>{hoverDescription}</p>
			</SpanWrapper>
		</BoxContainer>	
	)
}


const DeveloperContainer = styled.div`
	max-width : 78rem;
	margin: 0 auto;
`;
const DeveloperWrapper = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const DeveloperHeader = styled.div`
	max-width: 40rem;
	h2 {
		font-size: 40px;
		text-align: center;
		margin-bottom: 32px;
	}
	p {
		padding: 0 64px;
		font-size: 18px;
	}
`; 
const GridContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
	margin-top: 100px;
`;
const GridWrapper = styled.div`
	padding: 0 15px;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 175px;
	grid-gap: 1rem;
	@media (min-width: 1000px) {
		grid-template-columns: 280px;
	}
`;
const BoxContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	text-align: left;
	background: #151515;
	color: white;
	height: 100%;
	min-height: 175px;
	border-radius: 20px;
	padding: 0 26px;
	position: relative;
	cursor: pointer;
	h2 {
		font-size: 21px;
	}
	@media (min-width: 1000px) {
		grid-column: ${props => props.gridColumn};
		grid-row: ${props => props.gridRow};
	}
`;
const SpanWrapper = styled.span`
	display: ${props => props.description ? "flex" : "none"};
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	align-items: flex-start;
	padding:24px;
	border-radius: 20px;
	background:linear-gradient(0deg,rgba(21,21,21,.2),rgba(21,21,21,.2)),linear-gradient(0deg,rgba(42,42,42,.4),rgba(42,42,42,.4)),linear-gradient(222.39deg,rgba(109,14,88,0) 68.93%,#8b1070 115.85%),linear-gradient(68.44deg,rgba(1,110,155,0) 22.18%,#10aeb8 81.61%),#0b0743;
	justify-content: center;
	p {
		margin: 0;
		font-size: 18px;
		color: #ffffffcc;
	}
`;