'use client'
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

// Customer reviews data (integrated)
const customerReviews = [
	{
		name: "John M.",
		role: "General Contractor",
		rating: 5,
		review: "SaaS Landing has changed the way we handle projects completely. Communication is easier, and real-time updates mean everyone stays on track. We're saving time and avoiding costly mistakes—it’s been a game-changer for us."
	},
	{
		name: "Emily R.",
		role: "Project Manager",
		rating: 5,
		review: "I can't say enough about how great this platform is. The estimation tools are super accurate, and being able to manage multiple jobsites remotely has made my life so much easier. It’s honestly a must-have for any project manager."
	},
	{
		name: "Dave S.",
		role: "Construction Foreman",
		rating: 4,
		review: "We’ve been using Saas Landing Builder for a while now, and it really helps keep our team organized. It’s simple to navigate, and whenever we've had questions, the support team has been quick to help. Overall, it’s a solid tool."
	},
	{
		name: "Sarah L.",
		role: "Subcontractor",
		rating: 5,
		review: "As a subcontractor, this tool has made everything much more transparent and easier to manage. I always know what’s expected of me, and all the documents I need are in one place. It’s really streamlined my work."
	},
	{
		name: "Michael B.",
		role: "Commercial Builder",
		rating: 5,
		review: "The floor plan measurement feature is a huge time-saver for us. It’s super accurate and cuts down on manual calculations. On top of that, the whole platform has made our projects more organized and efficient. Definitely worth it."
	},
	{
		name: "Karla P.",
		role: "Residential Contractor",
		rating: 4,
		review: "Saas Landing Builder is very intuitive and easy to learn. Our team had to get used to it at first, but now we can’t imagine working without it. It's been a worthwhile investment for us, and we’re seeing the benefits every day."
	},
	{
		name: "Alex J.",
		role: "Site Supervisor",
		rating: 5,
		review: "Saas Landing Builder has everything we need in one place—estimates, reports, daily logs—you name it. It’s really cut down on all the back-and-forth and helped us stay on top of things. I’d recommend it to anyone."
	}
];
// Split reviews for marquee rows
const firstRow = customerReviews.slice(0, customerReviews.length / 2);
const secondRow = customerReviews.slice(customerReviews.length / 2);

const ReviewCard = ({
	img,
	name,
	role,
	review,
}: {
	img: string;
	name: string;
	role: string;
	review: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full bg-builder" width="32" height="32" alt="" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{role}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{review}</blockquote>
		</figure>
	);
};

export function ReviewsSection() {
	return (
		<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-4">
			<Marquee pauseOnHover className="[--duration:40s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:30s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}

