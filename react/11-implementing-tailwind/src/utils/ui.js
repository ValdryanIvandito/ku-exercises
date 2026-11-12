import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * @param {import {"clsx"}.ClassValue[]} inputs - Class names or conditional class values.
 * @returns {string} A single string with merged class names.
 */

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
