import { TypographyH3 } from "@/components/common/typography"
import { FC, PropsWithChildren } from "react"

interface Props {
  pageTitle: string
}

export const PageLayout: FC<PropsWithChildren<Props>> = ({children, pageTitle}) => {
  return (
    <div>
        <TypographyH3>{pageTitle}</TypographyH3>
        <div className="mt-2">
            {children}
        </div>
    </div>
  )
}