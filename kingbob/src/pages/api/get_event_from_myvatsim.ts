import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { slug } = req.body

    // Fetch my VATSIM link
    const response = await fetch(`https://my.vatsim.net/api/v2/events/view/${slug}`);

    // Save data to state
    const data = await response.json();

    res.status(response.status).json(data)
}
