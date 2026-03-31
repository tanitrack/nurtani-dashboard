import type { Account, Mail } from '@/components/organisms/mail/data/mails'
import { accounts, mails } from '@/components/organisms/mail/data/mails'

export interface MailPayload {
  accounts: Account[]
  mails: Mail[]
}

export const mailService = {
  async getMailPayload(): Promise<MailPayload> {
    return {
      accounts: accounts as Account[],
      mails: mails as Mail[],
    }
  },
}
