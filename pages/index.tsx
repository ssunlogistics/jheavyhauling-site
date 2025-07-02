import '@/styles/globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100 text-gray-900">
      <header className="w-full text-center py-10">
        <h1 className="text-4xl font-bold">J Heavy Hauling LLC</h1>
        <p className="mt-2 text-lg">Professional, Safe, and Exceptional Transportation Services — Hiring Owner Operators Nationwide</p>
      </header>

      <section className="grid md:grid-cols-1 gap-6 w-full max-w-5xl text-center">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Reliable Freight Transportation</h2>
          <p>We are committed to delivering freight with the highest standards of safety, professionalism, and service excellence across the U.S.</p>
        </div>
      </section>

      <section className="w-full max-w-xl bg-white mt-10 p-6 rounded-2xl shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Apply to Drive With Us</h2>
        <form className="space-y-4" action="https://formspree.io/f/xwkglqyn" method="POST">
          <input type="text" name="fullName" placeholder="Full Name" required className="w-full border p-3 rounded-xl" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-3 rounded-xl" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border p-3 rounded-xl" />
          <div className="text-left text-xs text-gray-600">
            <label className="inline-flex items-start">
              <input type="checkbox" required className="mr-2 mt-1" />
              By checking this box, you agree to receive SMS messages from J Heavy Hauling LLC related to hiring and dispatch communication. You may reply STOP to opt out at any time. Reply HELP to (219) 777-2244 for assistance. Message and data rates may apply. Message frequency will vary. Learn more in our Privacy Policy and Terms & Conditions.
            </label>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">Submit Application</button>
        </form>
      </section>

      <footer className="w-full text-center text-sm text-gray-600 mt-10 py-6">
        <p>📍 1504 N Main Street Unit G, Crown Point, IN 46307</p>
        <p>📞 (219) 777-2244</p>
        <p>📧 dispatch@jheavyhauling.com</p>
        <p className="mt-4">© 2025 J Heavy Hauling LLC — All rights reserved.</p>
      </footer>
    </main>
  );
}
