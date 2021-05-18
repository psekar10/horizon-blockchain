import React from 'react';
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";

const Contact = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
	return (
		<>
			<ContactHeader>
				<h2>We're here to help</h2>
				<p>Sequence helps you build the next generation of Internet economies and experiences. <a href="https://chat.sequence.build" target="_blank">Join our Discord</a> to chat with our team.<br />For additional support, reach out below.</p>
			</ContactHeader>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<FieldBody>
						<Label htmlFor="email">Your Email</Label>
						<Input defaultValue="test" {...register("email")} />
					</FieldBody>
					<TwoRowField>
						<FieldBody>
							<Label htmlFor="fname">First Name</Label>
							<Input defaultValue="test" {...register("fname")} />
						</FieldBody>
						<FieldBody>
							<Label htmlFor="lname">Last Name</Label>
							<Input defaultValue="test" {...register("lname")} />
						</FieldBody>
					</TwoRowField>
					<FieldBody>
						<Label htmlFor="website">Project Website</Label>
						<Input defaultValue="test" {...register("website")} />
					</FieldBody>
					<FieldBody>
						<Label htmlFor="about">Tell us about your project</Label>
						<TextArea {...register("about")} />
					</FieldBody>
				</FormContainer>
				
				<ButtonWrapper type="submit">Submit</ButtonWrapper>
			</Form>
			<FootNote>We typically respond to inquiries within 48 hours<br />You can also email us directly at <a href="mailto:hello@sequence.build">hello@sequence.build</a></FootNote>
		</>
	)
}

export default Contact;

// Table Wrapper
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-contents: center;
	align-items: center;
`;
const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 56rem;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 16px;
`;
const ContactHeader = styled.div`
	max-width:42rem;
	margin: 0 auto;
	margin-bottom: 64px;
	text-align: center;
	> h2 {
		margin-bottom: 16px;
		font-size: 40px;
	}
	> p {
		font-size: 18px;
	}
`;
const TwoRowField = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 0%;
`;
const FieldBody = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 8px;
	margin-bottom : 32px;
	text-align: left;
	width: 100%;
`;
const Label = styled.label`
	font-weight: 500;
	font-size: 15px;
	line-height: 140%;
	color: #999;
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
	position: relative;
	cursor: pointer;
	min-width: 80px;
	max-width: 250px;
	padding: 10px 40px;
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