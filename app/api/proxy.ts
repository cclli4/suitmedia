import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const apiUrl = `https://suitmedia-backend.suitdev.com/api/ideas?${searchParams.toString()}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    // Log response for debugging
    console.log('API Response:', response);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error from backend: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('API Data:', data); // Debugging log
    return NextResponse.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
