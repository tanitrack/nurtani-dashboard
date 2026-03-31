import type { Account, Mail } from '@/components/organisms/mail/data/mails'
import { mailService } from '@/services/mail.service'

export const useMail = () => {
  const accounts = useState<Account[]>('mail:accounts', () => [])
  const mails = useState<Mail[]>('mail:mails', () => [])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchMail = async () => {
    loading.value = true
    error.value = null
    try {
      const payload = await mailService.getMailPayload()
      accounts.value = payload.accounts
      mails.value = payload.mails
    }
    catch (err) {
      error.value = err instanceof Error ? err : new Error('Failed to load mail data')
    }
    finally {
      loading.value = false
    }
  }

  return { accounts, mails, loading, error, fetchMail }
}
