
export const Button = ({children,className,onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}


