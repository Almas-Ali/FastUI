import { FC } from 'react'

import { ClassName, useClassName } from '../hooks/className'

export interface FooterProps {
  type: 'Footer'
  className?: ClassName
  children?: any
}

export const FooterComp: FC<FooterProps> = (props) => {
  const { classes, childrens } = props
  return <footer className={useClassName(classes)}>{childrens}</footer>
}
