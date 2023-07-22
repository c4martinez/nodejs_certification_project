import { DataSource } from 'typeorm'
export abstract class Bootstrap {
	// desing pattern Facede
	abstract initialize(): Promise<string | Error | DataSource>
}