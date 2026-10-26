import Image from "next/image";
import { Sparkles, Users } from "lucide-react";
import { candidate } from "../lib/site-data";

export default function CandidateProfile() {
  return (
    <section
      className="section container"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <span className="section-kicker">آشنایی کوتاه</span>
        <h2 id="about-title">
          سلام! من <span>محمدم.</span>
        </h2>
        <p>
          می‌خواهم نماینده‌ای مسئولیت‌پذیر برای شنیدن، گفت‌وگو و پیگیری ایده‌های
          شما باشم.
        </p>
      </div>

      <div className="candidate-profile glass-card">
        <div className="candidate-photo-wrap">
          <Image
            src="/images/candidate.jpg"
            alt={`تصویر ${candidate.name}`}
            fill
            sizes="(max-width: 700px) 78vw, 300px"
            className="candidate-photo"
            priority
          />

          <span className="photo-badge">
            <Sparkles size={14} />
            نامزد شورای دانش‌آموزی
          </span>
        </div>

        <div className="candidate-bio">
          <span className="section-kicker">درباره نامزد</span>
          <h3>{candidate.name}</h3>

          <p className="candidate-school">
            {candidate.grade} · {candidate.school}
          </p>

          <p>
            شورای دانش‌آموزی فرصتی است تا نظرها و پیشنهادهای ما شنیده شوند. هدف
            من جمع‌آوری ایده‌ها، گفت‌وگو درباره راه‌حل‌های عملی و پیگیری
            پیشنهادها با همکاری دانش‌آموزان و مسئولان مدرسه است.
          </p>

          <div className="profile-values">
            <span>
              <Users size={16} /> مشارکت
            </span>
            <span>
              <Sparkles size={16} /> خلاقیت
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
