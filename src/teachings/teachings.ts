export interface Teachings {
    id: number;
    eventName: string;
    date: string;
    preacher: string;
    topic: string;
    summary: string;
    audioLink: string;
    videoLink: string;
    slidesLink: string;
}

export interface CreateTeachings {
    eventName: string;
    date: string;
    preacher: string;
    topic: string;
    summary: string;
    audioLink: string;
    videoLink: string;
    slidesLink: string;
}

export interface UpdateTeachings {
    eventName?: string;
    date?: string;
    preacher?: string;
    topic?: string;
    summary?: string;
    audioLink?: string;
    videoLink?: string;
    slidesLink?: string;
}