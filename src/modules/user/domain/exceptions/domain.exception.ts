import { DomainExceptionCode } from '../emuns/domainException.enum'
// Desing Pattern: Singleton
export abstract class DomainException extends Error {
	constructor(message?: string) {
		super(message)
		this.name = DomainExceptionCode.DEFAULT_DOMAIN_EXCEPTION
	}
}