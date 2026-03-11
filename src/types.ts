
export type NewsAuthor = {
    name: string;
}

export type NewsItemResult = {
    data: Array<NewsItem>;
}

export type NewsItem = {
    id: string;
    title: string;
    slug: string;
    intro: string;
    author: NewsAuthor;
}


export type NewsState = "initial" | "loading" | "error" | "data" | "empty";