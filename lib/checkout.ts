/**
 * Sends the user to the provider's hosted checkout in a new tab.
 *
 * Only ever called once initialization has succeeded — opening the tab up
 * front flashes a blank one open and shut whenever it fails, which happens
 * routinely (e.g. pricing unavailable in the selected currency).
 */
export function openCheckout(url: string | undefined | null): void {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}
