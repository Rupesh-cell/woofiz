import React from "react";
import Modal from "react-bootstrap/Modal";
import GoogleIcon from '@mui/icons-material/Google';
import "../Scss/login.scss";

const Login = (props) => {
	return (
		<>
			<Modal
				{...props}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="login-modal"
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<img src={GoogleIcon} alt=".." />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="justify-content-center d-flex ">
					<img src={GoogleIcon} alt="..." className="w-100" />
				</Modal.Body>
				<Modal.Footer className="login-modal-footer">
					<a
						className="login-google"
						onClick={() => {
							window.open(
								"http://localhost:3001/auth/google",
								"_self"
							);
						}}
					>
						<img src={GoogleIcon} alt=".." /> Login with Google
					</a>

					<p className="footer-text">
						If you continue, you are accepting FEBVAL{" "}
						<a href="/terms"> Terms and Conditions </a>and{" "}
						<a href="/terms"> Privacy Policy.</a>
					</p>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Login;
