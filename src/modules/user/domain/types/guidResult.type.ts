import { Result } from 'neverthrow'
import { UserGuidInvalidException } from '../exceptions/UserGuidInvalidException'
import { GuidVO } from '../value-objects/guid.vo'


export type GuidResult = Result<GuidVO, UserGuidInvalidException>