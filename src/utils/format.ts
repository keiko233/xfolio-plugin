export function formatError(err: unknown): string {
  return `Error: ${err instanceof Error ? err.message : String(err)}`;
}
