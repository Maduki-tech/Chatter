"use client";
import { useEffect, useState } from "react";

type Data = {
    message: string;
};

export default function HomePage() {
    const [data, setData] = useState<Data>();
    useEffect(() => {
        async function fetcher() {
            await fetch("http://localhost:8080/")
                .then((res) => res.json())
                .then((data: Data) => setData(data));
        }

        fetcher().catch((err) => console.error(err));
    });


    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            {data && <h1>{data.message}</h1>}
        </main>
    );
}
