
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
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Impressum</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>BESS-CON</strong></p>
              <p>Musterstraße 123</p>
              <p>80333 München</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Kontakt</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>E-Mail:</strong> info@bess-con.de</p>
              <p><strong>Telefon:</strong> +49 (0) 89 123456789</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Geschäftsführer</h2>
            <div className="text-slate-600">
              <p>Max Mustermann</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Registereintrag</h2>
            <div className="text-slate-600 space-y-2">
              <p><strong>Eintragung im Handelsregister:</strong></p>
              <p>Registergericht: Amtsgericht München</p>
              <p>Registernummer: HRB 123456</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Umsatzsteuer-ID</h2>
            <div className="text-slate-600">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>DE123456789</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Haftung für Inhalte</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p className="mt-4">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Haftung für Links</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p className="mt-4">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Urheberrecht</h2>
            <div className="text-slate-600 text-sm leading-relaxed">
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p className="mt-4">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
