import React from 'react'
import "./Contacts.css"
import { useParams,useLocation } from 'react-router-dom'
const ContactUS = (props) => {
 
 const location=useLocation();
 const loc=location.pathname
  
  return (
		<div className="contact-main-div animate__animated animate__fadeInLeft">
			<div className="talk-div">
				<p>LETS TALK</p>
				<div className="form-div">
					<div>
						<label>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18V18Z"
									fill="black"
								/>
							</svg>
						</label>
						<input placeholder="Your name"></input>
					</div>

					<div>
						<label>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.72 2.03003C11.2895 1.92589 9.8533 2.131 8.50909 2.63139C7.16489 3.13178 5.94418 3.91574 4.92996 4.92996C3.91574 5.94418 3.13178 7.16489 2.63139 8.50909C2.131 9.8533 1.92589 11.2895 2.03003 12.72C2.39003 18.01 7.01003 22 12.31 22H16C16.55 22 17 21.55 17 21C17 20.45 16.55 20 16 20H12.33C8.60003 20 5.18003 17.58 4.25003 13.97C2.76003 8.17003 8.16003 2.76003 13.96 4.26003C17.58 5.18003 20 8.60003 20 12.33V13.43C20 14.22 19.29 15 18.5 15C17.71 15 17 14.22 17 13.43V12.18C17 9.67003 15.22 7.41003 12.74 7.06003C11.951 6.9427 11.1453 7.01556 10.3901 7.27255C9.63495 7.52953 8.95208 7.9632 8.39837 8.53745C7.84466 9.1117 7.43615 9.80991 7.20684 10.574C6.97752 11.338 6.93405 12.1458 7.08003 12.93C7.25542 13.875 7.69965 14.7493 8.35947 15.4482C9.01929 16.147 9.86668 16.6407 10.8 16.87C12.64 17.3 14.39 16.71 15.54 15.54C16.43 16.76 18.21 17.4 19.84 16.75C21.18 16.22 22 14.84 22 13.4V12.32C22 7.01003 18.01 2.39003 12.72 2.03003ZM12 15C10.34 15 9.00003 13.66 9.00003 12C9.00003 10.34 10.34 9.00003 12 9.00003C13.66 9.00003 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
									fill="black"
								/>
							</svg>
						</label>
						<input placeholder="Your email"></input>
					</div>

					<div>
						<label>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.8 2.40002C7.32261 2.40002 6.86477 2.58967 6.52721 2.92723C6.18964 3.2648 6 3.72263 6 4.20002V19.8C6 20.2774 6.18964 20.7352 6.52721 21.0728C6.86477 21.4104 7.32261 21.6 7.8 21.6H16.2C16.6774 21.6 17.1352 21.4104 17.4728 21.0728C17.8104 20.7352 18 20.2774 18 19.8V4.20002C18 3.72263 17.8104 3.2648 17.4728 2.92723C17.1352 2.58967 16.6774 2.40002 16.2 2.40002H7.8ZM10.8 16.8H13.2C13.3591 16.8 13.5117 16.8632 13.6243 16.9758C13.7368 17.0883 13.8 17.2409 13.8 17.4C13.8 17.5592 13.7368 17.7118 13.6243 17.8243C13.5117 17.9368 13.3591 18 13.2 18H10.8C10.6409 18 10.4883 17.9368 10.3757 17.8243C10.2632 17.7118 10.2 17.5592 10.2 17.4C10.2 17.2409 10.2632 17.0883 10.3757 16.9758C10.4883 16.8632 10.6409 16.8 10.8 16.8Z"
									fill="black"
								/>
							</svg>
						</label>
						<input placeholder="Your phone number"></input>
					</div>

					<div>
						<input
							style={{ marginLeft: "33px" }}
							placeholder="Tell us about your project"
						></input>
					</div>
				</div>

				<div className="form-image"></div>

				<div className="form-num">
					<p>+965 67666170</p>
					<p>+965 22384672</p>
				</div>
			</div>

			<div className="map-div">
				<p>VISIT US</p>
				<div className="map-image"></div>
			</div>
		</div>
	);
}

export default ContactUS