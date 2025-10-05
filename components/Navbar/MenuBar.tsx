
"use client";
import { fashionCategories } from "@/lib/navbarCategories";
import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import {
  FiChevronDown,
  FiChevronRight
} from "react-icons/fi";

export interface MenuItem {
  label: string;
  href?: string;
  children?: Record<string, MenuItem>;
}

export interface MenuBarProps {
  label: string;
  items: Record<string, MenuItem>;
  className?: string;
  buttonClassName?: string;
}

export default function MenuBar({
  label,
  items,
  className = "",
  buttonClassName = "",
}: MenuBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [menuTops, setMenuTops] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenMenus([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (isOpen && panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Reset positioning classes
      panelRef.current.style.bottom = 'auto';
      panelRef.current.style.top = 'auto';
      panelRef.current.style.left = 'auto';
      panelRef.current.style.right = 'auto';
      panelRef.current.style.transform = 'none';

      // Check if dropdown goes off-screen vertically
      if (rect.bottom > windowHeight - 20) {
        panelRef.current.style.top = 'auto';
        panelRef.current.style.bottom = `100%`;
        panelRef.current.style.marginBottom = `4px`;
        panelRef.current.style.marginTop = '0';
      }

      // Check if dropdown goes off-screen horizontally
      if (rect.right > windowWidth - 20) {
        panelRef.current.style.left = 'auto';
        panelRef.current.style.right = `0`;
      }
    }
  }, [isOpen, openMenus]);

  const handleMenuHover = (path: string[], event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const menuItem = target.closest('[data-menu-item]') as HTMLElement;
    const top = menuItem ? menuItem.offsetTop : 0;
    setOpenMenus(path);
    setMenuTops((prev) => {
      const newTops = [...prev];
      newTops[path.length - 1] = top;
      return newTops.slice(0, path.length);
    });
  };

  const renderMenu = (
    menuItems: Record<string, MenuItem>,
    path: string[] = [],
    top: number = 0
  ) => {
    let currentItems = menuItems;
    let parent = null;

    for (const key of path) {
      if (currentItems[key] && currentItems[key].children) {
        parent = currentItems[key];
        currentItems = currentItems[key].children!;
      } else {
        return null;
      }
    }

    return (
      <div
        key={path.join("-")}
        className="bg-white border border-gray-200 rounded-lg shadow-xl z-50"
        style={{
          position: "absolute",
          top: path.length === 0 ? 0 : top,
          left: path.length === 0 ? 0 : "100%",
          width: "200px",
          minHeight: "120px",
          marginLeft: path.length === 0 ? 0 : "4px",
        }}
      >
        <div className="py-3">
          {parent && (
            <div className="px-4 py-2 border-b border-gray-100">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {parent.label}
              </h4>
            </div>
          )}
          <div className="py-2">
            {Object.entries(currentItems).map(([key, item]) => {
              const isSelected = openMenus.includes(key);
              const currentPath = [...path, key];
              return (
                <div
                  key={key}
                  data-menu-item
                  onMouseEnter={(e) => handleMenuHover(currentPath, e)}
                  className={`mx-2 rounded-md relative ${isSelected ? "bg-gray-50" : ""}`}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-md"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenMenus([]);
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-md flex items-center justify-between cursor-pointer">
                      <span>{item.label}</span>
                      <FiChevronRight className="w-3 h-3 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Render submenu directly relative to this item */}
                  {isSelected && item.children && (
                    <div className="absolute top-0 left-full ml-1">
                      {renderMenu(menuItems, currentPath, 0)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 ${buttonClassName}`}
      >
        <span>{label}</span>
        <FiChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className="absolute top-full left-0 mt-2 z-50 min-w-max"
          onMouseLeave={() => setOpenMenus([])}
        >
          <div className="relative">
            {renderMenu(items)}
          </div>
        </div>
      )}
    </div>
  );
}
