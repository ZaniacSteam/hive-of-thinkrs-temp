'use client';

import Link from "next/link";
import { useState } from "react";

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#E5E7EB] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-[#F9FAFB] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-[#374151] pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 text-[#7140FF] transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-[#F9FAFB] text-[#6B7280] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

// FAQ data organized by category
const faqCategories = [
  {
    title: "General Information",
    icon: "📚",
    questions: [
      {
        q: "What age groups do you serve at Hive of Thinkrs?",
        a: "We serve K-12 students from ages 5 through 18. Our programs are designed with age-appropriate curriculum and activities for elementary, middle, and high school students."
      },
      {
        q: "Where are your STEM programs located in Miami?",
        a: "We offer programs throughout Miami-Dade County. Our main location serves the Miami area, and we also partner with local schools for in-school programs. Contact us to find the nearest location to you."
      },
      {
        q: "What types of STEM programs do you offer?",
        a: "We offer comprehensive STEM programs including: Coding (Python, JavaScript, web development), Robotics, Engineering, Minecraft Education, Math Enrichment, Art & Design, and Test Prep (SAT, ACT, ISEE, SSAT). Programs are available as after-school classes, in-school partnerships, summer camps, and private tutoring."
      }
    ]
  },
  {
    title: "Enrollment & Pricing",
    icon: "💰",
    questions: [
      {
        q: "How much do your programs cost?",
        a: "Our pricing varies by program type and duration. After-school programs typically range from $150-300 per month, summer camps are $300-500 per week, and private tutoring starts at $60 per hour. We offer sibling discounts and payment plans. Contact us for specific program pricing."
      },
      {
        q: "Do you offer free trials or demo classes?",
        a: "Yes! We offer free trial classes for new students to experience our teaching style and curriculum. Contact us to schedule a trial class for your child."
      },
      {
        q: "Do you offer scholarships or financial aid?",
        a: "We believe every child deserves access to quality STEM education. We offer limited scholarships and financial aid based on need and availability. Contact us to learn more about our financial assistance programs."
      },
      {
        q: "What is your cancellation policy?",
        a: "We offer flexible cancellation policies. For after-school programs, we require 30 days notice. For summer camps, cancellations made 14 days before start receive a full refund minus a $50 processing fee. For private tutoring, 24 hours' notice is required for cancellations or rescheduling."
      }
    ]
  },
  {
    title: "Private Tutoring - Scheduling",
    icon: "📅",
    questions: [
      {
        q: "Do we have class today?",
        a: "Yes, unless we have communicated a change in advance. If you are unsure, feel free to check with us."
      },
      {
        q: "What days and times is the tutor available?",
        a: "Tutor availability depends on the specific tutor and their current schedule. During the last week of each month, we reach out to confirm availability and finalize the schedule for the following month."
      },
      {
        q: "How do we choose or confirm the tutoring schedule?",
        a: "At the end of each month, we coordinate with families to confirm the tutoring schedule for the upcoming month. This confirmed schedule is then used to generate the monthly invoice."
      },
      {
        q: "Can we change the regular day or time of a session?",
        a: "Yes, changes are possible depending on tutor availability. Permanent schedule changes must be requested before the monthly schedule is finalized."
      }
    ]
  },
  {
    title: "Private Tutoring - Cancellations & Rescheduling",
    icon: "🔄",
    questions: [
      {
        q: "Can we reschedule a tutoring session?",
        a: "Yes, sessions can be rescheduled with at least 24 hours' notice."
      },
      {
        q: "How much notice is needed to reschedule or cancel?",
        a: "A minimum of 24 hours' notice is required. Requests made with less notice are considered same-day cancellations."
      },
      {
        q: "What happens if we cancel the same day?",
        a: "Sessions canceled with less than 24 hours' notice are still charged, as the tutor has already reserved that time."
      },
      {
        q: "What happens if we are traveling and can't attend a session?",
        a: "The same cancellation and rescheduling policy applies. Sessions must be adjusted with at least 24 hours' notice to avoid being charged."
      },
      {
        q: "Can we skip a week of tutoring?",
        a: "Yes, as long as we are notified with at least 24 hours' notice for each affected session."
      }
    ]
  },
  {
    title: "Private Tutoring - Billing",
    icon: "💳",
    questions: [
      {
        q: "What does my invoice include?",
        a: "Your invoice includes all tutoring sessions scheduled and confirmed for the month, based on the schedule agreed upon at the end of the previous month."
      },
      {
        q: "Why am I being charged this amount?",
        a: "The total reflects the number of sessions scheduled for the month, each corresponding to reserved tutoring time."
      },
      {
        q: "When is the invoice sent?",
        a: "Invoices are usually sent at the beginning of each month, once the monthly schedule has been finalized."
      },
      {
        q: "What happens if a paid session cannot be rescheduled?",
        a: "If a session was scheduled and paid for but cannot be rescheduled due to limited availability, the amount will be automatically applied as a credit toward the next invoice."
      },
      {
        q: "Can you resend my invoice?",
        a: "Yes. Invoices are sent from yourhive@beathinkr.com. We recommend checking spam or promotions folders as well."
      }
    ]
  },
  {
    title: "Program Details",
    icon: "🔬",
    questions: [
      {
        q: "What is your student-to-teacher ratio?",
        a: "We maintain small class sizes with a maximum of 8:1 student-to-teacher ratio for most programs. This ensures personalized attention and hands-on learning for every student."
      },
      {
        q: "What makes your teaching approach different?",
        a: "We use game-based, hands-on learning that makes STEM education fun and engaging. Our curriculum focuses on building critical thinking and problem-solving skills through real-world projects. Students learn by doing, not just listening."
      },
      {
        q: "Do students need prior experience for coding or robotics classes?",
        a: "No prior experience is necessary! Our programs are designed for beginners through advanced students. We assess each child's skill level and place them in appropriate groups. Our instructors adapt teaching methods to match each student's experience level."
      },
      {
        q: "What equipment or materials do students need?",
        a: "We provide all necessary equipment and materials for in-person programs, including computers, robotics kits, and software. For online programs, we provide a list of required materials and help parents set up the necessary software at home."
      }
    ]
  },
  {
    title: "Logistics & Safety",
    icon: "🛡️",
    questions: [
      {
        q: "Do you provide transportation for after-school programs?",
        a: "Transportation options vary by location. Some of our partner schools provide transportation from school to our center. Contact us to discuss transportation options for your specific location."
      },
      {
        q: "What safety measures do you have in place?",
        a: "Student safety is our top priority. All instructors undergo background checks, we maintain proper student-to-teacher ratios, our facilities are secure, and we follow all CDC and local health guidelines. Parents receive regular updates and can contact us during program hours."
      },
      {
        q: "How do you track student progress?",
        a: "We provide regular progress reports to parents, including skill assessments, project completion, and recommendations for next steps. Parents receive quarterly reports and can schedule conferences with instructors to discuss their child's progress."
      }
    ]
  },
  {
    title: "Getting Started",
    icon: "🚀",
    questions: [
      {
        q: "How do I enroll my child in a program?",
        a: "Enrollment is easy! You can start by filling out our online request form on our website, calling us at (305) 668-0605, or visiting our center. We'll help you choose the right program and complete the registration process."
      }
    ]
  }
];

