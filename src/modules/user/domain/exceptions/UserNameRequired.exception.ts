import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserNameRequiredException extends DomainException {
	constructor() {
		super(UserNameRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_NAME_REQUIERED
	}

	static getMessage() {
		return 'Name is required'
	}
}