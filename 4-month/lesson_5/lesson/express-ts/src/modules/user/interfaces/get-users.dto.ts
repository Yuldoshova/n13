export interface GetUsersRequest {
    limit?: number,
    page?: number,
    language?: string
}

export interface GetUsersResponse {
    id: number,
    name: string,
    year: number
}