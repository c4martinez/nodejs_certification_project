import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserEmailInvalidException extends DomainException {
	constructor() {
		super(UserEmailInvalidException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_INVALID
	}

	static getMessage() {
		return 'Email is invalid'
	}
}
