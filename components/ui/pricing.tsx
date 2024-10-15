"use client"
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
	const [billingPeriod, setBillingPeriod] = useState("monthly");

	const toggleBillingPeriod = () => {
		setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly");
	};

	const professionalBasePrice = billingPeriod === "monthly" ? 99 : 89;
	const extraUserPrice = billingPeriod === "monthly" ? 30 : 27;

	return (
		<section className="w-full py-12 md:py-12 lg:py-12">
			{/* Billing Period Toggle */}
			<div className="container px-4 md:px-6 mb-8">
				<div className="flex items-center justify-center">
					<span
						className={`${billingPeriod === "monthly" ? "text-primary font-bold" : ""
							}`}
					>
						Monthly Billing
					</span>
					<Switch
						checked={billingPeriod === "yearly"}
						onCheckedChange={toggleBillingPeriod}
						className="mx-2"
					/>
					<span
						className={`${billingPeriod === "yearly" ? "text-primary font-bold" : ""
							}`}
					>
						Yearly Billing
					</span>
				</div>
				<p className="text-center text-sm text-green-500 mt-2">
					{billingPeriod === "yearly"
						? "You save 10% with yearly billing!"
						: "Save 10% with yearly billing!"}
				</p>
			</div>
			{/* Pricing Plans */}
			<div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-8">
				{/* Professional Plan */}
				<div className="grid gap-6">
					<Card className="relative flex flex-col gap-6 p-6 md:p-8">
						{/* Best Plan Tag */}
						<div className="absolute top-0 right-0 mt-4 mr-4">
							<span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">
								Best Plan
							</span>
						</div>
						<div className="space-y-2">
							<h3 className="text-2xl font-bold">Professional</h3>
							<p className="text-4xl font-bold">
								${professionalBasePrice}/mo
							</p>
							<p className="text-sm text-muted-foreground">
								Includes 2 users, extra users ${extraUserPrice}/mo per user
							</p>
						</div>
						<ul className="space-y-2 text-muted-foreground">
							{[
								"Estimates",
								"Gantt",
								"Tasks",
								"Gallery",
								"Documents",
								"Customer Portal",
							].map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<CheckIcon />
									{feature}
								</li>
							))}
						</ul>
						<a href="/schedule">
							<Button className="w-full">Get Started</Button>
						</a>
					</Card>
				</div>
				{/* Enterprise Plan */}
				<div className="grid gap-6">
					<Card className="flex flex-col gap-6 p-6 md:p-8">
						<div className="space-y-2">
							<h3 className="text-2xl font-bold">Enterprise</h3>
							<p className="text-4xl font-bold">Let&apos;s Talk</p>
						</div>
						<ul className="space-y-2 text-muted-foreground">
							{[
								"All Professional features",
								"Unlimited users",
								"Custom feature requests",
								"24/7 Dedicated Support",
							].map((feature) => (
								<li key={feature} className="flex items-center gap-2">
									<CheckIcon />
									{feature}
								</li>
							))}
						</ul>
						<a href="/contact">
							<Button variant="outline" className="w-full">
								Let&apos;s Talk
							</Button>
						</a>
					</Card>
				</div>
			</div>
		</section>
	);
}

function CheckIcon() {
	return <FaCheck size={16} className="text-primary" />;
}

