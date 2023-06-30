import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserPasswordRequiredException extends DomainException {
	constructor() {
		super(UserPasswordRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_PASSWORD_REQUIERED
	}

	static getMessage() {
		return 'Password is required'
	}
}
