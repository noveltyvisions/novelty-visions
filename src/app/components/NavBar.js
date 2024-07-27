import Link from "next/link"

export default function NavBar() {

  const navItems = [
    {
      text: 'Overview',
      link: ''
    },
    {
      text: 'Products',
      link: ''
    },
    {
      text: 'Services',
      link: ''
    },
    {
      text: 'About',
      link: ''
    },
    {
      text: 'Contact',
      link: ''
    },
  ]

  return (
    <nav className="rounded-full bg-primary py-4 px-8 fixed top-12 left-2/4 transform -translate-x-2/4">
      <ul className="flex items-center gap-12 mx-auto">
        {navItems.map((item, index) => (
            <li
              className={
                `font-lato text-xl ${index === 4 ? 'text-primary bg-white rounded-full px-4 py-1' : 'text-white'}`
              } 
              key={index}
            >
              <Link 
                href={item.link}
              >
                {item.text}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}
