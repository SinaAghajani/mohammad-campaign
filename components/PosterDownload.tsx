"use client";

import { Download, FileImage, Sparkles } from "lucide-react";

export default function PosterDownload() {
  return (
    <section className="poster-section" id="download-poster">
      <div className="container">
        <div className="poster-card">
          <div className="poster-content">
            <span className="section-kicker">
              <Sparkles size={16} />
              پوستر رسمی کمپین
            </span>

            <h2>
              حمایتت رو
              <br />
              <span>روی پوستر نشون بده!</span>
            </h2>

            <p>
              پوستر انتخاباتی محمد نبی‌زاده را دریافت کن و برای دوستانت
              بفرست تا بیشتر با برنامه‌ها و اهداف کمپین آشنا شوند.
            </p>

            <a
              className="button button-primary"
              href="/images/campaign-poster.jpg"
              download="mohammad-nabizadeh-campaign-poster.jpg"
            >
              <Download size={18} />
              دانلود پوستر
            </a>

            <div className="poster-file-info">
              <FileImage size={16} />
              <span>فرمت JPG · مناسب اشتراک‌گذاری</span>
            </div>
          </div>

          <div className="poster-preview">
            <img
              src="/images/campaign-poster.jpg"
              alt="پوستر انتخاباتی محمد نبی‌زاده"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}