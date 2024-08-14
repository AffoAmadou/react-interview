function Icon({ children, ...props }) {
    return (
      <svg
      {...props}
      >
        {children}
      </svg>
    )
  }

  export default Icon;