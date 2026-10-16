import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the ScopeSignal website at scope-signal.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 16, 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
        the {siteConfig.name} website at {siteConfig.domain} (the
        &ldquo;Site&rdquo;). By using the Site, you agree to these Terms. If you do
        not agree, please do not use the Site.
      </p>
      <p className="text-muted">
        [Placeholder: these Terms are a reasonable starting point and should be
        reviewed by qualified legal counsel before launch.]
      </p>

      <div>
        <h2>Informational purpose</h2>
        <p>
          The Site is provided for general informational purposes about{" "}
          {siteConfig.name} and the product we are developing. {siteConfig.name} is
          an early-stage company, and the product described is under active
          development and not generally available. Nothing on the Site is an offer,
          warranty, or commitment regarding product features, availability, or
          outcomes.
        </p>
      </div>

      <div>
        <h2>No professional advice</h2>
        <p>
          Content on the Site does not constitute legal, contractual, financial, or
          professional advice. Any decisions regarding construction scope, change
          orders, contractual entitlement, notice requirements, or billing remain
          solely your responsibility and should be made with appropriate
          professional guidance.
        </p>
      </div>

      <div>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site in violation of any applicable law or regulation.</li>
          <li>
            Attempt to gain unauthorized access to the Site, its systems, or related
            infrastructure.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the Site,
            including through automated abuse of forms.
          </li>
          <li>
            Submit false information or content that infringes the rights of others.
          </li>
        </ul>
      </div>

      <div>
        <h2>Intellectual property</h2>
        <p>
          The Site and its content — including text, design, graphics, logos, and
          illustrative product previews — are owned by {siteConfig.name} or its
          licensors and are protected by applicable intellectual-property laws. You
          may not copy, reproduce, or distribute Site content without permission,
          except as permitted by law.
        </p>
      </div>

      <div>
        <h2>Submissions</h2>
        <p>
          If you send us feedback or inquiries through the Site, you grant us
          permission to use that information to respond to you and to improve our
          product, consistent with our{" "}
          <a href="/privacy">Privacy Policy</a>. Do not submit confidential or
          sensitive project data through the contact form; pilots involving project
          records are handled separately under agreed data-handling terms.
        </p>
      </div>

      <div>
        <h2>Third-party links</h2>
        <p>
          The Site may link to third-party websites or services that we do not
          control. We are not responsible for the content or practices of those
          third parties.
        </p>
      </div>

      <div>
        <h2>Disclaimers</h2>
        <p>
          The Site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          without warranties of any kind, whether express or implied, to the fullest
          extent permitted by law. We do not warrant that the Site will be
          uninterrupted, error-free, or secure.
        </p>
      </div>

      <div>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} will not be
          liable for any indirect, incidental, special, consequential, or punitive
          damages arising out of or related to your use of the Site.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use of the Site
          after changes take effect constitutes acceptance of the updated Terms.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about these Terms? Email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalPage>
  );
}
