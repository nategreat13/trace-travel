import { FAQ } from '../model/faq.type';

export const FAQS: FAQ[] = [
  {
    important: false,
    title: 'Is my credit card information secure?',
    body: "'Yes, we use stripe! Payments are processed by Stripe using AES-256 encryption technology, which is trusted by companies like Adidas, Best Buy, Facebook, and many others.'",
  },
  {
    important: false,
    title: 'Premium - Can I cancel my premium subscription?',
    body: 'Yes, you are able to cancel your subscription at anytime. Simply login to your account at tracetravel.co/login, navigate to the “Profile” page and follow the cancellation instructions.',
  },
  {
    important: false,
    title: 'Are you going to spam my inbox?',
    body: 'No, we only send out emails with the travel deals. (If you are a free member you will receive the occasional discount emails on premium.)',
  },
  {
    important: true,
    title: 'Premium - How much could a premium subscription save me?',
    body: 'Most of our members save an average of $500 on each trip they take.',
  },
  {
    important: true,
    title: 'What kind of deals should I expect?',
    body: 'You can anticipate receiving exceptional flight deals from Trace Travel. Our focus is on handpicking top travel destinations worldwide and curating exclusive flight deals from the USA to these sought-after locations. These deals typically offer substantial savings, ranging from 30% to 70% off regular ticket prices, making your travel dreams more affordable and accessible.',
  },
  {
    important: false,
    title: 'Do you offer domestic deals? (Deals traveling within the USA)',
    body: 'Yes, about 1/3 of our deals are domestic deals.',
  },
  {
    important: true,
    title: 'How do we get the deals?',
    body: "You'll access our incredible deals through two primary channels: the Trace member dashboard and our email notifications. Our member dashboard is updated daily with the latest flight deals, ensuring you're always in the know about the best travel offers. In addition, we send these deals directly to your email, so you won't miss out on any exciting opportunities.",
  },
  {
    important: true,
    title: 'What makes you different than your competitors?',
    body: 'Trace Travel stands out from the competition with a personalized approach to flight deals. We prioritize your unique travel needs, using AI technology to deliver tailored recommendations based on your home airport and interests. Our efficient AI-powered flight search tool streamlines the booking process. We provide a wealth of exclusive travel guides and unmatched customer support, ensuring your trips are unforgettable. All this comes at an exceptional value, making us your trusted partner in affordable, personalized travel adventures.',
  },
  {
    important: true,
    title: 'Why do you give this travel info away?',
    body: 'Traveling is amazing. Our main goal is to simplify your travel experience by providing all your necessary travel research in one central email while also saving you money. Most people think traveling to exotic destinations is super expensive. We get people out and traveling for a fraction of the cost of what their expectations are.',
  },
];
