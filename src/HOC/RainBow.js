import React from 'react'

export const RainBow = (WrappedComponent) => {
  const colors = ['red', 'blue', 'green', 'pink', 'orange', 'yellow']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const className = randomColor + '-text'
  console.log(randomColor)

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}
export default RainBow
