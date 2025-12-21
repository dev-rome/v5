"use client";

import { useEffect } from "react";

export function HashCleaner() {
    useEffect(() => {
        // Automatically remove the URL hash after a brief delay to prevent it from persisting on refresh
        if (window.location.hash) {
            setTimeout(() => {
                window.history.replaceState(null, "", window.location.pathname + window.location.search);
            }, 50);
        }
    }, []);
    return null;
}
