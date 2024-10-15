"use client"
import React, { useState, useMemo } from 'react'
import { Slider } from "@/components/ui/slider"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NeonGradientCard } from './ui/neon-gradient-card'
import ShimmerButton from './magicui/shimmer-button'

type Product = {
	name: string
	color: string
	basePrice: number
	includedUsers: number
	extraUserPrice: number
}

const products: Product[] = [
	{
		name: "SaaS Landing",
		color: "bg-blue-500",
		basePrice: 99,
		includedUsers: 2,
		extraUserPrice: 30,
	},
	{
		name: "Competitor 1",
		color: "bg-red-500",
		basePrice: 240,
		includedUsers: 2,
		extraUserPrice: 90,
	},
	{
		name: "Competitor 2",
		color: "bg-green-500",
		basePrice: 309,
		includedUsers: 2,
		extraUserPrice: 74,
	},
	{
		name: "Competitor 3",
		color: "bg-purple-500",
		basePrice: 499,
		includedUsers: 2,
		extraUserPrice: 100,
	},
]

const calculatePrice = (product: Product, userCount: number) => {
	const extraUsers = Math.max(0, userCount - product.includedUsers)
	return product.basePrice + (extraUsers * product.extraUserPrice)
}

export default function PriceComparison() {
	const [userCount, setUserCount] = useState(2)

	const handleSliderChange = (value: number[]) => {
		setUserCount(value[0])
	}

	const prices = useMemo(() => {
		return products.map(product => ({
			name: product.name,
			price: calculatePrice(product, userCount),
		}))
	}, [userCount])

	const ourPrice = prices.find(p => p.name === "SaaS landing")?.price || 0
	const comparisons = useMemo(() => {
		return prices
			.filter(p => p.name !== "Saas landing")
			.map(competitor => ({
				name: competitor.name,
				extraCost: competitor.price - ourPrice,
				savingsPercentage: ((competitor.price - ourPrice) / competitor.price) * 100,
			}))
	}, [prices, ourPrice])

	return (
		<div className="container flex flex-col justify-center mx-auto px-4 py-8 space-y-8">
			<h2 className="text-3xl font-bold text-center">Price Comparison</h2>
			<p className="self-center text-base text-center text-gray-600 font-regular w-full md:w-[500px]">Our competitors charge up to 70% in fees. We charge $0 extra until you need to expand your team, $30 for extra users. No other hidden payment surprises.</p>
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle className='text-xl'>Number of Users: {userCount}</CardTitle>
				</CardHeader>
				<CardContent>
					<Slider
						id="user-count"
						min={1}
						max={10}
						step={1}
						value={[userCount]}
						onValueChange={handleSliderChange}
						className="w-full"
					/>
				</CardContent>
			</Card>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{products.map((product, key) => {
					const price = prices.find(p => p.name === product.name)
					const comparison = comparisons.find(c => c.name === product.name)
					return key === 0 ? (
						<NeonGradientCard key={key} className="items-center justify-center text-center">
							<span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{product.name}</span>
							<div className="text-2xl font-bold">
								${price?.price.toFixed(2)}/mo
							</div>
							<div className="text-sm text-gray-600 mt-4">
								Base price: ${product.basePrice} (Includes {product.includedUsers} users)
							</div>
							<div className="text-sm text-gray-600 mt-4">
								${product.extraUserPrice} per extra user
								<div className="text-red-600 text-sm mt-2">
									(Save up to 70%)
								</div>
							</div>
							<div className='mt-6 items-center flex justify-center'>
								<a href="/schedule">
									<ShimmerButton className="">
										<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight lg:text-base">
											7 Day FREE Trial
										</span>
									</ShimmerButton>
									<span className="text-xs text-center">No credit card required</span>
								</a>
							</div>
						</NeonGradientCard>
					) : (
						<Card key={product.name} className="">
							<CardHeader className={`text-gray-600`}>
								<CardTitle className="text-center">{product.name}</CardTitle>
							</CardHeader>
							<CardContent className="p-6 flex flex-col items-center space-y-4">
								<div className="text-xl font-medium text-gray-600">
									${price?.price.toFixed(2)}/month
								</div>
								<div className="text-sm text-gray-600">
									Base price: ${product.basePrice} (Includes {product.includedUsers} users)
								</div>
								<div className="text-sm text-gray-600">
									${product.extraUserPrice} per extra user
								</div>
								<div className="text-center">
									<Badge variant="secondary" className="mb-2">
										You Pay ${comparison?.extraCost.toFixed(2)} more
									</Badge>
									<div className="text-red-600 text-sm">
										(+{comparison?.savingsPercentage.toFixed(2)}%)
									</div>
								</div>
							</CardContent>
						</Card>
					)
				})}
			</div>
		</div>
	)
}
