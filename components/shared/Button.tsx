import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
