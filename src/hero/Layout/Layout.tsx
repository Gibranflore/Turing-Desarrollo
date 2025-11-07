import { CustomMenu } from "@/components/ui/Custom/CustomMenu"
import { Outlet } from "react-router"


export const HeroesLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        <CustomMenu/>
          <Outlet/>
      </div>
    </div>
  )
}
