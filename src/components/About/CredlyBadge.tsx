import { useEffect } from "react";

const CREDLY_SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

export default function CredlyBadge({ badgeId }: { badgeId: string }) {
  useEffect(() => {
    // Re-append on every mount (not just once globally) so badges still
    // render after client-side route navigations away from and back to
    // this page, since the script only scans the DOM at execution time.
    const script = document.createElement("script");
    script.src = CREDLY_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [badgeId]);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={badgeId}
      data-share-badge-host="https://www.credly.com"
    />
  );
}
