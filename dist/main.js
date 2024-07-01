"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
    });
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    await app.listen(4000);
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    await app.listen(3000);
>>>>>>> Stashed changes
}
bootstrap();
//# sourceMappingURL=main.js.map