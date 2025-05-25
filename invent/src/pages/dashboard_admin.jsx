export default function DashboardAdmin() {

  return <>
    <nav className="w-full">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Dashboard</div>
        <div className="flex">
          <label className="input">
            <span className="label">🔍</span>
            <input type="text" placeholder="Search..." />
          </label>
          <button className="btn btn-primary">+ New Loan</button>
        </div>
      </div>
    </nav>
  </>;

}
