
// FeatureSection.jsx
"use client"
import React from 'react';
import {
	GanttChart,
	DollarSign,
	FileText,
	Image,
	Users,
	CheckSquare,
} from 'lucide-react';

function FeatureItem({ Icon, title, description }) {
	return (
		<div className="flex space-x-4">
			<div className="flex-shrink-0">
				<div className="p-3 bg-gray-100 rounded-lg">
					<Icon className="w-6 h-6 text-builder" />
				</div>
			</div>
			<div>
				<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
				<p className="mt-1 text-gray-600">{description}</p>
			</div>
		</div>
	);
}

export default function FeatureSection() {
	const features = [
		{
			Icon: GanttChart,
			title: 'Gantt',
			description:
				'Visualize and manage your project timeline with our intuitive Gantt chart, helping you track progress, set dependencies, and stay on schedule.',
		},
		{
			Icon: DollarSign,
			title: 'Estimates',
			description:
				'Quickly generate detailed and accurate cost estimates for your construction projects, ensuring you stay within budget and win more bids.',
		},
		{
			Icon: FileText,
			title: 'Documents',
			description:
				'Store, organize, and share project-related documents securely with your team and clients, accessible anytime from any device.',
		},
		{
			Icon: Image,
			title: 'Gallery',
			description:
				'Showcase your completed projects or ongoing work with a professional image gallery, easily shareable with clients or stakeholders.',
		},
		{
			Icon: Users,
			title: 'Customer Portal',
			description:
				'Create a branded, secure portal where clients can view proposals, track project progress, and access important documents in real-time.',
		},
		{
			Icon: CheckSquare,
			title: 'Tasks',
			description:
				'Manage and assign tasks to your team members, track their progress, and ensure that every part of the project is moving forward efficiently.',
		},
	];

	return (
		<section className="py-12 bg-white mt-20">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<FeatureItem
							key={index}
							Icon={feature.Icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
