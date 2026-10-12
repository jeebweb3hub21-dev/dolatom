import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  block?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: undefined
    href?: undefined
  }

type ButtonAsLink = BaseProps & {
  to: string
  href?: undefined
  onClick?: () => void
}

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string
    to?: undefined
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

function classes({ variant = 'primary', size = 'md', block, className }: BaseProps) {
  return [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * Single Button component that renders as a <Link>, <a> or <button>
 * depending on which of `to` / `href` is provided.
 */
export default function Button(props: ButtonProps) {
  const cls = classes(props)

  if (props.to !== undefined) {
    const { to, onClick, children } = props
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (props.href !== undefined) {
    const { variant: _v, size: _s, block: _b, className: _c, children, ...anchor } = props
    return (
      <a className={cls} {...anchor}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, block: _b, className: _c, children, type, ...button } = props
  return (
    <button type={type ?? 'button'} className={cls} {...button}>
      {children}
    </button>
  )
}
