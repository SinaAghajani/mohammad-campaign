import { CalendarDays, Lightbulb, MessageCircle } from "lucide-react";
import { promises } from "../lib/site-data";

const icons = {
  lightbulb: Lightbulb,
  message: MessageCircle,
  calendar: CalendarDays,
};

export default function CampaignPromises() {
  return (
    <section
      className="plans-section section"
      id="plans"
      aria-labelledby="plans-title"
    >
      <div className="container">
        <div className="section-heading centered">
          <span className="section-kicker">برنامه‌های انتخاباتی</span>
          <h2 id="plans-title">
            سه مسیر برای <span>تغییر بهتر</span>
          </h2>
          <p>
            ایده‌هایی برای شروع گفت‌وگو و ساختن مدرسه‌ای پویاتر؛ با همکاری شما.
          </p>
        </div>

        <div className="promise-grid">
          {promises.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];

            return (
              <article className="promise-card glass-card" key={item.number}>
                <div className="promise-top">
                  <span className="promise-number">{item.number}</span>
                  <span className="promise-icon">
                    <Icon size={23} />
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="card-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <p className="honesty-note">
          <Lightbulb size={15} />
          برنامه‌ها پیشنهادهای اولیه‌اند و با توجه به امکان اجرا و نظر مدرسه
          پیگیری می‌شوند.
        </p>
      </div>
    </section>
  );
}
