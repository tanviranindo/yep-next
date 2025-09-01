'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ComponentsTestPage() {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const simulateLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-base-100" data-theme={theme}>
      {/* Navigation */}
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Yep Next
          </Link>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-ghost" onClick={toggleTheme}>
            🌙/☀️ Toggle Theme
          </button>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">DaisyUI Components Test</h1>
          <p className="text-lg">Testing various DaisyUI components and themes</p>
          <div className="badge badge-secondary">Current theme: {theme}</div>
        </div>

        {/* Alerts */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Alerts</h2>
            <div className="alert alert-info">
              <span>Info alert - DaisyUI is working!</span>
            </div>
            <div className="alert alert-success">
              <span>Success alert - Components are loading correctly!</span>
            </div>
            <div className="alert alert-warning">
              <span>Warning alert - This is a test component.</span>
            </div>
            <div className="alert alert-error">
              <span>Error alert - Just for demonstration.</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Buttons</h2>
            <div className="flex gap-2 flex-wrap">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-outline btn-primary">Outline Primary</button>
              <button className="btn btn-outline btn-secondary">Outline Secondary</button>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              <button className="btn btn-xs">Extra Small</button>
              <button className="btn btn-sm">Small</button>
              <button className="btn btn-md">Medium</button>
              <button className="btn btn-lg">Large</button>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              <button 
                className={`btn btn-primary ${loading ? 'loading' : ''}`}
                onClick={simulateLoading}
                disabled={loading}
              >
                {loading ? '' : 'Click to Load'}
              </button>
              <button className="btn btn-disabled" disabled>Disabled</button>
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Form Controls</h2>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Input Field</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>Pick one</option>
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
              <label className="cursor-pointer label max-w-xs">
                <span className="label-text">Checkbox</span>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label max-w-xs">
                <span className="label-text">Toggle</span>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
          </div>
        </div>

        {/* Progress and Loading */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Progress & Loading</h2>
            <progress className="progress progress-primary w-56" value="32" max="100"></progress>
            <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
            <progress className="progress progress-accent w-56" value="90" max="100"></progress>
            <div className="flex gap-4 mt-4">
              <span className="loading loading-spinner text-primary"></span>
              <span className="loading loading-dots text-secondary"></span>
              <span className="loading loading-ring text-accent"></span>
              <span className="loading loading-ball text-warning"></span>
            </div>
          </div>
        </div>

        {/* Modal Test */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Modal</h2>
            <button className="btn btn-primary max-w-xs" onClick={() => {
              const modal = document.getElementById('my_modal_1') as HTMLDialogElement
              modal?.showModal()
            }}>
              Open Modal
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This is a DaisyUI modal component working perfectly!</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Badges and Stats */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Badges & Stats</h2>
            <div className="flex gap-2 flex-wrap mb-4">
              <div className="badge">Default</div>
              <div className="badge badge-primary">Primary</div>
              <div className="badge badge-secondary">Secondary</div>
              <div className="badge badge-accent">Accent</div>
              <div className="badge badge-ghost">Ghost</div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Components */}
        <div className="card bg-base-200 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Navigation</h2>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
              </ul>
            </div>
            <div className="tabs tabs-bordered mt-4">
              <a className="tab">Tab 1</a>
              <a className="tab tab-active">Tab 2</a>
              <a className="tab">Tab 3</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}