export default function SimpleTestPage() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Simple DaisyUI Test</h1>
      
      {/* Basic DaisyUI Components */}
      <div className="space-y-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
      </div>
      
      <div className="card bg-base-100 shadow-xl w-96 mt-8">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>If you can see this card with proper styling, DaisyUI is working.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
      <div className="alert alert-info mt-8">
        <span>This is an info alert. If it's styled, DaisyUI works!</span>
      </div>
      
      <div className="stats shadow mt-8">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  )
}