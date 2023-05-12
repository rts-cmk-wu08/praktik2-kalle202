type Params = {
    id: string,
}

type SearchParams = {
    name: string,
    title: string,
    subtitle: string,
    text: string,
    id: string,
}

export type SearchParamsType = {
    params: Params,
    searchParams: SearchParams,
}