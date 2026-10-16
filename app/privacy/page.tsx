import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ScopeSignal collects, uses, and protects information submitted through scope-signal.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 16, 2026">
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in connection
        with our website at {siteConfig.domain}. {siteConfig.name} is an
        early-stage company, and this policy describes our current practices. We
        will update it as our product and operations evolve.
      </p>

      <div>
        <h2>Information we collect</h2>
        <p>
          We aim to collect only what we need to respond to you and to operate the
          site securely.
        </p>
        <ul>
          <li>
            <strong>Information you provide.</strong> When you submit our contact
            form, we collect your name, work email, company, role, the topic you
            select, and the message you write.
          </li>
          <li>
            <strong>Technical information.</strong> To protect the contact form
            against abuse (spam and rate limiting), we temporarily process the IP
            address associated with a submission.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider may automatically
            log standard request information (such as IP address, timestamp, and
            user agent) as part of normal operation and security.
          </li>
        </ul>
      </div>

      <div>
        <h2>How we use information</h2>
        <ul>
          <li>To respond to your inquiry and communicate with you.</li>
          <li>To evaluate interest in pilots, feedback, and early access.</li>
          <li>To protect, maintain, and improve the security of the website.</li>
        </ul>
      </div>

      <div>
        <h2>Analytics and cookies</h2>
        <p>
          This website does not currently use third-party advertising or
          cross-site tracking cookies. If we add privacy-respecting analytics in
          the future, we will update this policy to describe what is collected and
          why.
        </p>
        <p className="text-muted">
          [Placeholder: if you enable an analytics provider — e.g., Vercel
          Analytics or Plausible — name it here and describe the data it
          processes.]
        </p>
      </div>

      <div>
        <h2>Service providers</h2>
        <p>
          We rely on a small number of third-party processors to run the site and
          respond to inquiries:
        </p>
        <ul>
          <li>
            <strong>Hosting:</strong> Vercel Inc., which hosts the website and
            processes server requests.
          </li>
          <li>
            <strong>Email delivery:</strong> Resend, which we use to deliver
            contact-form submissions to our inbox.
          </li>
        </ul>
        <p>
          These providers process information on our behalf and under their own
          terms and privacy practices.
        </p>
      </div>

      <div>
        <h2>Data retention</h2>
        <p>
          We retain contact-form submissions for as long as needed to respond to
          your inquiry and for our legitimate business records, and then delete or
          anonymize them when no longer needed. You can ask us to delete your
          information at any time.
        </p>
      </div>

      <div>
        <h2>Your choices</h2>
        <p>
          You may request access to, correction of, or deletion of the personal
          information you have provided by emailing us at the address below. We
          will respond in accordance with applicable law.
        </p>
      </div>

      <div>
        <h2>Security</h2>
        <p>
          We take reasonable measures to protect the information we handle.
          However, no method of transmission or storage is completely secure, and
          we cannot guarantee absolute security. We do not claim any specific
          security certifications at this time.
        </p>
      </div>

      <div>
        <h2>Children&apos;s privacy</h2>
        <p>
          Our website is intended for business use and is not directed to children
          under 16. We do not knowingly collect information from children.
        </p>
      </div>

      <div>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Material changes will be
          reflected by updating the &ldquo;Last updated&rdquo; date above.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about this policy or your information? Email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </LegalPage>
  );
}
