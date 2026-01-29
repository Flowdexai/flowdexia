export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { message, sessionId } = await request.json();

        if (!message || !sessionId) {
            return NextResponse.json(
                { error: 'Missing message or sessionId' },
                { status: 400 }
            );
        }

        const username = process.env.N8N_AUTH_USER;
        const password = process.env.N8N_AUTH_PASSWORD;
        const url = process.env.N8N_WEBHOOK_URL;

        if (!username || !password || !url) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const base64Credentials = btoa(`${username}:${password}`);

        const n8nResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${base64Credentials}`
            },
            body: JSON.stringify({ message, sessionId })
        });

        const responseData = await n8nResponse.json();

        return NextResponse.json(responseData, {
            status: n8nResponse.status
        });

    } catch (error) {
        console.error('Chat API error:', error.message);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}