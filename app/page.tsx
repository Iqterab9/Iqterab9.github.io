import { Toaster } from 'sonner'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <Toaster />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Get In Touch</h1>
        <p className="text-gray-600 text-center mb-8">
          Send me a message and I&apos;ll get back to you as soon as possible.
        </p>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
