import {
  CalendarDays,
  Lightbulb,
  MessageCircle,
  Users,
  Landmark,
  Flag,
  Handshake,
  Megaphone,
  BookOpen,
} from "lucide-react";

import { promises } from "../lib/site-data";

const icons = {
  lightbulb: Lightbulb,
  message: MessageCircle,
  calendar: CalendarDays,
};

const schoolTopics = [
  {
    icon: Users,
    number: "01",
    title: "شورای دانش‌آموزی چیست؟",
    description:
      "شورای دانش‌آموزی فرصتی برای مشارکت دانش‌آموزان در بهبود فضای مدرسه است. اعضای شورا نظرات و پیشنهادهای هم‌کلاسی‌های خود را جمع‌آوری می‌کنند و برای پیگیری مسائل قابل‌حل، با مسئولان مدرسه گفت‌وگو می‌کنند.",
    tag: "مشارکت و مسئولیت‌پذیری",
  },
  {
    icon: Flag,
    number: "02",
    title: "۱۳ آبان؛ روز دانش‌آموز",
    description:
      "سیزدهم آبان در تقویم ایران روز دانش‌آموز و یادآور رویدادهای تاریخی مهم، از جمله حرکت دانش‌آموزان در سال ۱۳۵۷ است. این روز فرصتی برای توجه به آگاهی، مسئولیت‌پذیری، همدلی و نقش دانش‌آموزان در جامعه است.",
    tag: "آگاهی و مسئولیت اجتماعی",
  },
  {
    icon: Handshake,
    number: "03",
    title: "همکاری؛ کلید مدرسه بهتر",
    description:
      "مدرسه‌ای پویا با همکاری دانش‌آموزان، معلمان و مسئولان مدرسه شکل می‌گیرد. احترام متقابل، رعایت قوانین، مراقبت از محیط مدرسه و شنیدن دیدگاه‌های متفاوت، بخشی از این همکاری است.",
    tag: "همدلی و همکاری",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "صدای دانش‌آموزان",
    description:
      "همه دانش‌آموزان باید بتوانند ایده‌ها، دغدغه‌ها و پیشنهادهای خود را محترمانه مطرح کنند. شورا می‌تواند این دیدگاه‌ها را دسته‌بندی کند و برای بررسی و پیگیری به مسئولان مدرسه انتقال دهد.",
    tag: "گفت‌وگو و پیگیری",
  },
  {
    icon: CalendarDays,
    number: "05",
    title: "مناسبت‌ها و فعالیت‌های مدرسه",
    description:
      "با پیشنهادهای دانش‌آموزان می‌توان برای مناسبت‌هایی مانند هفته کتاب و کتاب‌خوانی، روز معلم، روز درخت‌کاری و برنامه‌های فرهنگی و ورزشی ایده‌های جذاب‌تری مطرح کرد؛ البته با هماهنگی و تأیید مدرسه.",
    tag: "فرهنگ، هنر و ورزش",
  },
  {
    icon: BookOpen,
    number: "06",
    title: "مدرسه‌ای برای رشد همه",
    description:
      "توجه به دوستی، احترام به تفاوت‌ها، کمک به هم‌کلاسی‌ها، حفظ پاکیزگی کلاس و ایجاد فضایی امن و صمیمی می‌تواند تجربه مدرسه را برای همه بهتر کند.",
    tag: "احترام و پیشرفت",
  },
];

export default function CampaignPromises() {
  return (
    <section
      className="plans-section section"
      id="plans"
      aria-labelledby="plans-title"
    >
      <div className="container">
        <div className="section-heading centered">
          <span className="section-kicker">برنامه‌ها و آگاهی دانش‌آموزی</span>

          <h2 id="plans-title">
            برای مدرسه‌ای <span>بهتر از همیشه</span>
          </h2>

          <p>
            از برنامه‌های پیشنهادی کمپین تا آشنایی با شورای دانش‌آموزی،
            مناسبت‌های مهم و نقش ما در ساختن محیطی بهتر برای یادگیری و دوستی.
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
                    <Icon size={23} aria-hidden="true" />
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="card-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="section-heading centered school-topics-heading">
          <span className="section-kicker">بیشتر بدانیم</span>

          <h2>
            مدرسه فقط کلاس درس <span>نیست</span>
          </h2>

          <p>
            آشنایی با مسئولیت‌های ما، مناسبت‌های مهم و راه‌هایی که می‌توانیم در
            کنار هم فضای مدرسه را بهتر کنیم.
          </p>
        </div>

        <div className="promise-grid school-topics-grid">
          {schoolTopics.map((item) => {
            const Icon = item.icon;

            return (
              <article className="promise-card glass-card" key={item.number}>
                <div className="promise-top">
                  <span className="promise-number">{item.number}</span>

                  <span className="promise-icon">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <span className="topic-tag">{item.tag}</span>

                <span className="card-line" aria-hidden="true" />
              </article>
            );
          })}
        </div>

        <div className="student-council-note">
          <div className="student-council-note-icon">
            <Lightbulb size={22} aria-hidden="true" />
          </div>

          <div>
            <h3>یک نکته مهم درباره شورای دانش‌آموزی</h3>

            <p>
              شورا محل شنیدن صدای دانش‌آموزان، ارائه پیشنهاد و پیگیری مسائل در
              چارچوب مقررات مدرسه است. تصمیم‌گیری‌ها و اجرای برنامه‌ها با توجه
              به اختیارات شورا و هماهنگی با مسئولان مدرسه انجام می‌شود. هدف،
              مشارکت مسئولانه و ساختن فضایی بهتر برای همه است.
            </p>
          </div>
        </div>

        <p className="honesty-note">
          <Lightbulb size={15} aria-hidden="true" />
          برنامه‌های انتخاباتی پیشنهادهای اولیه‌اند و اجرای آن‌ها به امکان اجرا،
          مقررات و هماهنگی با مسئولان مدرسه بستگی دارد.
        </p>
      </div>
    </section>
  );
}
