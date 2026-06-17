import { vi, beforeAll, afterAll } from "vitest";

export function mockFetch() {
  beforeAll(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    });
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });
}
