import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const SITE_URL = "https://www.beathinkr.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hive of Thinkrs Miami",
  description:
    "Find answers to common questions about our STEM programs, coding classes, robotics courses, math tutoring, and test prep in Miami. Enrollment, pricing, schedules, and more.",
  keywords: [
    "STEM classes FAQ Miami",
    "coding classes questions Miami",
    "after school programs FAQ",
    "Hive of Thinkrs FAQ",
    "STEM enrollment questions",
    "Miami tutoring FAQ",
    "robotics classes questions",
    "test prep FAQ Miami",
    "summer camp questions",
    "parent FAQ STEM education"
  ],
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Hive of Thinkrs Miami",
    description:
      "Get answers to common questions about our STEM programs, enrollment, pricing, and schedules in Miami.",
    url: `${SITE_URL}/faq`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpeg`,
        width: 1200,
        height: 630,
        alt: "Hive of Thinkrs | STEM classes, Coding & Test Prep in Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Hive of Thinkrs Miami",
    description:
      "Find answers to common questions about our STEM programs and enrollment in Miami.",
    images: [`${SITE_URL}/opengraph-image.jpeg`],
  },
};

// FAQ Schema for SEO
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age groups do you serve at Hive of Thinkrs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve K-12 students from ages 5 through 18. Our programs are designed with age-appropriate curriculum and activities for elementary, middle, and high school students."
      }
    },
    {
      "@type": "Question",
      name: "Where are your STEM programs located in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer programs throughout Miami-Dade County. Our main location serves the Miami area, and we also partner with local schools for in-school programs. Contact us to find the nearest location to you."
      }
    },
    {
      "@type": "Question",
      name: "What types of STEM programs do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer comprehensive STEM programs including: Coding (Python, JavaScript, web development), Robotics, Engineering, Minecraft Education, Math Enrichment, Art & Design, and Test Prep (SAT, ACT, ISEE, SSAT). Programs are available as after-school classes, in-school partnerships, summer camps, and private tutoring."
      }
    },
    {
      "@type": "Question",
      name: "How much do your programs cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing varies by program type and duration. After-school programs typically range from $150-300 per month, summer camps are $300-500 per week, and private tutoring starts at $60 per hour. We offer sibling discounts and payment plans. Contact us for specific program pricing."
      }
    },
    {
      "@type": "Question",
      name: "What is your student-to-teacher ratio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain small class sizes with a maximum of 8:1 student-to-teacher ratio for most programs. This ensures personalized attention and hands-on learning for every student."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer free trials or demo classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer free trial classes for new students to experience our teaching style and curriculum. Contact us to schedule a trial class for your child."
      }
    },
    {
      "@type": "Question",
      name: "What makes your teaching approach different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use game-based, hands-on learning that makes STEM education fun and engaging. Our curriculum focuses on building critical thinking and problem-solving skills through real-world projects. Students learn by doing, not just listening."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide transportation for after-school programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transportation options vary by location. Some of our partner schools provide transportation from school to our center. Contact us to discuss transportation options for your specific location."
      }
    },
    {
      "@type": "Question",
      name: "What safety measures do you have in place?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Student safety is our top priority. All instructors undergo background checks, we maintain proper student-to-teacher ratios, our facilities are secure, and we follow all CDC and local health guidelines. Parents receive regular updates and can contact us during program hours."
      }
    },
    {
      "@type": "Question",
      name: "How do I enroll my child in a program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enrollment is easy! You can start by filling out our online request form on our website, calling us at (305) 668-0605, or visiting our center. We'll help you choose the right program and complete the registration process."
      }
    },
    {
      "@type": "Question",
      name: "What is Hive of Thinkrs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hive of Thinkrs is a creative learning lab where students from Kindergarten through 12th grade explore science, coding, math, and design through game-based, hands-on learning. Our programs help kids build real-world skills, confidence, and curiosity that last a lifetime. We also do Test Preparation for standardized, private school and college admissions tests such as SAT, ACT, SSAT and ISEE."
      }
    },
    {
      "@type": "Question",
      name: "How is Hive of Thinkrs different from other tutoring or STEAM programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're not worksheets and lectures. We're invention, play, and problem-solving. Every lesson blends fun and learning — whether students are programming a robot, crafting a digital game, or leveling up in algebra."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer online or in-person classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We offer flexible options to meet your family's needs — in-person at home or at one of our partner locations, or fully online with interactive tools like stylus tablets and digital dashboards."
      }
    },
    {
      "@type": "Question",
      name: "What ages or grades do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support students from Kindergarten to 12th grade across all academic levels — from early reading to college admissions."
      }
    },
    {
      "@type": "Question",
      name: "What kinds of programs do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our core offerings include: STEAM Enrichment (Coding, Robotics, 3D Design, Game Development), Academic Tutoring (Math, Reading, Writing, Science), Test Prep (ISEE, SSAT, SAT, ACT), Study Smart (Executive Functioning & Time Management)"
      }
    },
    {
      "@type": "Question",
      name: "How does your Test Prep work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a diagnostic and build a personalized plan based on each student's goals. Our approach includes subject-specific tutoring, homework, vocabulary training, and proctored practice tests. Students typically improve their SAT score by 200+ points and ACT by 7–10 points."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide practice tests?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We run monthly proctored SAT, ACT, ISEE, and SSAT practice exams to simulate real test conditions and adjust learning plans accordingly."
      }
    },
    {
      "@type": "Question",
      name: "Who are your instructors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team includes experienced, background-checked professionals with STEM or education degrees. Many also teach advanced learners during the school year at top schools in Miami."
      }
    },
    {
      "@type": "Question",
      name: "What types of after-school programs can we bring to our school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom STEAM and academic programs for K–12. From robotics and coding to creative design and executive functioning, our after-school options are hands-on, turnkey, and beloved by students."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide instructors and materials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle the full experience — instructors, curriculum, tech materials, and student engagement. Think of us as your enrichment partner, not just a vendor."
      }
    },
    {
      "@type": "Question",
      name: "What's the first step to bring Hive of Thinkrs to our school?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out to us at yourhive@beathinkr.com or call 305-668-0605. We'll start with a discovery consultation to understand your needs and design a custom plan for your community."
      }
    },
    {
      "@type": "Question",
      name: "How do I enroll my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click here and fill out the form. We'll set up a brief call to match you with the right program and instructor."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer scholarships or financial aid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We believe every child deserves access to quality STEM education. We offer limited scholarships and financial aid based on need and availability. Contact us to learn more about our financial assistance programs."
      }
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible cancellation policies. For after-school programs, we require 30 days notice. For summer camps, cancellations made 14 days before start receive a full refund minus a $50 processing fee. Private tutoring requires 24-hour notice for cancellations."
      }
    },
    {
      "@type": "Question",
      name: "Do students need prior experience for coding or robotics classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior experience is necessary! Our programs are designed for beginners through advanced students. We assess each child's skill level and place them in appropriate groups. Our instructors adapt teaching methods to match each student's experience level."
      }
    },
    {
      "@type": "Question",
      name: "What equipment or materials do students need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide all necessary equipment and materials for in-person programs, including computers, robotics kits, and software. For online programs, we provide a list of required materials and help parents set up the necessary software at home."
      }
    },
    {
      "@type": "Question",
      name: "How do you track student progress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide regular progress reports to parents, including skill assessments, project completion, and recommendations for next steps. Parents receive quarterly reports and can schedule conferences with instructors to discuss their child's progress."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="w-full font-light">
        <FAQClient />
      </main>
    </>
  );
}
