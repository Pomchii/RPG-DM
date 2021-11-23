import {MigrationInterface, QueryRunner} from "typeorm";

export class Users1637685692638 implements MigrationInterface {
    name = 'Users1637685692638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("user_id" SERIAL NOT NULL, "user_username" character varying NOT NULL, "user_email" character varying NOT NULL, "user_password" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af4be3eb77a4bdbafac6f808ff3" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
