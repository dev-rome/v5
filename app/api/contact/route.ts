import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const email = process.env.FORM_EMAIL;

    if (!email) {
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    try {
        const body = await request.json();

        const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
