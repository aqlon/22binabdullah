
import React from 'react';
import Header from './components/Header';
import ChatBot from './components/ChatBot';
import { BIN_ABDULLAH_BIO, SOCIAL_LINKS, ARTICLE_POINTS, MAIN_POST, SERVICES } from './constants';

const App: React.FC = () => {
  // تم استخدام المسار المحلي للصورة المرفوعة
  const profileImageUrl = "/assista/Snapchat-1107833073.jpg";

  return (
    <div className="min-h-screen flex flex-col font-['Tajawal'] bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-teal-500/5 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in text-center md:text-right">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  <span className="block">{BIN_ABDULLAH_BIO.name}</span>
                  <span className="block gradient-text mt-2">{BIN_ABDULLAH_BIO.title}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                  {BIN_ABDULLAH_BIO.description}
                  <br />
                  <span className="text-blue-400 font-bold mt-2 block italic">نحول أفكارك إلى واقع عبر فريق من المبدعين المحترفين.</span>
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href={`https://wa.me/${BIN_ABDULLAH_BIO.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-green-600/20 hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center gap-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    تواصل واتساب
                  </a>
                  <a href="#about" className="bg-slate-900 border border-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all">
                    من هو بن عبدالله؟
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center">
                 <div className="w-72 h-80 md:w-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/40 border border-white/10 p-2 bg-slate-800/30 backdrop-blur-sm group transition-all duration-500">
                    <img 
                      src={profileImageUrl}
                      alt="بن عبدالله"
                      className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 {/* Floating badge */}
                 <div className="absolute -bottom-6 -right-6 md:right-4 bg-slate-900 border border-white/10 p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-pulse">
                    <div className="w-14 h-14 bg-[#FFFC00] rounded-2xl flex items-center justify-center text-3xl shadow-inner shadow-black/20 text-black">👻</div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Snapchat</p>
                        <p className="text-base font-bold text-white">@qat9696</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-950/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-blue-400 font-bold text-sm uppercase tracking-widest italic">فريقنا الإبداعي</span>
               <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">نحول أفكارك إلى واقع</h2>
               <p className="text-slate-500 mt-4 max-w-2xl mx-auto">نعتمد على فريق متخصص من المصممين والمبرمجين لتقديم حلول رقمية تخطف الأنظار وتلبي احتياجات مشاريعك.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {SERVICES.map((service, idx) => (
                 <div key={idx} className="bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Bio Detailed */}
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">السيرة الرسمية</span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">من هو بن عبدالله؟</h2>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-sm space-y-8 text-lg text-slate-300 leading-loose">
              <p>{BIN_ABDULLAH_BIO.longBio}</p>
              <div className="p-8 bg-blue-950/20 rounded-3xl border-r-4 border-blue-600">
                 <h3 className="text-xl font-bold text-blue-400 mb-3">فريق العمل والخبرة</h3>
                 <p>{BIN_ABDULLAH_BIO.teamInfo}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-6">مجالات التميز</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                  "حلول برمجية متكاملة لتحويل الأفكار المعقدة إلى منصات رقمية ذكية وفعالة.",
                  "عدسات AR احترافية لابتكار تجارب تفاعلية تعزز الهوية البصرية لعلامتك التجارية.",
                  "هوية بصرية وشعارات نبتكرها لتعبر عن جوهر مشروعك وتترك أثراً لا يُنسى.",
                  "بوستات إبداعية مصممة لتناسب الذوق الخليجي وتضمن لك أعلى مستويات الوصول.",
                  "دعم فني للسناب لتبسيط الميزات التقنية الحديثة وتمكين المستخدمين من أدواتهم.",
                  "توجيه استراتيجي يمنح صنّاع المحتوى الجدد خارطة طريق للتميز في المنطقة.",
                  "تغطيات اجتماعية تنقل يوميات الحياة الخليجية والفعاليات بأسلوب عفوي وممتع."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">✓</span> 
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section id="articles" className="py-20 bg-slate-950/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="max-w-2xl">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">مقالات مختارة</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">{MAIN_POST.title}</h2>
              </div>
              <span className="text-slate-500 font-medium px-4 py-1 bg-slate-900 rounded-full border border-white/5">{MAIN_POST.date}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-64 md:h-96 border border-white/5">
                   <img src={MAIN_POST.image} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Blog feature" />
                </div>
                <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                   <p className="text-xl font-medium text-white mb-10 leading-relaxed bg-slate-900/40 p-6 rounded-2xl border border-white/5">{MAIN_POST.excerpt}</p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                      {ARTICLE_POINTS.map((point, idx) => (
                        <div key={idx} className="bg-slate-900/40 p-7 rounded-3xl border border-white/5 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all group">
                           <div className="text-3xl font-black text-blue-600/30 mb-4 group-hover:text-blue-500 transition-colors">0{idx + 1}</div>
                           <h4 className="font-bold text-white text-lg mb-3">{point.title}</h4>
                           <p className="text-sm text-slate-400 leading-relaxed">{point.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-slate-900 border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
                   <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      إحصائيات وإنجازات
                   </h3>
                   <div className="space-y-8">
                      {[
                        { label: 'متابعين في تزايد', value: '1M+' },
                        { label: 'محتوى يومي', value: '365 يوم' },
                        { label: 'شروحات تقنية', value: '500+' }
                      ].map((stat, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-5">
                           <span className="text-slate-500 font-medium">{stat.label}</span>
                           <span className="text-2xl font-bold text-white">{stat.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-600/10 relative overflow-hidden group">
                   <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">هل لديك فكرة؟</h3>
                      <p className="text-blue-100 mb-8 leading-relaxed text-sm">فريقنا البرمجي والإبداعي جاهز لتحويل رؤيتك إلى واقع رقمي مبهر.</p>
                      <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all active:scale-95">تواصل للتعاون</button>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-24 bg-slate-950/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-14 text-white">تابعني على المنصات الرسمية</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group bg-slate-900 border border-white/5`}
                >
                  <span className="text-5xl mb-6 group-hover:scale-110 transition-transform filter drop-shadow-lg">{social.icon}</span>
                  <span className="font-bold text-xl text-white mb-1">{social.name}</span>
                  <span className="text-xs text-slate-500 font-bold tracking-widest uppercase">@{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-10 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">لنتحدث عن مشروعك القادم</h2>
                  <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                    يسعد بن عبدالله استقبال جميع طلبات التعاون، الاستفسارات، والمراسلات الرسمية عبر قنوات التواصل المباشرة.
                  </p>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <div className="flex flex-col items-center gap-4 group">
                      <a href={`https://wa.me/${BIN_ABDULLAH_BIO.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-bold text-green-400 hover:text-white transition-all flex items-center gap-3">
                         <span className="bg-green-500/10 p-3 rounded-2xl group-hover:bg-green-500 transition-colors">
                            <svg className="w-6 h-6 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                         </span>
                         {BIN_ABDULLAH_BIO.whatsappFormatted}
                      </a>
                    </div>
                    <div className="hidden md:block h-16 w-px bg-white/10"></div>
                    <div className="flex flex-col items-center gap-4 group">
                      <a href={`mailto:${BIN_ABDULLAH_BIO.email}`} className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-white transition-all flex items-center gap-3">
                        <span className="bg-blue-500/10 p-3 rounded-2xl group-hover:bg-blue-500 transition-colors">
                           <svg className="w-6 h-6 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </span>
                        {BIN_ABDULLAH_BIO.email}
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium mt-12 italic">سيتم الرد خلال أقرب وقت ممكن</p>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
             {SOCIAL_LINKS.map(s => (
                <a key={s.name} href={s.url} className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                    {s.name}
                </a>
             ))}
             <a href={`https://wa.me/${BIN_ABDULLAH_BIO.whatsapp.replace('+', '')}`} className="text-slate-500 hover:text-green-400 transition-colors text-sm font-bold uppercase tracking-wider">
                واتساب
             </a>
          </div>
          <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center text-blue-500 font-bold mx-auto mb-6 shadow-inner">
             ب
          </div>
          <p className="text-slate-500 text-sm">
             © {new Date().getFullYear()} بن عبدالله - صانع محتوى. جميع الحقوق محفوظة.
          </p>
          <div className="mt-6 flex justify-center gap-4 text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em]">
             <span>السعودية</span>
             <span className="text-blue-600">•</span>
             <span>قطر</span>
             <span className="text-blue-600">•</span>
             <span>الخليج العربي</span>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
