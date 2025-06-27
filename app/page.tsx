import SalesInventoryChart from "@/components/analytics/SalesInventoryChart";

export default function Home() {
  return (
    <div className="pt-10 pb-10 w-full bg-base-100">
      
      {/* Hero Section */}
      <section className="text-center px-4 py-16 bg-gradient-to-br from-base-100 to-base rounded-3xl shadow-md mx-auto max-w-6xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4 leading-tight">
          Sales Management Software
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your sales and inventory with real-time insights and powerful tools to grow your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/sales" className="btn btn-primary btn-lg px-8">
            Get Started
          </a>
          <a href="/about" className="btn btn-outline btn-success btn-lg px-8">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📊",
              title: "Analytics Dashboard",
              desc: "Visualize sales and inventory trends with interactive charts and real-time data.",
            },
            {
              icon: "⚡",
              title: "Fast & Secure",
              desc: "Experience lightning-fast performance and enterprise-grade security for your business data.",
            },
            {
              icon: "🤝",
              title: "Easy Collaboration",
              desc: "Empower your team with role-based access and seamless collaboration tools.",
            },
          ].map((feature, i) => (
            <div key={i} className="card bg-base-200 shadow-lg p-8 text-center hover:scale-105 transition-transform">
              <span className="text-5xl text-green-500 mb-4 block">{feature.icon}</span>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="flex flex-col items-center justify-center text-center bg-green-50 dark:bg-base-200 py-12 rounded-xl shadow-lg mx-4 mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-3">Ready to boost your sales?</h2>
        <p className="text-gray-600 mb-5 max-w-xl">
          Start your free trial today and experience the future of sales and inventory management.
        </p>
        <a href="/signup" className="btn btn-success btn-lg px-10">
          Start Free Trial
        </a>
      </section>

      {/* Analytics Chart */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="card bg-base-100 shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Sales & Inventory Overview
          </h3>
          <SalesInventoryChart />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-3xl font-bold text-center mb-10">
          What Our Users Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                '"This dashboard transformed how we manage our sales pipeline. Highly recommended!"',
              name: "Alex, Retail Manager",
            },
            {
              quote:
                '"The analytics are clear and actionable. Our team loves the intuitive interface."',
              name: "Priya, Operations Lead",
            },
            {
              quote:
                '"Setup was a breeze and support is fantastic. Our inventory is always up to date."',
              name: "Samuel, Store Owner",
            },
          ].map((testimonial, i) => (
            <div key={i} className="card bg-base-200 shadow-md p-6">
              <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
              <span className="font-bold text-green-600">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
