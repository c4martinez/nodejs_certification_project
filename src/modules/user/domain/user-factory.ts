import { v4 as uuidv4 } from 'uuid'
import User from './user'
import { UserPasswordService } from './services/user-password.service'
import { EmailVO } from './value-objects/email.vo'
import { UserLastnameRequiredException } from './exceptions/UserLastnameRequiredException'
import { UserNameRequiredException } from './exceptions/UserNameRequired.exception'
import { UserPasswordRequiredException } from './exceptions/UserPasswordRequiredException'
import { UserPasswordLengthInvalidException } from './exceptions/UserPasswordLengthInvalidException'
import { err, ok, Result } from 'neverthrow'
import { UserProperties } from './types/userProperties.type'

export type UserResult = Result<
User,
| UserNameRequiredException
| UserLastnameRequiredException
| UserPasswordRequiredException
| UserPasswordLengthInvalidException
>

// desing pattern Abstract Factory
export default class UserFactory {
	async create(name: string, lastname: string, email: EmailVO, password: string): Promise<UserResult> {

		if(!name || name.trim() === '') {
			return err(new UserNameRequiredException())
		}
		if(!lastname || lastname.trim() === '') {
			return err(new UserLastnameRequiredException())
		}
		if(!password || password.trim() === '') {
			return err(new UserPasswordRequiredException())
		}
		if(password.length < 5) {
			return err(new UserPasswordLengthInvalidException(password))
		}

		const passwordHash = await UserPasswordService.hash(password)

		const userProperties: UserProperties = {
			name,
			lastname,
			email,
			password: passwordHash,
			guid: uuidv4(),
			refreshToken: uuidv4(),
		}

		const user = new User(userProperties)
		return ok(user)
	}
}