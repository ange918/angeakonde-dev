export const trackEvent = (eventName: string, properties?: Record<string, string>) => {
  if (typeof window === "undefined") return;
  if ((window as any).va) {
    (window as any).va("event", eventName, properties);
  }
  if ((window as any).gtag) {
    (window as any).gtag("event", eventName, properties);
  }
};

export const trackProjectClick = (projectName: string) => {
  trackEvent("project_click", { project: projectName });
};

export const trackContactClick = (source: string) => {
  trackEvent("contact_click", { source });
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click");
};

export const trackCVDownload = () => {
  trackEvent("cv_download");
};
