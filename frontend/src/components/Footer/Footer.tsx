import React from "react";
import styles from "./Footer.module.scss";

// Define the props type
type FooterProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const Footer: React.FC<FooterProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logoSection}>
					<img src={"./images/webgeodesicslogo.svg"} className={styles.logoContainer} alt="web geodesics logo" />
					<div className={styles.logoContainer}></div>
				</div>
				<div className={styles.linksSection}>
					<div className={styles.link}>{content.content[i++].text}</div>
					<div className={styles.link}>{content.content[i++].text}</div>
					<div className={styles.link}>{content.content[i++].text}</div>
					<div className={styles.link}>{content.content[i++].text}</div>
				</div>
				<div className={styles.socialLinksSection}>
					<div className={styles.socialIcon}>
						<img className={styles.linkedin} style={{ fill: "white", stroke: "white" }} src="./images/github.svg" alt="Github button" />
					</div>
					<div className={styles.socialIcon}>
						<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20 10.3033C20 4.7467 15.5229 0.242188 10 0.242188C4.47715 0.242188 0 4.7467 0 10.3033C0 15.325 3.65684 19.4874 8.4375 20.2422V13.2116H5.89844V10.3033H8.4375V8.08671C8.4375 5.56515 9.9305 4.17231 12.2146 4.17231C13.3088 4.17231 14.4531 4.36882 14.4531 4.36882V6.8448H13.1922C11.95 6.8448 11.5625 7.62041 11.5625 8.41609V10.3033H14.3359L13.8926 13.2116H11.5625V20.2422C16.3432 19.4874 20 15.3252 20 10.3033Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M13 0.242188H5C2.23858 0.242188 0 2.48077 0 5.24219V13.2422C0 16.0036 2.23858 18.2422 5 18.2422H13C15.7614 18.2422 18 16.0036 18 13.2422V5.24219C18 2.48077 15.7614 0.242188 13 0.242188ZM16.25 13.2422C16.2445 15.0348 14.7926 16.4867 13 16.4922H5C3.20735 16.4867 1.75549 15.0348 1.75 13.2422V5.24219C1.75549 3.44954 3.20735 1.99768 5 1.99219H13C14.7926 1.99768 16.2445 3.44954 16.25 5.24219V13.2422ZM13.75 5.49219C14.3023 5.49219 14.75 5.04447 14.75 4.49219C14.75 3.93991 14.3023 3.49219 13.75 3.49219C13.1977 3.49219 12.75 3.93991 12.75 4.49219C12.75 5.04447 13.1977 5.49219 13.75 5.49219ZM9 4.74219C6.51472 4.74219 4.5 6.75691 4.5 9.24219C4.5 11.7275 6.51472 13.7422 9 13.7422C11.4853 13.7422 13.5 11.7275 13.5 9.24219C13.5027 8.04789 13.0294 6.90176 12.1849 6.05727C11.3404 5.21278 10.1943 4.73953 9 4.74219ZM6.25 9.24219C6.25 10.761 7.4812 11.9922 9 11.9922C10.5188 11.9922 11.75 10.761 11.75 9.24219C11.75 7.72339 10.5188 6.49219 9 6.49219C7.4812 6.49219 6.25 7.72339 6.25 9.24219Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white" />
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.creditsSection}>
				<div className={styles.divider}></div>
				<div className={styles.creditsRow}>
					<div className={styles.rightsReserved}>© 2023 Web-Geodesics. All rights reserved.</div>
					<div className={styles.footerLinks}>
						<div className={styles.privacyPolicy}>Privacy Policy</div>
						<div className={styles.termsOfService}>Terms of Service</div>
						<div className={styles.cookiesSettings}>Cookie Settings</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
