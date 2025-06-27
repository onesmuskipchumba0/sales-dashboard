import SalesInventoryChart from "@/components/analytics/SalesInventoryChart";

export default function Home() {
  return (
    <div className="pt-5 pb-5 w-full mb-12 bg-base-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 bg-gradient-to-br from-base-100 to-base rounded-xl shadow mb-10 mx-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4">
          Sales Management Software
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
          Streamline your sales and inventory processes with real-time analytics,
          intuitive dashboards, and seamless management tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/sales"
            className="btn btn-primary btn-lg px-8"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="btn btn-outline btn-success btn-lg px-8"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow p-6 items-center">
            <span className="text-4xl text-green-500 mb-2">📊</span>
            <h3 className="font-bold text-lg mb-2">Analytics Dashboard</h3>
            <p className="text-gray-500">
              Visualize sales and inventory trends with interactive charts and
              real-time data.
            </p>
          </div>
          <div className="card bg-base-200 shadow p-6 items-center">
            <span className="text-4xl text-green-500 mb-2">⚡</span>
            <h3 className="font-bold text-lg mb-2">Fast & Secure</h3>
            <p className="text-gray-500">
              Experience lightning-fast performance and enterprise-grade security
              for your business data.
            </p>
          </div>
          <div className="card bg-base-200 shadow p-6 items-center">
            <span className="text-4xl text-green-500 mb-2">🤝</span>
            <h3 className="font-bold text-lg mb-2">Easy Collaboration</h3>
            <p className="text-gray-500">
              Empower your team with role-based access and seamless collaboration
              tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="flex flex-col items-center justify-center bg-base-50 py-8 rounded-xl shadow mx-4 mb-12">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Ready to boost your sales?
        </h2>
        <p className="text-gray-600 mb-4">
          Start your free trial today and see the difference!
        </p>
        <a
          href="/signup"
          className="btn btn-success btn-lg px-8"
        >
          Start Free Trial
        </a>
      </section>

      {/* Analytics Chart Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <div className="card bg-base-100 shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Sales & Inventory Overview
          </h3>
          <SalesInventoryChart />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          What Our Users Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow p-6">
            <p className="italic mb-2">
              "This dashboard transformed how we manage our sales pipeline. Highly
              recommended!"
            </p>
            <span className="font-bold text-green-600">
              — Alex, Retail Manager
            </span>
          </div>
          <div className="card bg-base-200 shadow p-6">
            <p className="italic mb-2">
              "The analytics are clear and actionable. Our team loves the
              intuitive interface."
            </p>
            <span className="font-bold text-green-600">
              — Priya, Operations Lead
            </span>
          </div>
          <div className="card bg-base-200 shadow p-6">
            <p className="italic mb-2">
              "Setup was a breeze and support is fantastic. Our inventory is
              always up to date."
            </p>
            <span className="font-bold text-green-600">
              — Samuel, Store Owner
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
