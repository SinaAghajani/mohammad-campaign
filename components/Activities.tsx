import { BookOpen, Handshake, Users, Check } from "lucide-react";
import { activities } from "../lib/site-data";

const icons = {
  users: Users,
  book: BookOpen,
  handshake: Handshake,
};

export default function Activities() {
  return (
    <section
      className="section container"
      id="activities"
      aria-labelledby="activities-title"
    >
      <div className="section-heading">
        <span className="section-kicker">چیزهایی که برام مهمن</span>
        <h2 id="activities-title">
          مدرسه‌ای که <span>با هم می‌سازیم</span>
        </h2>
        <p>تغییرهای خوب با همکاری‌های کوچک و پیوسته شروع می‌شن.</p>
      </div>

      <div className="activity-list">
        {activities.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];

          return (
            <article className="activity-item" key={item.number}>
              <span className="activity-index">{item.number}</span>

              <span className="activity-icon">
                <Icon size={21} />
              </span>

              <div className="activity-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <Check className="activity-check" size={19} aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
