import Image from "next/image"
import logo from "/logo-01.jpg"
import product from "../public/product-screenshot.png"
import WordRotate from "@/components/magicui/word-rotate";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Pricing from "@/components/ui/pricing";
import Meteors from "@/components/ui/meteors";
import { BorderBeam } from "@/components/ui/border-beam";
import { ArrowRight } from "lucide-react";
import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import PriceComparison from "@/components/Pricing";
import FAQSection from "@/components/Faq";
import Header from "@/components/Header";
import FeatureSection from "@/components/Features";
import { ReviewsSection } from "@/components/Reviews";

export default function Home() {
	return (
		<main className="flex flex-col w-full h-auto text-[#333] scroll-smooth">
			<div className="relative flex w-full flex-col overflow-hidden rounded-lg bg-background">
				<Meteors number={60} />
				{/** header section **/}
				<Header />
				{/** end of header section **/}
				<div className="flex justify-center mt-[20%] lg:mt-[10%] mx-8 flex-col items-center">
					<WordRotate
						duration={1800}
						className="baloo-bhai-2-bold text-builder text-7xl md:text-[5.8rem] font-bold"
						words={["MANAGE", "GROW", "IMPROVE"]}
					/>
					<p className="text-4xl md:text-[2.3rem] lg:[3rem] baloo-bhai-2-bold md:w-[40vw] text-center">
						{" YOUR BUSINESS WITH SAAS"}</p>
					<p className="text-base mt-4 font-regular text-center">Lorem ipsum dolor emet</p>
					<p className="text-base mt-4 font-regular">Price starts at only <span className="font-bold text-green-600">$60</span>!</p>
					<p className="text-xl mt-4 font-regular text-center">SAVE up to <span className="font-bold text-green-600">70%</span> in costs compared to other sites.</p>
					<div className="flex flex-col md:flex-row items-center md:items-baseline justify-between mt-10 text-center gap-x-6">
						<a href="/schedule">
							<ShimmerButton className="mb-2">
								<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-base">
									7 Day FREE Trial
								</span>
							</ShimmerButton>
							<span className="text-xs text-center">No credit card required</span>
						</a>
						<a href="#price-comparison">
							<div className="mt-3 justify-between flex gap-x-4 hover:cursor-pointer hover:text-builder">
								<span>See price comparisons</span>
								<ArrowRight />
							</div>
						</a>
					</div>
				</div>

			</div>
			<div className="rounded-2xl mt-20 relative self-center w-[95%] md:w-[60%] border-slate-900">
				<div className="md:h-[300px] bg-gradient-to-t from-white to-transparent absolute z-20 w-full bottom-0 rounded-2xl left-0" />
				<div className="relative flex flex-col items-center z-10 justify-center overflow-hidden rounded-2xl border-2">
					<Image className="object-cover relative w-full" src={product.src} alt="logo" width={1920} height={1080} />
					<BorderBeam size={250} duration={4} delay={2} />
				</div>
			</div>
			<div id="features" className="flex flex-col px-10 lg:px-52 mt-20">
				<div className="justify-center flex flex-col items-center text-center">
					<p className="text-2xl md:text-3xl font-bold mb-4">Carefully Designed Features</p>
					<p className="text-base text-center text-gray-600 font-regular w-full md:w-[500px]">We  meticulously crafted features that have been thoughtfully developed to enhance user experience, ensuring functionality, usability, and aesthetic appeal in every detail.</p>
				</div>
				<div className="md:flex mt-10">
					<VelocityScroll
						text="Estimates • Gantt • Tasks • Customer Portal • Gallery • Documents •"
						default_velocity={1}
						className="font-display text-center text-sm text-gray-300 font-bold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
					/>
				</div>
				<FeatureSection />
			</div>
			<div id="reviews" className="mt-10 md:mt-24">
				<div className="flex flex-col space-y-3 text-center">
					<h2 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-3xl">What our customers are saying</h2>
				</div>

				<ReviewsSection />
			</div>
			<div id="pricing" className="mt-10 md:mt-24 z-10 flex flex-col pt-2 bg-white">
				<div className="flex flex-col space-y-3 text-center">
					<h2 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-3xl">Pricing</h2>
					<p className="self-center text-base text-center text-gray-600 font-regular w-full md:w-[500px]">
						Choose the plan that fits your needs. No hidden fees, ever.
					</p>
				</div>
				<Pricing />
			</div>
			<div id="price-comparison">
				<PriceComparison />
			</div>

			<div>
				<FAQSection />
			</div>

			<div className="mt-20 border-t">
				<div className="flex flex-col md:flex-row mt-10 md:mt-20 md:h-[300px] bg-white px-20 py-5">
					<div className="md:w-2/4 flex flex-row pt-4">
						<Image className="object-contain relative bottom-6 h-[100px] w-[100px]" src={"/logo-01.jpg"} alt="logo2" width={100} height={100} />
						<div className="flex flex-col ml-3">
							<p className="text-[#ccc] text-[0.55rem]">Powered by SaaS landing</p>
						</div>
					</div>
					<div className="md:w-2/4 flex-col md:flex-row flex justify-evenly gap-x-8 pt-5">
						<div className="mb-5 md:mb-0 md:gap-y-2 flex flex-col">
							<p className=" text-base mb-2">Features</p>
							<p className="text-base text-[#333]">CRM</p>
							<p className="text-base text-[#333]">Inventory</p>
							<p className="text-base text-[#333]">Payroll</p>
							<p className="text-base text-[#333]">Purchase Orders</p>
							<p className="text-base text-[#333]">Job Orders</p>
						</div>
						<div className="mb-5 md:mb-0">
							<p className="text-base mb-2">Company</p>
							<p className="text-base text-[#333]">Blog</p>
							<p className="text-base text-[#333]">Customers</p>
						</div>
						<div>
							<p className="text-base mb-2">Resources</p>
							<p className="text-base text-[#333]">Help Center</p>
							<p className="text-base text-[#333]">Mobile Apps</p>
						</div>
					</div>
				</div>
				<div className="flex border-t py-2 bg-gray-900 gap-x-6 px-20 border-[#333]" >
					<p className="text-sm text-gray-300">© 2024 SaaS landing</p>
					<p className="text-sm text-gray-300">Terms and Conditions</p>
					<p className="text-sm text-gray-300">Privacy Policy</p>
				</div>
			</div>

		</main>
	);
}

