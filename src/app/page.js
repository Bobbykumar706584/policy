import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 py-12">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-gray-900 mb-6">
					Privacy Policy for Tyari NEET Ki
				</h1>
				<p className="text-gray-700 leading-relaxed mb-4">
					At Tyari NEET Ki, we respect your privacy and are committed to
					protecting the personal information you provide to us. This Privacy
					Policy explains how we collect, use, and safeguard your information in
					connection with our NEET preparation app.
				</p>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Information We Collect
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					Personal Information: We collect youraccount. Usage Data: We gather
					information about how you interact with the app (e.g., features
					accessed, errors encountered) to improve user experience. Payment
					Information: Payments are processed through Google Play’s secure
					billing system, and we do not store any payment-related information.
				</p>

				<ul className="list-disc list-inside text-gray-700 mb-4">
					<li>
						Personal Information: such as name, email address, and phone number.
					</li>
					<li>
						Usage Data: which includes information about how our services are
						accessed and used.
					</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					How We Use Your Information
				</h2>
				<ul className="list-disc list-inside text-gray-700 mb-4">
					<li>To create, manage, and maintainyour account.</li>
					<li>To process subscription payments securely via Google Play.</li>
					<li>To provide support and improve your overall experience.</li>
					<li>
						To inform you of updates, changes, or new features in the app.
					</li>
					<li>To comply with any legal requirements.</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Content Protection
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					To maintain the integrity of our educational content, we strictly
					prohibit: Taking screenshots of the app’s content. Recording the app’s
					screen. Our app includes built-in security features to prevent screen
					captures or recordings. Any attempt to bypass these restrictions may
					result in the suspension or termination of the user's account.
				</p>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Data Sharing
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					We do not share your personal information with third parties, except
					in the following circumstances: Legal Obligations: We may share data
					when required by law or in response to legal requests. Service
					Providers: We may share information with trusted third parties who
					assist us in app management, such as analytics or support services,
					under strict confidentiality agreements.
				</p>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Security
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					We implement appropriate security measures to protect your personal
					data from unauthorized access, alteration, or disclosure. All
					sensitive information is processed through encrypted, secure channels.
				</p>
				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Your Data Rights
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					Access: You can request access to the personal information we hold
					about you. Correction: You have the right to request that we update
					any incorrect or incomplete data. Deletion: You may request the
					deletion of your account and personal data, subject to legal
					obligations.
				</p>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Contact Us
				</h2>
				<p className="text-gray-700 leading-relaxed">
					For any questions or concerns regarding Privacy Policy, please contact
					us at:
					<a
						href="mailto:sanjaycizmar@gmail.com"
						className="text-blue-500 underline"
					>
						sanjaycizmar@gmail.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}
