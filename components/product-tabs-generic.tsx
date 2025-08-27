"use client"

import { useState } from "react"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface ProductTabsGenericProps {
  tabs: Tab[]
  defaultTab?: string
}

export function ProductTabsGeneric({ tabs, defaultTab }: ProductTabsGenericProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "")

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}