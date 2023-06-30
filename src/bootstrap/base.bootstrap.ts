import { DataSource } from 'typeorm/data-source'
export abstract class Bootstrap {
	// desing pattern Facede
	abstract initialize(): Promise<string | Error | DataSource>
}