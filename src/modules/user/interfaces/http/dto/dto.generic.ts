// Design Pattern Singleton
export abstract class DTO<Properties, DTO> {
  // Desing Pattern Facade
    abstract execute(data: Properties): DTO
  }