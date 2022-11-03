import type { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const router = useRouter();
  const { id } = router.query;

  res.status(200).json({
    fields: {
      summary: '한줄요약 테스트 ' + id,
    },
  });
}
