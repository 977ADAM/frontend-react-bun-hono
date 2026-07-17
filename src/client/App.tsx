import { useEffect, useState } from "react";

export function App() {
    const [message, setMessage] = useState("загрузка...");

    useEffect(() => {
      fetch("/api/hello")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
            <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
            <h1>React + Bun + Hono ⚡</h1>
            <p>
                Ответ от сервера: <strong>{message}</strong>
            </p>
        </main>
    );
}
