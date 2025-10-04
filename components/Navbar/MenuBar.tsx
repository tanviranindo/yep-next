
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

      if (rect.bottom > windowHeight) {
        panelRef.current.style.bottom = `100%`;
        panelRef.current.style.top = `auto`;
      }
    }
  }, [isOpen]);

  const handleMenuHover = (path: string[], event: React.MouseEvent) => {
    const top = (event.target as HTMLElement).offsetTop;
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
        className="bg-white border border-gray-200 rounded-md shadow-lg"
        style={{
          position: "absolute",
          top: top,
          left: `${path.length * 192}px`,
          width: "192px",
        }}
      >
        <div className="py-2">
          {parent && (
            <div className="px-4 py-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {parent.label}
              </h4>
            </div>
          )}
          <div className="space-y-1">
            {Object.entries(currentItems).map(([key, item]) => {
              const isSelected = openMenus.includes(key);
              return (
                <div
                  key={key}
                  onMouseEnter={(e) => handleMenuHover([...path, key], e)}
                  className={isSelected ? "bg-gray-100" : ""}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenMenus([]);
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded flex items-center justify-between">
                      <span>{item.label}</span>
                      <FiChevronRight className="w-3 h-3" />
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
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-sm font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center space-x-1 ${buttonClassName}`}
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
          className="absolute top-full left-0 mt-1"
          onMouseLeave={() => setOpenMenus([])}
        >
          <div className="relative">
            {renderMenu(items)}
            {openMenus.map((_, index) => {
              const path = openMenus.slice(0, index + 1);
              const top = menuTops[index] || 0;
              return renderMenu(items, path, top);
            })}
          </div>
        </div>
      )}
    </div>
  );
}
