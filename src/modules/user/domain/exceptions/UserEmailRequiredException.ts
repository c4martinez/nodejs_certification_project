import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserEmailRequiredException extends DomainException {
	constructor() {
		super(UserEmailRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_EMAIL_REQUIERED
	}

	static getMessage() {
		return 'Email is required'
	}
}
