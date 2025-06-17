const Imprint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              <a href="/" className="hover:text-blue-600 transition-colors">BESS-CON</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Imprint Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Imprint</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Information according to § 5 TMG</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>BESS-CON</strong></p>
              <p>Julian Paß</p>
              <p>Fürstenstr. 9</p>
              <p>80333 Munich</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>Email:</strong> jp@bess-con.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Liability for Content</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. According to §§ 8 to 10 TMG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
              <p className="mt-4">Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such infringements, we will remove this content immediately.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Liability for Links</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.</p>
              <p className="mt-4">However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any legal infringements, we will remove such links immediately.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Copyright</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.</p>
              <p className="mt-4">Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
