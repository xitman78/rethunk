//

export function likeWork(workId) {
  return {
    type: 'LIKEWORK',
    workId
  };
}

export function incrementComment(id) {
  return {
    type: 'INCREMENT_COMMENT',
    id
  };
}
