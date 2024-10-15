"use client"
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqData = [
	{
		question: "Is there a free trial available?",
		answer: "Yes, we offer a 7-day free trial with no credit card required. You can explore all features risk-free before committing to a plan."
	},
	{
		question: "Can I create estimates for my projects?",
		answer: "Our platform allows you to quickly generate detailed estimates for your construction projects, ensuring accuracy and efficiency."
	},
	{
		question: "Does your platform help with project scheduling?",
		answer: "Yes, we provide powerful scheduling tools to help you manage timelines, resources, and milestones effectively throughout your project."
	},
	{
		question: "Can I create a customer portal for proposals?",
		answer: "Yes, you can create a custom client portal where you can share proposals, contracts, and other documents securely with your clients."
	},
	{
		question: "How does the leads management feature work?",
		answer: "Our leads management tool helps you track and organize potential clients from initial contact through conversion, so you never miss an opportunity."
	},
	{
		question: "Do I need to install any software to use your platform?",
		answer: "No, our software is completely cloud-based, meaning you can access it from anywhere using just a web browser—no installation required."
	},
	{
		question: "How does your platform help improve collaboration?",
		answer: "Our platform centralizes all your project information, making it easy to communicate and collaborate with your team, subcontractors, and clients in real-time."
	},
	{
		question: "Is there customer support available?",
		answer: "Yes, we offer 24/7 customer support to ensure you get help whenever you need it, whether it's for troubleshooting or learning how to maximize the platform's features."
	}
];

export default function FAQSection() {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredFAQs = faqData.filter(faq =>
		faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
		faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Card className="w-full max-w-4xl text-[#333] mx-auto shadow-lg mt-20">
			<CardHeader className="space-y-4">
				<CardTitle className="text-2xl font-bold text-center">Frequently Asked Questions</CardTitle>
			</CardHeader>
			<CardContent>
				<Accordion type="multiple" collapsible className="w-full space-y-2">
					{filteredFAQs.map((faq, index) => (
						<AccordionItem value={`item-${index}`} key={index} className="border rounded-lg overflow-hidden">
							<AccordionTrigger className="text-left p-4 bg-white transition-colors duration-200">
								<span className="font-medium text-sm">{faq.question}</span>
							</AccordionTrigger>
							<AccordionContent className="p-4 bg-white">
								<p className="text-gray-700">{faq.answer}</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				{filteredFAQs.length === 0 && (
					<p className="text-center text-gray-500 mt-4">No matching questions found. Please try a different search term.</p>
				)}
			</CardContent>
		</Card>
	);
}
