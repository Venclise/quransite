
import { clsx, type ClassValue } from "clsx"
// import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats an ISO date string, Date object, or timestamp into a readable format.
 * * @param date - The date to format (Date object, ISO string, or number)
 * @param includeTime - Optional boolean to include time (e.g., "Aug 1, 2026, 1:05 PM")
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number | undefined | null,
  includeTime: boolean = false
): string {
  if (!date) return "";

  const d = new Date(date);

  if (isNaN(d.getTime())) {
    return "Invalid Date";
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short", 
    day: "numeric",
    ...(includeTime && {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  };

  return new Intl.DateTimeFormat("en-US", options).format(d);
}



const RATES: Record<string, number> = {
  USD: 1,
  GBP: 0.78,
  EUR: 0.92,
  PKR: 278,
  CAD: 1.36,
};

export function convertPrice(amount: number, currency: string = "USD") {
  const code = currency.toUpperCase();
  const rate = RATES[code] || 1;  
  const converted = amount * rate;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
  }).format(converted);
}