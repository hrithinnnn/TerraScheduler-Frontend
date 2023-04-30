export interface CustomHttpResponse {
    status: number,
    error: { errorString: string },
    message: string,
    data: any
}

export const API_URL = "http://localhost:3000"