'use client'

import { useState } from 'react'

export default function DaisyUITestPage() {
  const [selectedTheme, setSelectedTheme] = useState('fashion')
  
  const themes = [
    { name: 'Fashion', value: 'fashion', emoji: '👗' },
    { name: 'Beauty', value: 'beauty', emoji: '💄' },
    { name: 'Gadgets', value: 'gadgets', emoji: '📱' },
    { name: 'Furniture', value: 'furniture', emoji: '🛋️' },
    { name: 'Kids & Mom', value: 'kidsmom', emoji: '👶' },
    { name: 'Light', value: 'light', emoji: '☀️' },
    { name: 'Dark', value: 'dark', emoji: '🌙' },
  ]

  return (
    <div className="min-h-screen" data-theme={selectedTheme}>
      {/* Theme Selector */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <h1 className="text-xl font-bold">DaisyUI Test</h1>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <select 
              className="select select-bordered" 
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              {themes.map(theme => (
                <option key={theme.value} value={theme.value}>
                  {theme.emoji} {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="navbar-end">
          <div className="badge badge-lg badge-primary">
            Current: {selectedTheme}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">DaisyUI Components Test</h1>
          <p className="text-lg opacity-70">
            Testing all DaisyUI components with theme: <span className="font-semibold">{selectedTheme}</span>
          </p>
        </div>

        {/* Color Showcase */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Color System</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-primary text-primary-content rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full mb-2"></div>
                <span className="text-sm">Primary</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary text-secondary-content rounded-lg">
                <div className="w-12 h-12 bg-secondary rounded-full mb-2"></div>
                <span className="text-sm">Secondary</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-accent text-accent-content rounded-lg">
                <div className="w-12 h-12 bg-accent rounded-full mb-2"></div>
                <span className="text-sm">Accent</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-neutral text-neutral-content rounded-lg">
                <div className="w-12 h-12 bg-neutral rounded-full mb-2"></div>
                <span className="text-sm">Neutral</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-outline btn-primary">Outline Primary</button>
              <button className="btn btn-outline btn-secondary">Outline Secondary</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="btn btn-xs">Extra Small</button>
              <button className="btn btn-sm">Small</button>
              <button className="btn btn-md">Medium</button>
              <button className="btn btn-lg">Large</button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>This is a DaisyUI card component.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Action</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Primary Card</h2>
              <p>Card with primary colors.</p>
              <div className="card-actions justify-end">
                <button className="btn">Action</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-secondary text-secondary-content">
            <div className="card-body">
              <h2 className="card-title">Secondary Card</h2>
              <p>Card with secondary colors.</p>
              <div className="card-actions justify-end">
                <button className="btn">Action</button>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Alerts</h2>
            <div className="space-y-4">
              <div className="alert alert-info">
                <span>Info alert - DaisyUI is working!</span>
              </div>
              <div className="alert alert-success">
                <span>Success alert - Theme system operational!</span>
              </div>
              <div className="alert alert-warning">
                <span>Warning alert - This is a test.</span>
              </div>
              <div className="alert alert-error">
                <span>Error alert - Demo purposes only.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Form Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Input</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select</span>
                </label>
                <select className="select select-bordered" defaultValue="">
                  <option disabled value="">Pick one</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Textarea</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
              </div>
              
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Checkbox</span>
                  <input type="checkbox" className="checkbox checkbox-primary" />
                </label>
                <label className="cursor-pointer label">
                  <span className="label-text">Toggle</span>
                  <input type="checkbox" className="toggle toggle-secondary" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Badges and Progress */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Badges & Progress</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="badge">Default</div>
              <div className="badge badge-primary">Primary</div>
              <div className="badge badge-secondary">Secondary</div>
              <div className="badge badge-accent">Accent</div>
              <div className="badge badge-ghost">Ghost</div>
            </div>
            <div className="space-y-2">
              <progress className="progress progress-primary w-full" value="32" max="100"></progress>
              <progress className="progress progress-secondary w-full" value="70" max="100"></progress>
              <progress className="progress progress-accent w-full" value="90" max="100"></progress>
            </div>
          </div>
        </div>

        {/* Loading */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Loading States</h2>
            <div className="flex items-center gap-4">
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-dots text-secondary"></span>
              <span className="loading loading-ring text-accent"></span>
              <span className="loading loading-ball text-warning"></span>
              <span className="loading loading-bars text-info"></span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <span className="text-3xl">📊</span>
            </div>
            <div className="stat-title">Total Views</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <span className="text-3xl">👥</span>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent">
              <span className="text-3xl">🎯</span>
            </div>
            <div className="stat-title">Conversions</div>
            <div className="stat-value text-accent">86%</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        {/* Final Status */}
        <div className="alert alert-success">
          <span className="text-lg font-semibold">
            ✅ DaisyUI is working perfectly with theme: {selectedTheme}!
          </span>
        </div>
      </div>
    </div>
  )
}