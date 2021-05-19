import {useState} from 'react';
import styled from '@emotion/styled';


const Navbar = () => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			<NavbarContainer>
				<NavbarWrapper>
					<NavbarBrand>
						<img src="/images/logo-block.png" height="32px" />
					</NavbarBrand>
					<NavbarMenu>
						<div>
							<a disabled style={{color: "grey"}}>Docs<sup style={{fontSize:"10px", fontStyle:"italic"}}>coming soon</sup></a>
							<a>Github</a>
							<a>Discord</a>
							<a style={{	marginRight: "16px"}}>Contact</a>
							<LaunchButton>
								<a>Launch Wallet</a>
							</LaunchButton>
						</div>
					</NavbarMenu>
				</NavbarWrapper>
			</NavbarContainer>
			<MobileNavbarContainer modalOpen={modalOpen}>
				<MobileNavbarHeader>
					{modalOpen ? <img src="/images/logo-block-mob.png" height="55px" /> : <img src="/images/logo-block.png" height="32px" />}
					<a onClick={() => setModalOpen(!modalOpen)}>{modalOpen ? <img src="/images/hamburger-open.png" height="55px" /> : <img src="/images/hamburger-close.png" height="55px" />}</a>
				</MobileNavbarHeader>
				{modalOpen && (
					<>
						<MobileNavbarMenu>
							<a disabled style={{color: "grey"}}>Docs<sup style={{fontSize:"10px", fontStyle:"italic"}}>coming soon</sup></a>
							<a>Github</a>
							<a>Discord</a>
							<a>Contact</a>
						</MobileNavbarMenu>
						<LaunchButton>
							<a>Launch Wallet</a>
						</LaunchButton>
						<p style={{margin:"16px 0", fontSize:"12px"}}>Copyright © 2021 Horizon Blockchain Games Inc.</p>
					</>
				)}
			</MobileNavbarContainer>
		</>
	)
}

export default Navbar;

// Styling
const NavbarContainer = styled.nav`
	@media (max-width: 768px) {
		display: none;
	}
	display: block;
	min-height : 3.25rem;
	position: relative;
	margin: 48px 0;
`;
const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1080px;
	width: 100%;
	margin: 0 auto;
`;
const NavbarBrand = styled.div`
	align-items: center;
	display: flex;
`;
const NavbarMenu = styled.div`
	align-items: stretch;
	display: flex;
	> div {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-left: auto;
		a {
			padding: 0 16px;
			:hover {
				color: grey;
			}
		}
	}
`;
const LaunchButton = styled.div`
	padding: 13px 2px;
	border-radius: 20px;
	background-image: linear-gradient(20deg,#66345b,#2f3380 20%,#44888c);
	width: fit-content;
	a {
		position: relative;
		background: black;
		padding: 12px 22px !important;
		text-align: center;
		font-size: 16px;
		border-radius: 20px;
		outline: 0 !important;
		white-space: nowrap;
	}
`;
const MobileNavbarContainer = styled.nav`
	@media (max-width: 768px) {
		display: block;
	}
	display: none;
	min-height : 3.25rem;
	position: ${props => props.modalOpen ? "absolute" : "relative"};
	padding: 24px;
	background: ${props => props.modalOpen ? "linear-gradient(83.57deg,transparent 13.55%,rgba(34,201,191,.05) 98.35%),linear-gradient(265.77deg,transparent 44.4%,rgba(92,47,115,.2) 110.31%),#111" : "" };
	z-index: ${props => props.modalOpen ? "9" : ""};
	width: 100%;
	overflow: auto;
`;
const MobileNavbarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const MobileNavbarMenu = styled.div`
	margin: 64px 0;
	display: flex;
	flex-direction: column;
	a {
		font-size: 21px;
		margin: 2px 0;
	}
`;