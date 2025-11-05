import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../breadcrumb"
import { Link } from "react-router";

interface breadcrumbs {
    label: string;
    to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: breadcrumbs[]
}


export const CustomBreadCrums = ({currentPage, breadcrumbs = []}:Props) => {
  return (
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
      <Link to="/">Inicio</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
   

    {
        breadcrumbs.map((crumb) => (
            <div className="flex items-center">
                <BreadcrumbItem>
                <BreadcrumbSeparator>
                <SlashIcon />
                </BreadcrumbSeparator>
                    <BreadcrumbLink asChild>
                        <Link to={crumb.to}>{crumb.label}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </div>
        ))
    }
     <BreadcrumbSeparator>
      <SlashIcon />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink>{currentPage}</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
  )
}
