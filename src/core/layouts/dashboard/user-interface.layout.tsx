import { FC, PropsWithChildren, useState } from "react"
import { LayoutAsideNavigation } from "@/core/components";
import clsx from "clsx";

interface UserInterfaceLayoutProps extends PropsWithChildren { };

export const UserInterfaceLayout: FC<UserInterfaceLayoutProps> = ({ children }): JSX.Element => {

  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false)

  const handleToggleAside = () => {
    return setIsAsideOpen(!isAsideOpen);
  }

  return (
    <div className="flex min-h-screen">
        <LayoutAsideNavigation isOpen={isAsideOpen} toggleOpen={handleToggleAside}/>
      <main className={clsx("bg-red-200 flex-1 transition-all duration-100 py-2 px-2", isAsideOpen ? "ml-60" : "ml-14")}>
        {children}
      </main>
    </div>
  );
}