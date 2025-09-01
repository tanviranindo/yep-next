export default function BasicTestPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Basic DaisyUI components test */}
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">YEP Next</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary">Test Button</button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">DaisyUI Test</h2>
            <p>Testing if DaisyUI styles are working properly</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
            </div>
          </div>
        </div>
        
        <div className="alert alert-info mt-4">
          <span>Info alert - DaisyUI is working!</span>
        </div>
      </div>
    </div>
  )
}