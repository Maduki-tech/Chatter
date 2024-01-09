"use client";
import { useEffect } from "react";

export default function HomePage() {
    useEffect(() => {
        async function fetcher() {
            await fetch("http://localhost:8080/")
                .then((res) => res.json())
                .then((data) => console.log(data));
        }

        fetcher().catch((err) => console.error(err));
    });
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            David
        </main>
    );
}
