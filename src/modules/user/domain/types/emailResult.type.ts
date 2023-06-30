import { EmailVO } from '../value-objects/email.vo'
import { Result } from 'neverthrow'
import { UserEmailInvalidException } from '../exceptions/user.exception'

export type EmailResult = Result<EmailVO, UserEmailInvalidException>
