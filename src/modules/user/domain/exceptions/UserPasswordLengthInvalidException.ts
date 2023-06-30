import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserPasswordLengthInvalidException extends DomainException {
	constructor(password: string) {
		super(UserPasswordLengthInvalidException.getMessage(password))
		this.name = DomainExceptionCode.USER_PASSWORD_LENGHT_INVALID
	}

	static getMessage(password: string) {
		return `Password must be more than 4 characters, but '${password}' has only ${password.length}`
	}
}
