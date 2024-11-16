'use client';
import {useUser} from "@auth0/nextjs-auth0/client";


export default function ProfileClient() {
    const { user, error, isLoading} = useUser();
    if (isLoading) return<div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (user) {
        return (
            <div className="container mx-auto columns-2">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold">Aktueller Kontostand für Luke:</h2>
                    <p>100 €</p>
                </div>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold">Aktueller Kontostand für Tommy:</h2>
                    <p>100 €</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='mt-10'>
                <p>Du musst dich <a href="/api/auth/login"
                                    className="text-blue-600 hover:text-blue-900">hier</a> einloggen, um mehr zu sehen.
                </p>
            </div>
        )
    }
}
