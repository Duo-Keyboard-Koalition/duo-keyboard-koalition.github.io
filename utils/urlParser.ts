export function parseUrlHash(hash: string): Record<string, string> {
  if (!hash.startsWith("#")) {
    return {};
  }

  return hash
    .substring(1) // Remove the leading '#'
    .split("&") // Split by '&' to get key-value pairs
    .reduce((acc, pair) => {
      const [key, value] = pair.split("=");
      if (key && value) {
        acc[key] = decodeURIComponent(value); // Decode URI components
      }
      return acc;
    }, {} as Record<string, string>);
}
