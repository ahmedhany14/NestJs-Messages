
export interface IRepository {
    create(message: string): void;
    findOne(id: number): void;
    findAll(): void;
}