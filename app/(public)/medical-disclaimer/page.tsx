import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Sit With PD",
  description:
    "Sit With PD Global Therapeutic Network provides wellbeing support, education, and personal development. Our services do not constitute medical advice. Read our Medical Disclaimer to understand the scope and boundaries of our support.",
  openGraph: {
    title: "Medical Disclaimer — Sit With PD",
    description:
      "Sit With PD's services are for educational and wellbeing purposes only and are not a substitute for professional medical, psychiatric, or healthcare advice.",
    url: "https://sitwithpd.com/medical-disclaimer",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sit With PD Medical Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Disclaimer — Sit With PD",
    description:
      "Our wellbeing support services do not constitute medical advice. Read our Medical Disclaimer for full details.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-30 max-w-3xl">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Medical Disclaimer
      </h1>

      <div className="space-y-6">
        <div>
          <p className="font-medium text-base text-[#606060]">
            Sit-With-PD Global Therapeutic Network
          </p>
          <p className="font-medium text-base text-[#606060]">
            Last Updated: 10th June, 2026
          </p>
        </div>

        <p className="font-medium text-base text-[#606060]">
          Sit-With-PD Global Therapeutic Network provides wellbeing support,
          mental health awareness, advocacy, educational resources, training
          programs, support groups, retreats, and related services designed to
          promote emotional wellness and personal development.
        </p>

        <p className="font-medium text-base text-[#606060]">
          The information, resources, programs, and services provided through
          this website and our organization are intended for educational,
          informational, and supportive purposes only.
        </p>

        {/* Section 1 */}
        <div>
          <p className="text-[#649351] text-base font-semibold">
            Not Medical Advice
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            Sit-With-PD Global Therapeutic Network is not a hospital, medical
            clinic, pharmacy, or emergency response provider. The content on
            this website and any support provided through our services does not
            constitute medical advice, diagnosis, treatment, or prescription
            services.
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            Nothing on this website should be interpreted as a substitute for
            professional medical, psychiatric, psychological, or healthcare
            advice.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <p className="text-[#649351] text-base font-semibold">
            No Unauthorized Medical or Pharmaceutical Services
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            Sit-With-PD Global Therapeutic Network does not provide unauthorized
            medical, pharmaceutical, surgical, diagnostic, or clinical
            healthcare services. We do not prescribe medications, dispense
            drugs, perform medical procedures, or offer emergency medical care.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <p className="text-[#649351] text-base font-semibold">
            Seek Professional Medical Assistance
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            If you have a medical condition, mental health concern, psychiatric
            condition, or any health-related issue requiring diagnosis or
            treatment, you should consult a qualified healthcare professional.
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            If you are experiencing a medical or mental health emergency, please
            contact emergency services or seek immediate assistance from a
            licensed healthcare provider.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <p className="text-[#649351] text-base font-semibold">
            Personal Responsibility
          </p>
          <p className="font-medium text-base text-[#606060] mt-2">
            By using our website and services, you acknowledge that you are
            responsible for your own healthcare decisions and that any actions
            taken based on information obtained from Sit-With-PD Global
            Therapeutic Network are undertaken at your own discretion.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <p className="text-[#649351] text-base font-semibold">Contact Us</p>
          <p className="font-medium text-base text-[#606060] mt-2">
            If you have questions regarding this Medical Disclaimer, please
            contact:
          </p>
          <div className="mt-2 space-y-1">
            <p className="font-medium text-base text-[#606060]">
              Sit-With-PD Global Therapeutic Network
            </p>
            <p className="font-medium text-base text-[#606060]">
              Email: support@sitwithpd.com
            </p>
            <p className="font-medium text-base text-[#606060]">
              Phone: +447359307733
            </p>
            <p className="font-medium text-base text-[#606060]">
              Website: www.sitwithpd.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
