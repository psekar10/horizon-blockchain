import React from 'react';
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";

const Contact = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
	return (
		<div style={{margin: "8rem 0"}}>
			<ContactHeader>
				<h2>We're here to help</h2>
				<p>Sequence helps you build the next generation of Internet economies and experiences. <a href="https://chat.sequence.build" target="_blank">Join our Discord</a> to chat with our team.<br />For additional support, reach out below.</p>
			</ContactHeader>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<FieldBody>
						<Label htmlFor="email">Your Email</Label>
						<Input {...register("email")} />
					</FieldBody>
					<TwoRowField>
						<FieldBody style={{marginRight:"16px"}}>
							<Label htmlFor="fname">First Name</Label>
							<Input {...register("fname")} />
						</FieldBody>
						<FieldBody>
							<Label htmlFor="lname">Last Name</Label>
							<Input {...register("lname")} />
						</FieldBody>
					</TwoRowField>
					<FieldBody>
						<Label htmlFor="website">Project Website</Label>
						<Input {...register("website")} />
					</FieldBody>
					<FieldBody>
						<Label htmlFor="about">Tell us about your project</Label>
						<TextArea {...register("about")} />
					</FieldBody>
				</FormContainer>
				
				<ButtonWrapper type="submit">Submit</ButtonWrapper>
			</Form>
			<FootNote>We typically respond to inquiries within 48 hours<br />You can also email us directly at <a href="mailto:hello@sequence.build">hello@sequence.build</a></FootNote>
		</div>
	)
}

export default Contact;

// Table Wrapper
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 56rem;
	width: 100%;
	margin: 16px auto;
	margin-bottom: 16px;
	padding: 0 24px;
`;
const ContactHeader = styled.div`
	max-width:20rem;
	margin: 0 auto;
	text-align: center;
	> h2 {
		margin-bottom: 16px;
	}
	@media (min-width: 640px){
		max-width:42rem;
		> h2 {
			font-size: 40px;
		}
		> p {
			font-size: 18px;
		}
	}
`;
const TwoRowField = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 0%;
	@media (min-width: 768px){
		flex-direction: row;
	}
`;
const FieldBody = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom : 32px;
	text-align: left;
	width: 100%;
`;
const Label = styled.label`
	font-size: 15px;
	margin-bottom: 8px;
`;
const Input = styled.input`
	border: 2px solid #2a2a2a;
	background-color: transparent;
	box-sizing: border-box;
	border-radius: 15px;
	min-height: 60px;
	outline: none;
	padding: 0 20px;
	font-size: 20px;
	color: #fff;
	:focus {
		border: 2px solid #7a7a7a;
	}
`;
const TextArea = styled.textarea`
	border: 2px solid #2a2a2a;
	background-color: transparent;
	box-sizing: border-box;
	border-radius: 15px;
	min-height: 200px;
	outline: none;
	padding: 10px 20px;
	resize: none;
	color: #fff;
`;
const ButtonWrapper = styled.button`
	display: block;
	border: none;
	position: relative;
	cursor: pointer;
	min-width: 80px;
	max-width: 250px;
	padding: 14px 40px;
	text-align: center;
	border-radius: 20px;
	outline: 0!important;
	white-space: nowrap;
	background-image: linear-gradient(20deg,#66345b,#2f3380 20%,#44888c 60%,#44888c 65%,#2f3380);
	background-size: 200%;
	color: #cccbda;
`;
const FootNote = styled.p`
	text-align: center !important;
	color: #999;
	font-size: 15px;
	margin-top: 48px;

`;