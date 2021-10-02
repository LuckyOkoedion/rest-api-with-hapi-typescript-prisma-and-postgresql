export interface User {
    id: number;
    email: string;
    name: string;
    role: "staff" | "member" | "pastor";
    phoneNumber: string;
    permissions: string;
}


export interface CreateUser {
    email: string;
    name: string;
    role: "staff" | "member" | "pastor";
    phoneNumber: string;
    permissions: string;
}

export interface UpdateUser {
    email?: string;
    name?: string;
    role?: "staff" | "member" | "pastor";
    phoneNumber?: string;
    permissions?: string;
}