'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiHome, HiOutlineHome } from 'react-icons/hi'
import { HiLocationMarker, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiUsers, HiOutlineUsers } from 'react-icons/hi'
import { HiRefresh, HiOutlineRefresh } from 'react-icons/hi'
import { HiUser, HiOutlineUser } from 'react-icons/hi'

const navigationItems = [
  {
    path: '/',
    label: '홈',
    activeIcon: HiHome,
    inactiveIcon: HiOutlineHome,
  },
  {
    path: '/map',
    label: '지도',
    activeIcon: HiLocationMarker,
    inactiveIcon: HiOutlineLocationMarker,
  },
  {
    path: '/community',
    label: '커뮤니티',
    activeIcon: HiUsers,
    inactiveIcon: HiOutlineUsers,
  },
  {
    path: '/upcycling',
    label: '업사이클링',
    activeIcon: HiRefresh,
    inactiveIcon: HiOutlineRefresh,
  },
  {
    path: '/my',
    label: '마이',
    activeIcon: HiUser,
    inactiveIcon: HiOutlineUser,
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.path
          const Icon = isActive ? item.activeIcon : item.inactiveIcon

          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            >
              <Icon
                className={`w-6 h-6 mb-1 ${
                  isActive ? 'text-gray-900' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-xs ${
                  isActive ? 'text-gray-900 font-medium' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

