import { ArrowLeft, ArrowUpLeft, Sparkles, Users } from "lucide-react";
import { candidate } from "../lib/site-data";

export default function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" />
          نامزد شورای دانش‌آموزی · {candidate.grade}
        </div>

        <h1 id="hero-title">
          صدای تو،
          <br />
          <span>آینده‌ی ما.</span>
        </h1>

        <p className="hero-description">{candidate.description}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#plans">
            برنامه‌های من <ArrowLeft size={18} />
          </a>
          <a className="button button-ghost" href="#about">
            بیشتر آشنا شو <ArrowUpLeft size={18} />
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <span className="meta-icon">
              <Sparkles size={15} />
            </span>
            ایده‌های تازه
          </span>
          <span>
            <span className="meta-icon">
              <Users size={15} />
            </span>
            مشارکت همه
          </span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <div className="floating-tag tag-top">
          <Sparkles size={15} /> تغییر با هم شروع می‌شه
        </div>

        <div className="hero-symbol-card">
          <div className="hero-symbol-glow" />
          <div className="hero-symbol">م</div>
          <strong>{candidate.name}</strong>
          <span>{candidate.grade}</span>
          <small>{candidate.school}</small>
        </div>

        <div className="floating-tag tag-bottom">
          <span className="tiny-star">✦</span>
          صدای هر دانش‌آموز مهمه
        </div>

        <div className="visual-spark spark-one">✦</div>
        <div className="visual-spark spark-two">✧</div>
      </div>

      <a className="scroll-hint" href="#about">
        <span />
        برای آشنایی بیشتر پایین برو
      </a>
    </section>
  );
}
