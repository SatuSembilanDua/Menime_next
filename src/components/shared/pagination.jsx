"use client"
import { generatePagination } from "@/lib/utils"
import clsx from "clsx"
import { usePathname, useSearchParams } from "next/navigation"
import { CaretDoubleLeft, CaretDoubleRight } from "../graphics/graphics"
import Link from "next/link"

const Pagination = ({ totalPages }) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const currentPage = Number(searchParams.get("page")) || 1

	const createPageURL = (pageNumber) => {
		const params = new URLSearchParams(searchParams)
		params.set("page", pageNumber.toString())
		return `${pathname}?${params.toString()}`
	}

	const allPages = generatePagination(currentPage, totalPages)

	const PaginationNumber = ({ page, href, position, isActive }) => {
		const className = clsx("flex h-10 w-10 items-center justify-center text-sm border", {
			"rounded-l-sm": position === "first" || position === "single",
			"rounded-r-sm": position === "last" || position === "single",
			"z-10 bg-primary text-foreground": isActive,
			"hover:bg-primary hover:text-foreground": !isActive && position !== "middle",
			"text-foreground pointer-events-none": position === "middle",
		})

		return isActive && position === "middle" ? (
			<div className={className}>{page}</div>
		) : (
			<Link href={href} className={className}>
				{page}
			</Link>
		)
	}

	const PaginationArrow = ({ href, direction, isDisabled }) => {
		const className = clsx("flex h-10 w-10 items-center justify-center text-sm border rounded-sm", {
			"pointer-events-none text-muted": isDisabled,
			"hover:bg-primary hover:text-foreground": !isDisabled,
			"mr-2": direction === "left",
			"ml-2": direction === "right",
		})

		const icon = direction === "left" ? <CaretDoubleLeft width={20} /> : <CaretDoubleRight width={20} />

		return isDisabled ? (
			<div className={className}>{icon}</div>
		) : (
			<Link href={href} className={className}>
				{icon}
			</Link>
		)
	}

	return (
		<>
			<div className="inline-flex">
				<PaginationArrow direction="left" href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1} />

				<div className="flex -space-x-px">
					{allPages.map((page, index) => {
						let position = undefined

						if (index === 0) position = "first"
						if (index === allPages.length - 1) position = "last"
						if (allPages.length === 1) position = "single"
						if (page === "...") position = "middle"

						return (
							<PaginationNumber
								key={index}
								href={createPageURL(page)}
								page={page}
								position={position}
								isActive={currentPage === page}
							/>
						)
					})}
				</div>

				<PaginationArrow
					direction="right"
					href={createPageURL(currentPage + 1)}
					isDisabled={currentPage >= totalPages}
				/>
			</div>
		</>
	)
}

export default Pagination
