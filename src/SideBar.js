function SideBar() {
  return(
    <div className="sidebar col-span-3 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
      <a href="#Home" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Home
      </a>
      <a href="#About" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        About
      </a>
      <a href="#Features" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Features
      </a>
      <a href="#Pricing" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Pricing
      </a>
      </nav>
    </div>
  )
}

export default SideBar;