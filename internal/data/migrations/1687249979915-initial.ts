import { MigrationInterface, QueryRunner } from 'typeorm'

export class Initial1687249979915 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT NOT NULL,
  role boolean DEFAULT true,
  created_at TIMESTAMP NOT NULL
);`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE users')
  }
}
