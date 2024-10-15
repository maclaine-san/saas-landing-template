"use client"
import React, { useState } from 'react';
import Image from "next/image";
import logo from "/logo-01.jpg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const MenuItems = () => (
		<>
			<Features />
			<a href="/#pricing" className="cursor-pointer hover:text-builder text-[0.925rem]">Pricing</a>
			<a href="/#price-comparison" className="cursor-pointer hover:text-builder text-[0.925rem]">Price Comparisons</a>
			<a href="/schedule" className="cursor-pointer hover:text-builder text-[0.925rem]">Schedule a demo</a>
			<Button className="w-[100px]">Login</Button>
		</>
	);

	return (
		<div className="flex flex-col h-[70px] w-full px-4 md:px-[40px] py-[10px] fixed z-30 border-b bg-white bg-opacity-10 backdrop-blur-lg">
			<div className="flex justify-between items-center">
				<div onClick={() => window.location.href = "/"} className="hover:cursor-pointer flex h-[50px] items-center">
					<Image className="object-contain w-[70px] relative h-[70px] bottom-1" src={"/logo-01.jpg"} alt="logo" width={100} height={100} />
					<div className="flex flex-col ml-1 justify-center line">
						<p className="font-bold text-[1.1625rem]">SaaS <span className="text-builder">Landing</span></p>
					</div>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-10 items-center">
					<MenuItems />
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px]">
							<nav className="flex flex-col gap-4">
								<MenuItems />
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
};

const Features = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Features</NavigationMenuTrigger>
					<NavigationMenuContent className="p-3">
						<ul className="grid gap-3 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem href="/#features" title="Estimates">
								Quickly generate detailed and accurate cost estimates for your construction projects, ensuring you stay within budget and win more bids.
							</ListItem>
							<ListItem href="/#features" title="Tasks">
								Manage and assign tasks to your team members, track their progress, and ensure that every part of the project is moving forward efficiently.
							</ListItem>
							<ListItem href="/#features" title="Gantt">
								Visualize and manage your project timeline with our intuitive Gantt chart, helping you track progress, set dependencies, and stay on schedule.
							</ListItem>
							<ListItem href="/#features" title="Gallery">
								Showcase your completed projects or ongoing work with a professional image gallery, easily shareable with clients or stakeholders.
							</ListItem>
							<ListItem href="/#features" title="Documents">
								Store, organize, and share project-related documents securely with your team and clients, accessible anytime from any device.
							</ListItem>
							<ListItem href="/#features" title="Customer Portal">
								Create a branded, secure portal where clients can view proposals, track project progress, and access important documents in real-time.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default Header;
