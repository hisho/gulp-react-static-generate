import React from "react";

type LayoutPropsType = {
  children: React.ReactNode
}

export const Layout: React.VFC<LayoutPropsType> = (
  {
    children
  }) => {
  return (
    <div>
      レイアウト
      {children}
    </div>
  )
}