export function authorsFormattedDropdown(authors) {
  return authors.map(formatAuthorForDropdown);
}

function formatAuthorForDropdown(author) {
  return {
    value: author.id,
    text: author.firstName + ' ' + author.lastName
  };
}
