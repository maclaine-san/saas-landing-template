
"use client"
import Image from "next/image";
import logo from "/logo-01.jpg"
import { MagicCard } from "@/components/magicui/magic-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Meteors from "@/components/ui/meteors";

export default function Schedule() {
	const [loading, setLoading] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [payload, setPayload] = useState({
		name: "",
		email: "",
		company_name: "",
		company_size: "",
		additional_info: "",
	})

	const submit = async () => {
		setLoading(true)
		const response = await fetch("/api/schedule", {
			method: "POST",
			body: JSON.stringify({ ...payload })
		})
		const data = await response.json()
		if (data.message) {
			setLoading(false)
			setSubmitted(true)
		}
	}

	return (
		<main className="flex flex-col w-full h-auto text-[#333] scroll-smooth">
			<div className="relative flex w-full flex-col overflow-hidden bg-white">
				<Meteors number={60} />
				<Head>
					<title>SaaS Landing</title>
					<meta
						property="og:description"
						content="Schedule Demo for FREE. Any day and time that fits your schedule."
						key="description"
					/>
				</Head>
				<Header />
				<div className="flex flex-col md:flex-row items-start mt-20 px-10 py-20">
					<div className="md:w-1/2 md:pr-10">
						<p className="text-4xl font-bold">
							Book your free demo of SaaS Landing
						</p>
						<p className="text-xl font-medium mt-4">
							Talk to a consultant to:
						</p>
						<div className="mt-4 space-y-4">
							{/* List items with FaCheckCircle */}
							<div className="flex space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Explore how SaaS Landing is effectively utilized by teams in
									addressing challenges such as capacity planning, project and
									client profitability, and team productivity.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Discover seamless methods for integrating SaaS Landing into your
									teams daily workflow with minimal disruption.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Seek custom solutions and receive onboarding support tailored to
									your teams requirements.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Learn about advanced features that can optimize your construction
									management processes.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Get insights on best practices for maximizing productivity and
									efficiency using SaaS Landing.
								</p>
							</div>
							<div className="flex items-start space-x-4">
								<div>
									<FaCheckCircle size={24} className="text-green-600 mt-1" />
								</div>
								<p>
									Understand how to leverage data analytics for better
									decision-making in your projects.
								</p>
							</div>
						</div>
					</div>
					<div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
						<MagicCard
							className="cursor-pointer py-12 px-10 flex-col items-center justify-center shadow-2xl"
							gradientColor={"#D9D9D955"}
						>
							{!submitted && (
								<div className="space-y-4">
									<p className="text-xl mb-4 text-center">
										Help us prepare a personalized demo for you by telling us
										more about you!
									</p>
									<Input
										placeholder="Full name"
										onChange={(e) =>
											setPayload({ ...payload, name: e.target.value })
										}
									/>
									<Input
										placeholder="Email"
										onChange={(e) =>
											setPayload({ ...payload, email: e.target.value })
										}
									/>
									<Input
										placeholder="Company name"
										onChange={(e) =>
											setPayload({ ...payload, company_name: e.target.value })
										}
									/>
									<Input
										placeholder="Company Size (10 - 500)"
										onChange={(e) =>
											setPayload({ ...payload, company_size: e.target.value })
										}
									/>
									<Textarea
										placeholder="Which feature do you want us to prioritize in your demo?"
										onChange={(e) =>
											setPayload({
												...payload,
												additional_info: e.target.value,
											})
										}
									/>
									<Button
										disabled={loading}
										onClick={() => submit()}
										className="w-full"
									>
										{loading ? "Please wait..." : "Send Request"}
									</Button>
								</div>
							)}
							{submitted && (
								<p className="text-center">
									Your booking request has been submitted. Please check your
									email.
								</p>
							)}
						</MagicCard>
					</div>
				</div>

				{/* Footer Section */}
				<div className="mt-20 border-t">
					<div className="flex flex-col md:flex-row mt-10 md:mt-20 bg-white px-10 py-5">
						<div className="md:w-1/2 flex items-center">
							<Image
								className="h-16 w-16 object-contain"
								src={"/logo-01.jpg"}
								alt="logo"
								width={64}
								height={64}
							/>
							<div className="flex flex-col ml-3">
								<p className="font-bold text-lg">Builder</p>
								<p className="text-gray-500 text-sm">Powered by SaaS Landing</p>
							</div>
						</div>
						<div className="md:w-1/2 flex flex-col md:flex-row justify-between mt-5 md:mt-0">
							<div className="mb-5 md:mb-0">
								<p className="text-base font-semibold mb-2">Features</p>
								<p className="text-base text-gray-700">CRM</p>
								<p className="text-base text-gray-700">Inventory</p>
								<p className="text-base text-gray-700">Payroll</p>
								<p className="text-base text-gray-700">Purchase Orders</p>
								<p className="text-base text-gray-700">Job Orders</p>
							</div>
							<div className="mb-5 md:mb-0">
								<p className="text-base font-semibold mb-2">Company</p>
								<p className="text-base text-gray-700">Blog</p>
								<p className="text-base text-gray-700">Customers</p>
							</div>
							<div>
								<p className="text-base font-semibold mb-2">Resources</p>
								<p className="text-base text-gray-700">Help Center</p>
								<p className="text-base text-gray-700">Mobile Apps</p>
							</div>
						</div>
					</div>
					<div className="flex border-t py-2 bg-gray-900 gap-x-6 px-10">
						<p className="text-sm text-gray-300">© 2024 SaaS Landing</p>
						<p className="text-sm text-gray-300">Terms and Conditions</p>
						<p className="text-sm text-gray-300">Privacy Policy</p>
					</div>
				</div>
			</div>
		</main>
	)
}

