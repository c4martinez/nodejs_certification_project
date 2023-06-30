import { ValueObject } from './vo.class'
import { EmailResult } from '../types/emailResult.type'
import { EmailProps } from '../interfaces/emailProps.interface'
import { UserEmailInvalidException } from '../exceptions/UserEmailInvalidException'
import { err, ok } from 'neverthrow'

export class EmailVO extends ValueObject<EmailProps> {
	private constructor(props: EmailProps) {
		super(props)
	}

	static create(email: string): EmailResult {
		if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
			return err(new UserEmailInvalidException())
		}

		return ok(new EmailVO({ value: email }))
	}

	get value(): string {
		return this.props.value
	}
}