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
        private readonly httpService: HttpService,
    ) { }

    public onModuleInit(): any {
        const logger = new Logger('Axios');
        // Add request interceptor and response interceptor to log request infos
        const axios = this.httpService.axiosRef;


        this.httpService.axiosRef.interceptors.request.use(function (config) {
            console.log('in the interceptor....')
            // Please don't tell my Typescript compiler...
            config['metadata'] = { ...config['metadata'], startDate: new Date() };
            return config;
        });
        axios.interceptors.response.use(
            (response) => {
                console.log('in the interceptor....')

                const { config } = response;
                config['metadata'] = { ...config['metadata'], endDate: new Date() };
                const duration = config['metadata'].endDate.getTime() - config['metadata'].startDate.getTime();

                // Log some request infos (you can actually extract a lot more if you want: the content type, the content size, etc.)
                logger.log(`${config.method.toUpperCase()} ${config.url} ${duration}ms`);

                return response;
            },
            (err) => {
                logger.error(err);

                // Don't forget this line like I did at first: it makes your failed HTTP requests resolve with "undefined" :-(
                return Promise.reject(err);
            });
    }
}