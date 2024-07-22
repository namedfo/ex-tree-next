import axios from 'axios'



export interface IRouteOptions {
    query?: string[]
    params?: Record<string, any>
    body?: Record<string, any>
}


class Fetch {
    private baseURL: string
    private axios: any

    constructor(baseURL: string) {
        this.baseURL = baseURL
        this.axios = axios.create({
            baseURL,
        })
    }



    protected async client(route: string, method: 'GET' | 'POST', { query, params, body }: IRouteOptions) {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {

            switch (method) {
                case "GET":
                    const response_get = await this.axios.get(`${route}${query ? query.join('') : ''}`, config)
                    return response_get.data

                case "POST":
                    const response_post = await this.axios.post(route, body, config)
                    return response_post.data

                default: return undefined
            }

        } catch (error) {
            this.handleError(error)
        }
    }


    private getPath(route: string): string {
        return `${this.baseURL}${route}`
    }

    protected async server(route: string, method: 'GET' | 'POST', { query, params, body }: IRouteOptions) {

        switch (method) {
            case "GET":
                const response_get = await fetch(this.getPath(route), {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (!response_get.ok) {
                    this.handleFetchError(response_get)
                }
                return response_get.json()
            case "POST":
                const response_post = await fetch(this.getPath(route), {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                if (!response_post.ok) {
                    this.handleFetchError(response_post)
                }
                return response_post.json()
            default:
                return null
        }
    }




    private handleError(error: any) {
        if (error.response) {
            console.error('Error response', error.response.status, error.response.data)
        } else if (error.request) {
            console.error('No response', error.request)
        } else {
            console.error('Error', error.message)
        }
        throw error
    }

    private handleFetchError(response: any) {
        console.error('Fetch error', response.status, response.statusText)
        throw new Error('Fetch error')
    }
}



class Method extends Fetch {
    constructor(baseUrl: string) {
        super(baseUrl)
    }

    private async request(fromRequest: 'client' | 'server', route: string, type: 'GET' | 'POST', options: IRouteOptions = {}) {
        switch (fromRequest) {
            case "client":
                return await this.client(route, type, options)
            case "server":
                return await this.server(route, type, options)
            default:
                return null
        }
    }

    private generateFetch(route: string, type: 'GET' | 'POST') {
        return (fromRequest: 'client' | 'server', options: IRouteOptions = {}) =>
            this.request(fromRequest, route, type, options)
    }

    blocks = {
        byPage: this.generateFetch('block/:page', 'GET'),
    }


}


const method = new Method('http://localhost:3001/api/')

export type IRoute = 'product.all' | 'product.one'


export default method



