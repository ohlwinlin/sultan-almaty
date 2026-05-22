import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Star, Calendar, Users, MessageCircle, Instagram, Navigation,
} from "lucide-react";
import { Section } from "@/components/Section";
import { FloatingActions } from "@/components/FloatingActions";

import heroImg from "@/assets/hero-exterior.jpg";
import aboutImg from "@/assets/banquet-hall.jpg";
import banquetImg from "@/assets/banquet-hall.jpg";
import lagman from "@/assets/lagman.jpg";
import manty from "@/assets/manty.jpg";
import shashlik from "@/assets/shashlik.jpg";
import plov from "@/assets/plov.jpg";
import khachapuri from "@/assets/khachapuri.jpg";
import tsomyan from "@/assets/tsomyan.jpg";
import suantang from "@/assets/suantang.jpg";
import eggplant from "@/assets/eggplant.jpg";
import mushrooms from "@/assets/mushrooms.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const WA = "https://wa.me/77079008899";
const IG = "https://instagram.com/cafe_alsultan";
const PHONE = "+7 707 900 88 99";
const PHONE_HREF = "tel:+77079008899";
const MAP_LINK = "https://maps.google.com/?q=43.184294,76.820013";
const ADDRESS = "Улица Алмалы 1/50, Тастыбулак, Наурызбайский район, Алматы";

const eastern = [
  { name: "Лагман", desc: "Тянутая лапша с говядиной и овощами в насыщенном бульоне", img: lagman },
  { name: "Манты", desc: "Сочные мясные манты на пару — классика восточного стола", img: manty },
  { name: "Шашлык", desc: "Маринованное мясо на углях с дымком и специями", img: shashlik },
  { name: "Плов", desc: "Ароматный плов с говядиной, морковью и нутом", img: plov },
  { name: "Хачапури", desc: "Грузинский хлеб с расплавленным сыром и яйцом", img: khachapuri },
];

const chinese = [
  { name: "Цомян", desc: "Жареная лапша с говядиной и овощами по-китайски", img: tsomyan },
  { name: "Суан Тан Ру", desc: "Острый кисло-сладкий суп с тонкими нотками специй", img: suantang },
  { name: "Баклажаны в кляре", desc: "Хрустящие баклажаны с фирменным соусом", img: eggplant },
  { name: "Вешенки в кляре", desc: "Золотистые вешенки в воздушном кляре", img: mushrooms },
];

const reviews = [
  { text: "Очень нравится кухня и сервис! Уютный и красивый интерьер, приветливый персонал и самые вкусные блюда. То, чего не хватало нашему району 👍", author: "Айгерим" },
  { text: "Никогда не замечала, хотя находится вдоль дороги. Очень вкусная кухня, атмосфера, обслуживание. Вот поэтому и людей много!", author: "Динара" },
  { text: "Бірінші рет келдік, іші кең, әрі жарық. Заманауи интерьер, таза. Тамақтары дәмді, тез де күткен жоқпыз. Персонал мәдениетті 🫶🏻", author: "Аружан" },
  { text: "11 октября отмечали Сырга салу дочери — вечер удался на славу! Еда очень вкусная, официанты быстрые. Всё благодаря профессионализму администратора Шолпан — внимательная, отзывчивая и душевная!", author: "Гульнара" },
];

