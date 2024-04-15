export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function percentifyRating(rating: number): number {
  const MAX_PERCENT = 100;
  const MAX_RATING = 5;

  return (rating * MAX_PERCENT) / MAX_RATING;
}

export function concatToPath(...parts: string[]): string {
  const PATH_SEPARATOR = '/';

  return parts.join(PATH_SEPARATOR);
}
