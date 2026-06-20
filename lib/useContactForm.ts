import { useState } from 'react'
import { getSupabase } from './supabase'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmitResult {
  success: boolean
  error?: string
}

export function useContactForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitMessage = async (formData: FormData): Promise<SubmitResult> => {
    setLoading(true)
    setError(null)

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Invalid email address')
      }

      const { error: insertError } = await getSupabase()
        .from('contact_messages')
        .insert([formData])

      if (insertError) {
        throw new Error(insertError.message)
      }

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return { submitMessage, loading, error }
}
