export function ensure<T>(argument: T | undefined | null, message = 'Not found.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }
  return argument;
}