// Helper function for scrolling to the different page sections
export function executeScroll(ref: React.MutableRefObject<HTMLElement | null>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
}

// Helper function for opening my resume in a new tab
export function openResume() {
    window.open("/joe_gerhard_resume.pdf", "_blank");
}
// Helper function for opening an email to me in a new tab
export function emailMe() {
    window.open("mailto:JLGerhard@gmail.com", "_blank");
}
