import data from "@/data/navbar"
import Link from "next/link"

export const Navbar = () => {
	return (
		<div className="bg-green-200">
			<nav>
				<div>
					<ul className="flex-col list-none">
						{
							data.map((navitem, index) =>
								<Link key={index} href={navitem.path}>
									<li>
										{navitem.name}
									</li>
								</Link>
							)
						}
					</ul>
				</div>
			</nav>
		</div>
	)
}