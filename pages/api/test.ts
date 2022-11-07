import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    fields: {
      summary: '한줄요약 테스트 ',
    },
  });
}
