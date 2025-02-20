export type Product = {
    _id: string,
    title: string,
    category: string,
    description: string,
    cost: number
  }

  export enum RequestState {
    Pending,
    Failed,
    Succeeded,
  }