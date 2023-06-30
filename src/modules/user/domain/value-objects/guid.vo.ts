import { validate as uuidValidate } from 'uuid'
import { ValueObject } from './vo.class'
import { GuidProps } from '../interfaces/guidProps.interface'
import { GuidResult } from '../types/guidResult.type'
import { UserGuidInvalidException } from '../exceptions/UserGuidInvalidException'
import { err, ok } from 'neverthrow'


export class GuidVO extends ValueObject<GuidProps> {

    private constructor(props: GuidProps) {
        super(props)
    }

    static create(guid: string): GuidResult {
        if(!uuidValidate(guid)) {
            return err(new UserGuidInvalidException())
        }
        return ok(new GuidVO({ value: guid }))
    }
    get value(): string {
        return this.props.value
    }
}