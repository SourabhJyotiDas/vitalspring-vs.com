export default function Location() {
  return (
    <div className="min-h-screen py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Location</h2>

      <div className="max-w-6xl mx-auto h-96">
        <iframe
          title="location"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}