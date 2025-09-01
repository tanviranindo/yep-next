'use client'

import { useState } from 'react'

export default function ThemeTestPage() {
  const [theme, setTheme] = useState('light')

  return (
    <div data-theme={theme} className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Theme Test Page</h1>
        
        {/* Theme Selector */}
        <div className="mb-8">
          <label className="label">
            <span className="label-text">Select Theme:</span>
          </label>
          <select 
            className="select select-bordered" 
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light (Default)</option>
            <option value="dark">Dark (Default)</option>
            <option value="fashion">Fashion (Custom)</option>
            <option value="beauty">Beauty (Custom)</option>
            <option value="gadgets">Gadgets (Custom)</option>
            <option value="furniture">Furniture (Custom)</option>
            <option value="kidsmom">Kids & Mom (Custom)</option>
          </select>
        </div>
        
        <div className="alert alert-info mb-8">
          <span>Current theme: <strong>{theme}</strong></span>
        </div>
        
        {/* DaisyUI Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Buttons */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Buttons</h2>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-neutral">Neutral</button>
              </div>
            </div>
          </div>
          
          {/* Colors */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Colors</h2>
              <div className="flex flex-wrap gap-2">
                <div className="w-16 h-16 bg-primary rounded flex items-center justify-center text-primary-content text-xs">Primary</div>
                <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center text-secondary-content text-xs">Secondary</div>
                <div className="w-16 h-16 bg-accent rounded flex items-center justify-center text-accent-content text-xs">Accent</div>
                <div className="w-16 h-16 bg-neutral rounded flex items-center justify-center text-neutral-content text-xs">Neutral</div>
              </div>
            </div>
          </div>
          
          {/* Alerts */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Alerts</h2>
              <div className="space-y-2">
                <div className="alert alert-info">
                  <span>Info alert</span>
                </div>
                <div className="alert alert-success">
                  <span>Success alert</span>
                </div>
                <div className="alert alert-warning">
                  <span>Warning alert</span>
                </div>
                <div className="alert alert-error">
                  <span>Error alert</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value text-primary">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}