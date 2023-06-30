import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserNotFoundException extends DomainException {
	constructor() {
		super(UserNotFoundException.getMessage())
		this.name = DomainExceptionCode.USER_NOT_FOUND
	}

	static getMessage() {
		return 'User not found'
	}
}
