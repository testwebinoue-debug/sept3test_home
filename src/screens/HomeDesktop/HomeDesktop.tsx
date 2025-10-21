import React from "react";

const navigationItems = [
  { label: "HOME" },
  { label: "ABOUT" },
  { label: "COMPANY INFO" },
  { label: "PHILOSOPHY" },
  { label: "WORKS" },
  { label: "CONTACT" },
];

const companyInfoData = [
  {
    label: "会社名",
    content: "株式会社セプト・スリー",
  },
  {
    label: "所在地",
    content: "大阪市北区芝田1-12-7 大栄ビル新館N1003",
  },
  {
    label: "設立",
    content: "2003年7月\n2006年9月 法人化",
  },
  {
    label: "代表",
    content: "代表取締役　鳥飼  久志",
  },
  {
    label: "事業内容",
    content:
      "商業広告企画・制作\n交通媒体ポスター、パンフレット、販促物のデザイン\n新聞、WEB、サイネージなどの広告企画・制作",
  },
  {
    label: "取引銀行",
    content: "大阪シティ信用金庫",
  },
];

export const HomeDesktop = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen flex flex-col">
      <div className="w-full flex justify-end">
        <header className="flex w-full items-center justify-end gap-4 md:gap-12 lg:gap-[75px] px-5 md:px-12 lg:px-[100px] py-8 md:py-10 lg:py-[50px] bg-transparent">
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <span className={`w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-black transition-opacity ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>

          <nav className="hidden md:flex items-center gap-4 md:gap-8 lg:gap-[75px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-sm md:text-base tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {isMenuOpen && (
            <nav className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </header>
      </div>

      <section className="w-full self-center mt-8 sm:mt-16 md:mt-20 lg:mt-[167px] flex flex-col items-center px-0 py-0">
        <div className="relative w-full h-[500px] sm:h-[650px] md:h-[800px] lg:h-[1050px] xl:h-[1353px] max-w-[1440px]">
          <img
            className="absolute top-0 left-1/2 -translate-x-1/2 w-auto h-full object-contain"
            alt="Typography img"
            src="/sept3-typography-img.png"
          />

          <div className="absolute top-[180px] sm:top-[240px] md:top-[300px] lg:top-[420px] xl:top-[512px] left-4 sm:left-8 md:left-12 lg:left-[80px] xl:left-[101px] w-[240px] sm:w-[320px] md:w-[400px] lg:w-[550px] xl:w-[670px]">
            <img
              className="w-full h-auto object-contain"
              alt="Corporate logo"
              src="/sept3-corporate-logo-img.png"
            />
          </div>

          <div className="absolute top-[260px] sm:top-[350px] md:top-[430px] lg:top-[570px] xl:top-[692px] left-4 sm:left-8 md:left-12 lg:left-[80px] xl:left-[101px] max-w-[85%] sm:max-w-[75%] lg:max-w-none">
            <p className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-lg tracking-[0] leading-[1.8] sm:leading-[1.85] md:leading-[1.9] lg:leading-[2] xl:leading-10">
              株式会社 sept.3 は、広告制作会社です。
              <br />
              グラフィックデザインを中心に、
              <br />
              さまざまな広告制作を行っています。
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[93px] flex-col items-start gap-0 px-4 sm:px-8 md:px-12 lg:px-[80px] xl:px-[100px] py-8 sm:py-10 md:py-12 lg:py-[40px] xl:py-[50px]">
        <div className="relative self-stretch w-full">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-[110px]">
            <h2 className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] tracking-[6px] sm:tracking-[10px] md:tracking-[14px] lg:tracking-[18px] xl:tracking-[21.00px] leading-tight xl:leading-[59px]">
              ABOUT
            </h2>
          </div>

          <div>
            <p className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-lg tracking-[0] leading-[1.8] sm:leading-[1.85] md:leading-[1.9] lg:leading-[2] xl:leading-10">
              株式会社 sept.3 は、
              <br />
              商業広告制作への意志と技術を持ったデザイナーが集まり、
              <br />
              アルティザンを目指して、2003年に設立されたデザインプロダクションです。
              <br />
              ポスター、パンフレット、紙媒体を中心に、新聞、WEB、サイネージなど、
              <br />
              幅広い広告制作を行っています。
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full mt-16 sm:mt-20 md:mt-28 lg:mt-32 xl:mt-[175px] flex-col items-start gap-8 sm:gap-10 md:gap-12 lg:gap-[45px] xl:gap-[50px] px-4 sm:px-8 md:px-12 lg:px-[80px] xl:px-[100px] py-8 sm:py-10 md:py-12 lg:py-[40px] xl:py-[50px]">
        <div>
          <h2 className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] tracking-[6px] sm:tracking-[10px] md:tracking-[14px] lg:tracking-[18px] xl:tracking-[21.00px] leading-tight xl:leading-[59px]">
            COMPANY INFO
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[45px] xl:gap-[50px] self-stretch w-full">
          <div className="flex-shrink-0">
            <div className="w-full sm:w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] [font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-lg tracking-[0] leading-[1.8] sm:leading-[1.85] md:leading-[1.9] lg:leading-[2] xl:leading-10">
              {companyInfoData.map((item, index) => (
                <React.Fragment key={index}>
                  {item.label}
                  <br />
                  {item.label === "設立" && (
                    <>
                      <br />
                    </>
                  )}
                  {item.label === "事業内容" && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-lg tracking-[0] leading-[1.8] sm:leading-[1.85] md:leading-[1.9] lg:leading-[2] xl:leading-10">
              {companyInfoData.map((item, index) => (
                <React.Fragment key={index}>
                  {item.content.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full self-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[91px] flex flex-col bg-[#f9f9f9] py-6 sm:py-8 md:py-[24px] lg:py-[27px]">
        <footer className="hidden sm:flex w-full items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-[60px] xl:gap-[75px] px-4 sm:px-8 md:px-12 lg:px-[50px] py-4 sm:py-6 md:py-[20px] lg:py-[25px] bg-transparent">
          {navigationItems.map((item, index) => (
            <nav
              key={index}
              className="inline-flex items-start gap-5 flex-[0_0_auto]"
            >
              <button className="[font-family:'Zen_Kaku_Gothic_Antique',Helvetica] font-normal text-black text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-base tracking-[0] leading-[normal] cursor-pointer hover:opacity-70 transition-opacity">
                {item.label}
              </button>
            </nav>
          ))}
        </footer>

        <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-[50px] py-4 sm:py-6 md:py-7 lg:py-8">
          <address className="[font-family:'Inter',Helvetica] font-normal text-black text-[9px] sm:text-[11px] md:text-[13px] lg:text-[15px] xl:text-base text-center tracking-[0] leading-[1.6] sm:leading-[1.7] md:leading-relaxed not-italic">
            〒530-0012&nbsp;&nbsp;大阪市北区芝田1-12-7 大栄ビル新館N1003 <br />
            TEL.06-6376-0903&nbsp;&nbsp;FAX.06-6376-0913
            <br />
            Copyright sept.3 Inc. All Rights Reserved.
          </address>
        </div>
      </div>
    </div>
  );
};
