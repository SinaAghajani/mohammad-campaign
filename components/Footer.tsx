import { Zap } from "lucide-react";
import { candidate } from "../lib/site-data";

export default function Footer() {
  return (
    <footer className="footer container">
      <a
        className="brand footer-brand"
        href="#home"
        aria-label="بازگشت به ابتدای صفحه"
      >
        <span className="brand-mark">
          <Zap size={19} fill="currentColor" />
        </span>

        <span className="brand-copy">
          <strong>{candidate.name}</strong>
          <small>{candidate.slogan}</small>
        </span>
      </a>

      <p>
        {candidate.grade} · {candidate.school}
      </p>

      <a className="back-top" href="#home">
        بازگشت به بالا ↑
      </a>
    </footer>
  );
}
