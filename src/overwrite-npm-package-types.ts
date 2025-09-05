// This file should be named axios.d.ts
import 'axios'

declare module 'axios' {
    interface AxiosResponse {
        fakeData: any
    }
}