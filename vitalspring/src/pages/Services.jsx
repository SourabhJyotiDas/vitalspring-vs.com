export default function Services() {
  return (
    <div className="min-h-screen py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Home Delivery</h3>
          <p>Safe water delivered directly to your doorstep.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Office Supply</h3>
          <p>Bulk water solutions for corporate and commercial spaces.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Event Supply</h3>
          <p>Large-scale purified water distribution for events.</p>
        </div>
      </div>
    </div>
  )
}