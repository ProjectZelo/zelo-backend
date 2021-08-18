// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from "dotenv";

dotenv.config();

class ConfigService {

    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            ssl: this.isProduction(),
            entities: ['dist/**/*.entity.js'], // TODO: Confirm is this is correct
            synchronize: true,
            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],

            cli: {
                migrationsDir: 'src/migration',
            }
        };
    }

    public getSandoxUrl(): string {
        if (this.isProduction()) {
            return this.getValue('CIRCLE_URL_PROD');
        } else {
            return this.getValue('CIRCLE_URL_DEV');
        }
    }

    public getMaxRedirects() {
        return this.getValue('MAX_REDIRECTS') || '5';
    }

    public getTimeout() {
        return this.getValue('CIRCLE_TIMEOUT') || '5000';
    }

}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_HOST',
        'POSTGRES_PORT',
        'POSTGRES_USER',
        'POSTGRES_PASSWORD',
        'POSTGRES_DATABASE',
        'CIRCLE_URL'
    ]);

export { configService };