export default function FAQClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#7140FF] to-[#12D0EE] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Find answers to common questions about our STEM programs, enrollment, and how we help your child thrive
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl text-[#374151] mb-4">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="bg-[#7140FF] text-white px-6 py-3 rounded-lg hover:bg-[#5A2FD8] transition-colors duration-200"
              >
                View All Courses
              </Link>
              <Link
                href="/request/parents"
                className="bg-[#12D0EE] text-white px-6 py-3 rounded-lg hover:bg-[#0BA5D0] transition-colors duration-200"
              >
                Enroll Now
              </Link>
              <Link
                href="/about"
                className="bg-[#F355CC] text-white px-6 py-3 rounded-lg hover:bg-[#D944B8] transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl md:text-3xl text-[#374151] font-medium">
                  {category.title}
                </h2>
              </div>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <FAQItem
                    key={`${categoryIndex}-${faqIndex}`}
                    question={faq.q}
                    answer={faq.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-[#7140FF] to-[#12D0EE] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-thin mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help! Contact our team and we'll be happy to answer any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request/parents"
              className="bg-white text-[#7140FF] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href="tel:305-668-0605"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[#7140FF] transition-colors duration-200"
            >
              Call (305) 668-0605
            </a>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-[#374151] text-center mb-12">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#7140FF] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#374151] mb-2">Program Guide</h3>
              <p className="text-[#6B7280] mb-4">
                Download our complete program guide with detailed curriculum information
              </p>
              <button className="text-[#7140FF] hover:text-[#5A2FD8] font-medium">
                Download PDF →
              </button>
            </div>
            <div className="text-center">
              <div className="bg-[#12D0EE] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#374151] mb-2">Schedule a Tour</h3>
              <p className="text-[#6B7280] mb-4">
                Visit our facility and see our programs in action
              </p>
              <Link
                href="/request/parents"
                className="text-[#12D0EE] hover:text-[#0BA5D0] font-medium"
              >
                Schedule Visit →
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-[#F355CC] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#374151] mb-2">Parent Portal</h3>
              <p className="text-[#6B7280] mb-4">
                Access your child's progress, schedules, and updates
              </p>
              <button className="text-[#F355CC] hover:text-[#D944B8] font-medium">
                Login to Portal →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
