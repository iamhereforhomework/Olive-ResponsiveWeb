import React, { useState } from 'react';

const AnimatedNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { id: 1, label: '首頁', href: '#' },
    { id: 2, label: '關於我們', href: '#' },
    { id: 3, label: '服務', href: '#' },
    { id: 4, label: '聯絡我們', href: '#' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center py-4">
            <span className="font-bold text-xl text-gray-800">Logo</span>
          </div>

          {/* 漢堡選單按鈕 - 只在手機版顯示 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-gray-600 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
          
          {/* 桌面版選單 */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative py-4 px-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-all duration-300 ${
                    hoveredItem === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            ))}
            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300 transform hover:scale-105">
              登入
            </button>
          </div>
        </div>

        {/* 手機版下拉選單 */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block py-3 px-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="p-4">
            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300">
              登入
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AnimatedNavbar;
