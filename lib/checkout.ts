/**
 * Sends the user to the provider's hosted checkout.
 *
 * Opening the tab up front is the usual way to dodge popup blockers, but it
 * flashes a blank tab open and shut whenever initialization fails — which it
 * does routinely, e.g. when pricing in the selected currency is unavailable.
 * So the tab is opened only once there is a URL to put in it, and if the
 * blocker rejects it (the promise callback has lost the user-gesture trust)
 * the current tab navigates instead of stranding the user.
 */
export function openCheckout(url: string | undefined | null): boolean {
  if (!url) return false;

  const tab = window.open(url, "_blank", "noopener,noreferrer");
  if (!tab || tab.closed) {
    window.location.href = url;
  }
  return true;
}
