import React from 'react';

import { getComments } from '@/helpers/interview-helpers';
import Comment from '@/components/Comment';

export const dynamic = 'force-dynamic';

async function CommentSection() {
  const comments = await getComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default CommentSection;
