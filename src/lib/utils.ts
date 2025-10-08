type ClassValue = string | number | boolean | undefined | null | ClassValue[];

/**
 * Utility function to conditionally join classNames together
 * @param inputs - Array of class values
 * @returns Combined className string
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim();
}
