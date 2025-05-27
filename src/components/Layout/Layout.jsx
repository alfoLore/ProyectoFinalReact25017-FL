
const Layout = ({children}) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center mt-20">
      <div className="max-w-7xl mx-auto p-4">
        {children}
      </div>
    </div>
  )
}

export default Layout