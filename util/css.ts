/**
 * Combine CSS classes
 * 
 * @param classes the css classes to combine
 * @returns 
 */
export function classNames(...classes: (string | null | undefined )[]) {
    return classes.filter(Boolean).join(' ')
}
  