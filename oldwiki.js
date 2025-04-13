// Only run on Wikipedia sites
if (window.location.hostname.includes('wikipedia.org')) {
  // Don't run on pages that should be left alone (special pages, etc.)
  const excludedPaths = ['/wiki/Special:', '/w/'];
  const shouldSkip = excludedPaths.some(path => window.location.pathname.includes(path));

  if (!shouldSkip) {
    // Check if useskin=vector is already in the URL
    const url = new URL(window.location.href);
    if (!url.searchParams.has('useskin')) {
      // Add the parameter properly using URLSearchParams
      url.searchParams.set('useskin', 'vector');

      // Preserve hash fragments
      window.location.replace(url.toString());
    }
  }
}
