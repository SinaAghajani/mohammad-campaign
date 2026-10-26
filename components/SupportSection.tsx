"use client";

import { useState } from "react";
import { Check, Heart, Lightbulb, X } from "lucide-react";

export default function SupportSection() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!suggestion.trim()) return;

    setSubmitted(true);
    setSuggestion("");
  }

  return (
    <>
      <section
        className="section container"
        id="suggestions"
        aria-labelledby="suggestions-title"
      >
        <div className="idea-card">
          <div className="idea-content">
            <span className="section-kicker">این کمپین برای همه‌مونه</span>

            <h2 id="suggestions-title">
              تو چه ایده‌ای <span>داری؟</span>
            </h2>

            <p>
              یک پیشنهاد برای بهتر شدن مدرسه داری؟ اینجا بنویس تا بتوانیم
              درباره‌اش گفت‌وگو کنیم.
            </p>
          </div>

          <form className="idea-form" onSubmit={handleSubmit}>
            <label htmlFor="campaign-suggestion">پیشنهاد تو</label>

            <textarea
              id="campaign-suggestion"
              value={suggestion}
              onChange={(event) => {
                setSuggestion(event.target.value);
                setSubmitted(false);
              }}
              placeholder="مثلاً: برگزاری روز بازی‌های گروهی..."
              rows={4}
              maxLength={350}
              required
              aria-describedby="suggestion-note"
            />

            <div className="form-bottom">
              <small id="suggestion-note">
                {suggestion.length} از ۳۵۰ نویسه
              </small>

              <button
                className="button button-primary"
                type="submit"
                disabled={!suggestion.trim()}
              >
                ثبت نمایشی <Lightbulb size={17} />
              </button>
            </div>

            {submitted && (
              <p className="form-success" role="status">
                <Check size={16} />
                پیشنهاد در این صفحه ثبت شد؛ برای ذخیره دائمی باید سرویس سمت سرور
                متصل شود.
              </p>
            )}
          </form>
        </div>
      </section>

      <section
        className="support-section container section"
        id="support"
        aria-labelledby="support-title"
      >
        <div className="support-box">
          <div className="support-spark">
            <Heart size={24} />
          </div>

          <span className="section-kicker">با هم، بهتر می‌سازیم</span>

          <h2 id="support-title">
            صدای تو، <span>آینده‌ی ما.</span>
          </h2>

          <p>
            اگر به مشارکت، ایده‌های تازه و شنیده شدن صدای دانش‌آموزان باور داری،
            همراه این مسیر باش.
          </p>

          <button
            className="button button-primary support-button"
            type="button"
            onClick={() => setSupportOpen(true)}
          >
            همراه این ایده‌ام <Heart size={17} />
          </button>

          <span className="support-footnote">
            این دکمه نمادین است و رأی‌گیری رسمی محسوب نمی‌شود.
          </span>
        </div>
      </section>

      {supportOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={() => setSupportOpen(false)}
        >
          <section
            className="support-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="support-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setSupportOpen(false)}
              aria-label="بستن پنجره"
            >
              <X size={20} />
            </button>

            <div className="modal-icon">
              <Heart size={25} />
            </div>

            <h2 id="support-modal-title">ممنون که همراهی! 💜</h2>

            <p>
              حمایتت از ایده‌ی مشارکت و مدرسه‌ای بهتر ارزشمنده. انتخاب نهایی با
              خودته و رأی رسمی فقط در فرایند مدرسه ثبت می‌شه.
            </p>

            <button
              className="button button-primary modal-done"
              type="button"
              onClick={() => setSupportOpen(false)}
            >
              متوجه شدم <Check size={17} />
            </button>
          </section>
        </div>
      )}
    </>
  );
}
