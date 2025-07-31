import "express";

declare global {
    namespace Express {
        interface Request {
            requestTime: Date;
        }
    }
}

// declare module "express-serve-static-core" {
//     interface Request {
//         requestTime?: string;
//     }
// }