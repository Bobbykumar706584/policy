import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 py-12">
			<div className="max-w-4xl mx-auto px-6 lg:px-8">
				<h1 className="text-4xl font-bold text-gray-900 mb-6">
					Privacy Policy
				</h1>
				<p className="text-gray-700 leading-relaxed mb-4">
					Welcome to our Privacy Policy page. Your privacy is critically
					important to us. This policy is intended to help you understand:
				</p>

				<ul className="list-disc list-inside text-gray-700 mb-4">
					<li>What data we collect and why we collect it.</li>
					<li>How we use that data.</li>
					<li>Your rights regarding your data.</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Data Collection
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					We collect various types of information in connection with the
					services we provide, including:
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
					Use of Data
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					We use the collected data for various purposes, including:
				</p>

				<ul className="list-disc list-inside text-gray-700 mb-4">
					<li>To provide and maintain our service.</li>
					<li>To notify you about changes to our service.</li>
					<li>To provide customer support.</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Your Data Rights
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					You have the right to access, update, and delete your personal data.
					You can contact us at any time to review, correct, or delete
					information.
				</p>

				<h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
					Contact Us
				</h2>
				<p className="text-gray-700 leading-relaxed">
					If you have any questions about this privacy policy, you can contact
					us by email at:{" "}
					<a
						href="mailto:support@example.com"
						className="text-blue-500 underline"
					>
						support@example.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}
