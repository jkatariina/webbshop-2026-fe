import { getBaseUrl } from "./api.js";

export async function getPlants() {
    const url = new URL("plants", getBaseUrl());

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch plants");
    }

    return response.json();
}

export async function createPlant(plant) {
    const url = new URL("plants", getBaseUrl());

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
    });

    if (!response.ok) {
        throw new Error("Failed to create plant");
    }

    return response.json();
}