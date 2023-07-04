import { EmailVO } from '../value-objects/email.vo'
import { Result } from 'neverthrow'
import { UserEmailInvalidException } from '../exceptions/UserEmailInvalidException'

export type EmailResult = Result<EmailVO, UserEmailInvalidException>
