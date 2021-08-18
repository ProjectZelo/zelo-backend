import { configService } from 'config/config.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Logger, Module, OnModuleInit } from '@nestjs/common';


@Module({
    imports: [
        HttpModule
    ],
    exports: [
        HttpModule
    ]
})
export class SharedModule implements OnModuleInit {

    constructor(
        private readonly httpService: HttpService
    ) { }

    public onModuleInit(): any {
        const logger = new Logger('Axios');
        const axios = this.httpService.axiosRef;


        axios.interceptors.request.use(function (config) {
            config.headers.Authorization = configService.getCircleBearerToken();
            config['metadata'] = { ...config['metadata'], startDate: new Date() };
            return config;
        });
        axios.interceptors.response.use(
            (response) => {
                const { config } = response;
                config['metadata'] = { ...config['metadata'], endDate: new Date() };
                const duration = config['metadata'].endDate.getTime() - config['metadata'].startDate.getTime();

                // Log some request infos (you can actually extract a lot more if you want: the content type, the content size, etc.)
                // logger.log(`${config.method.toUpperCase()} ${config.url} ${duration}ms`);

                return response;
            },
            (err) => {
                // logger.error(err);

                // Don't forget this line like I did at first: it makes your failed HTTP requests resolve with "undefined" :-(
                return Promise.reject(err);
            });
    }
}