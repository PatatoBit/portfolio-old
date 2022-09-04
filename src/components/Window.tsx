import Link from 'next/link'

export default function Window() {
  return (
	  <>
	  	 <div className="fullflex bg-yellow-200">
        <div className="window">
          <div className="w-full flex top bg-slate-500 shadow-sm">
            {/* Window Header */}
            <div className="flex flex-1 p-2 items-center">
              <h1 className="text-4xl text-white poppins">patato.live <span className="text-base text-gray-400">v.0.3.1</span></h1>
            </div>

            {/* Window buttons */}
			<div className="flex flex-1 justify-end">
              <a className="border-blue-500 window-btn">➖</a>
              <a className="border-green-500 window-btn">⏹️</a>
              <a className="border-red-500 window-btn">❌</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bottom">
            {/* Nav Section */}
            <div className="section sm:flex-col top">
				<Link href="/"><button className="nav hover:bg-red-500">Home</button></Link>
				<Link href="/about"><button className="nav hover:bg-yellow-500">About</button></Link>
				<Link href="/portfolio"><button className="nav hover:bg-green-500">Portfolio</button></Link>
				<Link href="/contacts"><button className="nav hover:bg-blue-500">Contacts</button></Link>
            </div>
            {/* Content Section */}
            <div className="section flex-col bottom p-2">
			</div>
          </div>
        </div>
      </div>      
	  </>
	)
}
