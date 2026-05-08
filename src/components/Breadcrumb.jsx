import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {

  const location = useLocation()  

  // "/furniture-bar/furniture" => ["furniture-bar", "furniture"]
  const paths = location.pathname.split('/').filter(Boolean)

  return (
    <div className="w-full pt-8 pb-14 border-gray-200">
      <div className="primary-container">
        <nav className="flex items-center gap-2 text-[15px] text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition">Home</Link>

          {paths.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/')
            const isLast = index === paths.length - 1
            const label = path.replace(/-/g, ' ')
              .replace(/\b\w/g, c => c.toUpperCase()) // capitalize

            return (
              <span key={index} className="flex items-center gap-2">
                <span>/</span>
                {isLast ? (
                  <span className="text-gray-900  font-medium">{label}</span>
                ) : (
                  <Link to={href} className="hover:text-gray-900 transition">{label}</Link>
                )}
              </span>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb