import "express";

declare global {
    namespace Express {
        interface Request {
            requestTime: string;
        }
    }
}

// declare module "express-serve-static-core" {
//     interface Request {
//         requestTime?: string;
//     }
// }