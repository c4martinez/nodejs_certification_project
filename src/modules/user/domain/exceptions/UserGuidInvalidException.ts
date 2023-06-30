import { DomainExceptionCode } from '../emuns/domainException.enum'
import { DomainException } from './domain.exception'

export class UserGuidInvalidException extends DomainException {
	constructor() {
		super(UserGuidInvalidException.getMessage())
		this.name = DomainExceptionCode.USER_GUID_INVALID
	}

	static getMessage() {
		return 'Guid is invalid'
	}
}
