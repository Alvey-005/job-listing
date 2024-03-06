import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNowStrict } from "date-fns";

/**
 * Combines multiple class names into a single string using clsx and tailwind-merge.
 *
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a given amount of money into a currency string.
 *
 * @param amount - The amount of money to be formatted.
 * @returns The formatted currency string.
 * @example
 * formatMoney(1000); // "$1,000.00"
 * formatMoney(5000); // "$5,000.00"
 */
export function formatMoney(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Calculates the relative date from a given date to the current date.
 *
 * @param from - The date to calculate the relative date from.
 * @returns The relative date as a string with the suffix indicating the time difference.
 * @example
 * relativeDate(new Date()); // "just now"
 * relativeDate(new Date("2022-01-01")); // "in 1 year"
 */
export function relativeDate(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}
