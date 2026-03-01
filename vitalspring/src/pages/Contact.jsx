export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

      <div className="space-y-4 text-lg">
        <p>Email: <a href="mailto:info@vitalspring.com" className="text-blue-600">info@vitalspring.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></p>
      </div>
    </div>
  )
}