export function scrollIntoView(selector: string) {
    const el = document.getElementById(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }