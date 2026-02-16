import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface NetworkApplication {
    portfolioLink: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    specialties: string;
    location: string;
}
export interface ContactSubmission {
    desiredDate?: string;
    projectType: string;
    name: string;
    email: string;
    company?: string;
    message: string;
    timestamp: Time;
    budgetRange?: string;
}
export interface backendInterface {
    getContactSubmissionByEmail(email: string): Promise<ContactSubmission>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getNetworkApplicationByEmail(email: string): Promise<NetworkApplication>;
    getNetworkApplications(): Promise<Array<NetworkApplication>>;
    submitContact(name: string, email: string, company: string | null, projectType: string, desiredDate: string | null, budgetRange: string | null, message: string): Promise<void>;
    submitNetworkApplication(name: string, email: string, location: string, specialties: string, portfolioLink: string, message: string): Promise<void>;
}
