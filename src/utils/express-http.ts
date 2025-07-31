import {Response} from "express";

export async function sendResponse(res: Response, status: number, jsonBody?: string) {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    jsonBody && res.write(jsonBody);
    res.end();
}

export async function sendSuccess(res: Response, body: unknown) {
    const jsonBody = (typeof body === "string")? body: JSON.stringify(body);
    await sendResponse(res, 200, jsonBody);
}