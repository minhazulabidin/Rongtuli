"use client"
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useParams } from "next/navigation"
export function BreadcrumbCompo({ productName }) {
    const param = useParams()

    console.log(param)
    return (
        <Breadcrumb className="font-poppins">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link className="hover:text-orangec" href="/">Home</Link>} />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link className="hover:text-orangec" href={`/${param.category}`}>{param.category}</Link>} />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    productName && <BreadcrumbItem>
                        <BreadcrumbPage className="text-orangec">{productName}</BreadcrumbPage>
                    </BreadcrumbItem>
                }

            </BreadcrumbList>
        </Breadcrumb>
    )
}