function Home() {
  const [tab, setTab] = useState<"east" | "china">("east");
  const dishes = tab === "east" ? eastern : chinese;

  return (
    <main className="bg-background text-foreground">
      <FloatingActions />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Фасад ресторана AL Sultan"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-burgundy-deep/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream animate-fade-in">
          <span className="ornament text-xs md:text-sm uppercase tracking-[0.4em] text-gold">
            Аль Султан · Алматы
          </span>
          <h1 className="mt-6 font-display text-6xl md:text-8xl font-semibold text-balance">
            AL <span className="text-gold">Sultan</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light italic text-cream/90 text-balance">
            Восточная кухня в сердце Алматы
          </p>
          <p className="mt-3 text-sm md:text-base text-cream/70">
            Халял · Восточная и китайская кухня · Банкеты
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-medium text-burgundy-deep shadow-gold transition hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              Забронировать стол
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 px-8 py-4 font-medium text-cream backdrop-blur-md transition hover:bg-cream/15"
            >
              <MessageCircle className="h-5 w-5" />
              Написать в WhatsApp
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-cream/90 text-sm">4.7 · 800+ отзывов</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="О нас" title="Дом гостеприимства и вкуса">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Уютный интерьер AL Sultan"
              width={1200}
              height={1400}
              loading="lazy"
              className="rounded-lg shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-gold p-6 rounded-lg shadow-gold">
              <div className="text-burgundy-deep text-3xl font-display font-bold">800+</div>
              <div className="text-burgundy-deep/80 text-xs uppercase tracking-wider">Отзывов 4.7★</div>
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-burgundy font-medium">AL Sultan</span> — это уютное кафе халял,
              где встречаются ароматы восточной и китайской кухни. Мы создали место, в которое
              хочется возвращаться: тёплый свет, заботливый сервис и блюда, приготовленные с душой.
            </p>
            <p>
              Идеально подходит для семейных ужинов, дружеских встреч, банкетов и корпоративных
              мероприятий. Каждое блюдо — это искреннее гостеприимство нашей команды.
            </p>
            <ul className="grid grid-cols-2 gap-3 pt-2">
              {["100% Халял", "Уютная атмосфера", "Банкетный зал", "Семейное место"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-gold" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* MENU */}
      <Section id="menu" eyebrow="Меню" title="Наши фирменные блюда" className="bg-burgundy-deep text-cream">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-cream/10 backdrop-blur">
            <button
              onClick={() => setTab("east")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                tab === "east" ? "bg-gradient-gold text-burgundy-deep shadow-gold" : "text-cream/80"
              }`}
            >
              Восточная кухня
            </button>
            <button
              onClick={() => setTab("china")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${
                tab === "china" ? "bg-gradient-gold text-burgundy-deep shadow-gold" : "text-cream/80"
              }`}
            >
              Китайская кухня
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="group rounded-xl overflow-hidden bg-cream/5 border border-gold/20 backdrop-blur-sm transition hover:border-gold/60 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-gold">{d.name}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* BANQUET */}
      <Section id="banquet" eyebrow="Банкеты и события" title="Ваши торжества — наша забота">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <img
            src={banquetImg}
            alt="Банкетный зал"
            width={1600}
            height={1000}
            loading="lazy"
            className="rounded-lg shadow-elegant w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Проводим банкеты, ауызашар, дни рождения, Сырга салу и корпоративные мероприятия.
              Поможем организовать праздник любого формата — от камерного ужина до большого торжества.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "Банкеты" },
                { icon: Users, label: "Ауызашар" },
                { icon: Star, label: "Сырга салу" },
                { icon: Users, label: "Корпоративы" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                  <Icon className="h-5 w-5 text-gold" />
                  <span className="font-medium text-burgundy-deep">{label}</span>
                </div>
              ))}
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3.5 font-medium text-cream transition hover:bg-burgundy-deep shadow-elegant"
            >
              <MessageCircle className="h-5 w-5" />
              Обсудить событие в WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" eyebrow="Отзывы гостей" title="Что говорят о нас" className="bg-muted">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="relative p-8 rounded-xl bg-card border border-gold/30 shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-4 left-6 bg-gradient-gold px-3 py-1 rounded-full flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3 w-3 fill-burgundy-deep text-burgundy-deep" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed italic">"{r.text}"</p>
              <footer className="mt-5 text-sm font-medium text-burgundy">— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* LOCATION */}
      <Section id="location" eyebrow="Как добраться" title="Мы ждём вас">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-elegant border border-border aspect-[4/3] md:aspect-auto">
            <iframe
              title="Карта AL Sultan"
              src="https://www.google.com/maps?q=43.184294,76.820013&z=16&output=embed"
              className="h-full w-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 text-gold shrink-0 mt-1" />
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Адрес</div>
                <div className="text-lg text-burgundy-deep">{ADDRESS}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-6 w-6 text-gold shrink-0 mt-1" />
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Телефон</div>
                <a href={PHONE_HREF} className="text-lg text-burgundy-deep hover:text-gold transition">
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 text-gold shrink-0 mt-1" />
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Часы работы</div>
                <div className="text-lg text-burgundy-deep">Пн–Вс, 10:00 – 23:00</div>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-medium text-burgundy-deep shadow-gold transition hover:scale-105 w-fit"
            >
              <Navigation className="h-5 w-5" />
              Построить маршрут
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-burgundy-deep text-cream py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <div className="font-display text-3xl">AL <span className="text-gold">Sultan</span></div>
            <p className="mt-3 text-sm text-cream/70 italic">Восточная кухня в сердце Алматы</p>
          </div>
          <div className="text-sm text-cream/80 space-y-2">
            <div>{ADDRESS}</div>
            <a href={PHONE_HREF} className="block hover:text-gold transition">{PHONE}</a>
            <div>Пн–Вс · 10:00 – 23:00</div>
          </div>
          <div className="flex md:justify-end items-start gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 hover:bg-whatsapp transition">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 hover:bg-gold hover:text-burgundy-deep transition">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 pt-6 border-t border-cream/10 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} AL Sultan · Аль Султан · Все права защищены
        </div>
      </footer>
    </main>
  );
}
