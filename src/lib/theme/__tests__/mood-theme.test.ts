import { describe, expect, it } from "vitest";

import {
  MOOD_CLASS_MAP,
  resolveMoodClasses,
  isBaseTheme,
} from "@/lib/theme/mood-theme";

describe("resolveMoodClasses", () => {
  it("returns specific classes for a known mood", () => {
    expect(resolveMoodClasses("happy")).toEqual(MOOD_CLASS_MAP.happy);
  });

  it("falls back to neutral when mood is unknown", () => {
    expect(resolveMoodClasses("mysterious")).toEqual(MOOD_CLASS_MAP.neutral);
  });

  it("falls back to neutral when mood is empty", () => {
    expect(resolveMoodClasses(undefined)).toEqual(MOOD_CLASS_MAP.neutral);
  });
});

describe("isBaseTheme", () => {
  it("validates supported themes", () => {
    expect(isBaseTheme("serene")).toBe(true);
    expect(isBaseTheme("midnight")).toBe(true);
    expect(isBaseTheme("zen")).toBe(true);
    expect(isBaseTheme("vibrant")).toBe(true);
  });

  it("rejects unsupported themes", () => {
    expect(isBaseTheme("retro")).toBe(false);
    expect(isBaseTheme(null)).toBe(false);
  });
});
