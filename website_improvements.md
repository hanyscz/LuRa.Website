# Seznam možných vylepšení webu (LuRa Website)

Tento dokument obsahuje seznam doporučených vylepšení pro webovou prezentaci LuRa IT.

## 1. SEO a Viditelnost
- **Open Graph značky**: Přidat `og:title`, `og:description`, `og:image` pro lepší vzhled při sdílení na sociálních sítích (Facebook, LinkedIn).
- **Meta tagy**: Doplnit klíčová slova (`keywords`) a `author`.
- **Sitemap & Robots**: Vytvořit `sitemap.xml` a `robots.txt` pro lepší indexaci vyhledávači.
- **Strukturovaná data**: Implementovat Schema.org (např. `Organization`, `LocalBusiness`) pro rich snippets.

## 2. Přístupnost (Accessibility)
- **Formuláře**: Přidat `<label>` pro všechna vstupní pole formuláře. Placeholder nestačí.
- **Tlačítka**: Doplnit `aria-label` pro tlačítka bez textu (např. mobilní menu, sociální ikony).
- **Kontrast**: Ověřit kontrast textu vůči pozadí, zejména u šedých textů (`--text-secondary`).
- **Skip Link**: Přidat odkaz "Přeskočit na obsah" pro uživatele s čtečkou obrazovky.

## 3. Výkon a Rychlost
- **Formát obrázků**: Použít moderní formáty jako WebP nebo AVIF místo JPG/PNG.
- **Minifikace**: Minimalizovat CSS a JS soubory pro produkční nasazení.
- **Lazy Loading**: Ověřit, zda je lazy loading implementován efektivně i pro obrázky "pod ohybem".

## 4. Funkcionalita a UX
- **Kontaktní formulář**: Zprovoznit odesílání formuláře (např. napojení na EmailJS, Formspree nebo vlastní backend). Současný kód pouze ruší odeslání (`event.preventDefault()`).
- **Validace**: Přidat vizuální zpětnou vazbu při validaci formuláře (úspěch/chyba).
- **404 Stránka**: Vytvořit vlastní stránku pro chybu 404.
- **Tlačítko Zpět nahoru**: Přidat plovoucí tlačítko pro rychlý návrat na začátek stránky.
- **Navigace**: Zvýrazňovat aktivní sekci v menu při scrollování (ScrollSpy).

## 5. Právní náležitosti
- **Pravidla a Podmínky**: Přidat stránku se zásadami ochrany osobních údajů (GDPR) a obchodní podmínky, pokud jsou relevantní.
- **Cookies**: Pokud web používá cookies (např. pro analytiku), přidat cookie lištu.

## 6. Design a Kód
- **CSS Proměnné**: Rozšířit využití CSS proměnných pro barvy a spacing pro snazší údržbu (Dark mode support).
- **Refactoring**: Zkontrolovat duplicity v CSS.
