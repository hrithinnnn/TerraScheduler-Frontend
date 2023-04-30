export interface CustomHttpResponse {
    status: number,
    error: { errorString: string },
    message: string,
    data: any
}

const LOCAL_API_URL = "http://localhost:3000";
const DEPLOYED_API_UTL = "https://terrascheduler.onrender.com"

export const API_URL = DEPLOYED_API_UTL;