import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserLastnameRequiredException extends DomainException {
	constructor() {
		super(UserLastnameRequiredException.getMessage())
		this.name = DomainExceptionCode.USER_LASTNAME_REQUIERED
	}

	static getMessage() {
		return 'Lastname is required'
	}
}
