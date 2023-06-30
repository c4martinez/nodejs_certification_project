// Principio SOLID: Interface Segregation
export interface UserOpcional {
	refreshToken: string
	active: boolean
	guid: string
}