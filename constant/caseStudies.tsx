import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiFillProfile } from "react-icons/ai";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { PiPercentBold } from "react-icons/pi";
import { BsFillEyeFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
import { PiShareBold } from "react-icons/pi";
import { PiChatsFill } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa";
const camera = BsFillCameraVideoFill;
const person = BsFillPersonFill;
const plus = FaPlus;
const arrow = BsArrowReturnLeft;
const register = AiFillProfile;
const clipboard = BsFillClipboard2CheckFill;
const percentage = PiPercentBold;
const view = BsFillEyeFill;
const click = HiCursorClick;
const share = PiShareBold;
const chats = PiChatsFill;
const like = FaRegThumbsUp;

export const studies = [
  {
    id: 1,
    link: "/case-studies/eci-7-resolutions-digital-marketing",
    logo: "eci",
    img: "eci-7-resolutions",
    name: "7 Resolutions",
    tag: "Digital Marketing",
  },
  {
    id: 2,
    link: "/case-studies/csi-12-days-of-christmas-digital-marketing",
    logo: "csi",
    img: "csi-12-days",
    name: "12 Days of Christmas",
    text: "An easy-to-use interactive Christmas calendar informing customers about CSI and IBM’s solutions through the magic of Santa’s Workshop.",
    challenge:
      "To create an informative series of videos about who CSI, and IBM, are and how their solutions can benefit customers in a visually stimulating medium.",
    target:
      "Potential Customers With Great Christmas Elf Skills That Would Benefit From CSI’s Managed Support And Cloud Services.",
    solution:
      "The creation of 12 short form videos presented by experts from CSI and IBM, educating viewers in a conversational manner on their services from power servers to hybrid cloud solutions.",
    outcome:
      "A fun, interactive 12 Days of Christmas calendar filled with informational videos with a corresponding quiz to win a variety of amazing prizes.",
    icon1: chats(),
    icon2: camera(),
    icon3: like(),
    result1: "287 Correct Answers",
    result2: "346 Video Views",
    result3: "53% Increased Social",
    tag: "Digital Marketing",
  },
  {
    id: 3,
    link: "/case-studies/cdw-grounds-for-security-content-marketing",
    logo: "cdw",
    img: "cdw-grounds",
    name: "Grounds for Security",
    text: "A 7 week coffee break series on cyber security for CDW. Comprised of a dedicated portal filled with white papers, videos and Q&As.",
    challenge:
      "To give customers a thorough understanding of all the secure cloud solutions CDW offers in a unique, engaging way, from the experts themselves.",
    target:
      "Potential users of CDW cyber security solutions, along with those that are already customers but would like to find out more about all they can offer.",
    solution:
      "The creation of a series of virtual coffee breaks over 7 weeks, each one led by a cloud security expert. Each watched video resulted in a stamp, with 5 stamps leading to a coffee hamper and invitation to a virtual coffee experience (complete with an expert barista!).",
    outcome:
      "An influx of registrations from net new potential customers, along with established ones too.",
    icon1: camera(),
    icon2: register(),
    icon3: person(),
    result1: "7 Weekly Video Sessions",
    result2: "300 Registrations",
    result3: "28 Dedicated Leads",
    tag: "Content Marketing",
  },
  {
    id: 4,
    link: "/case-studies/cradlepoint-pinpoint-strategy-branding-proposition",
    logo: "cradlepoint",
    img: "cradlepoint-pinpoint",
    name: "Pinpoint",
    text: "An aesthetically and educationally fulfilling interactive map highlighting Cradlepoint’s successful wireless solutions across Europe.",
    challenge:
      "To showcase the benefits of Cradlepoint’s wireless WAN solutions to both new and old customers in an easy-to-understand way.",
    target:
      "Potential Customers In Industries Suffering From Connectivity And Wireless Problems That Need A Proven Solution.",
    solution:
      "A map highlighting crucial past successes of Cradlepoint’s solutions in order to showcase their effectiveness to new customers.",
    outcome:
      "A visually engaging and educational interactive map, Pinpoint, where visitors can easily explore Cradlepoint’s previous successes with their wireless solutions whilst virtually travelling across Europe.",
    icon1: person(),
    icon2: click(),
    result1: "235 Unique Visitors",
    result2: "600 Click Throughs",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 5,
    link: "/case-studies/dell-technologies-video-content-marketing",
    logo: "dell-technologies",
    img: "cdw-dell",
    name: "Dell Technologies Video",
    tag: "Content Marketing",
  },
  {
    id: 6,
    link: "/case-studies/check-point-straight-to-the-point-content-marketing",
    logo: "check-point",
    img: "checkpoint-straight-to-the-point",
    name: "Straight to the Point",
    text: "A series of informative social media campaign videos highlighting the benefits of Check Point’s security solutions.",
    challenge:
      "To create an engaging and informative social media campaign to showcase Check Point’s solutions.",
    target:
      "Potential Check Point users that are looking for a trustworthy cyber security solution for their organisation’s issues.",
    solution:
      "Creation of ‘Straight to the Point’, a series of conversational and informative social media videos to teach viewers about the wide reaching benefits of Check Point’s solutions.",
    outcome:
      "Creation of a highly engaging, informative series of social media videos hosted by leading figures from Check Point, showcasing the benefits of Check Point security solutions.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "8879 Video Views",
    result2: "173 Click Throughs",
    result3: "74 Shares",
    tag: "Content Marketing",
  },
  {
    id: 7,
    link: "/case-studies/check-point-partner-awards-2021-strategy-branding-proposition",
    logo: "check-point",
    img: "checkpoint-pa21",
    name: "Partner Awards 2021",
    text: " A completely virtual awards ceremony, carefully curated with presenters including special guest Ollie Ollerton, complete with live feed style acceptance speeches and physical awards design, production and delivery.",
    challenge:
      "To create and host the annual Check Point Partner Awards Ceremony, completely virtually. It had to be just as exciting and engaging as its formerly in-person predecessors.",
    target:
      "Check Point’s partners and employees who were honoured with awards, as well as potential leads.",
    solution:
      "Through creating virtual backgrounds, social banners and award scripting, Stone2Stone was able to construct all aspects of an in person awards ceremony (minus the celebrity drama).",
    outcome:
      "A gala event with a stunning amount of registrations and hundreds of attendees that created an exciting atmosphere that was engaging for all participants.",
    icon1: clipboard(),
    icon2: person(),
    icon3: percentage(),
    result1: "300 Registrations",
    result2: "200 Event Attendees",
    result3: "50% Social Media Increase",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 8,
    link: "/case-studies/e2e-assure-company-animation-strategy-branding-proposition",
    logo: "e2e-assure",
    img: "e2e-assure-animation",
    name: "Company Animation",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 9,
    link: "/case-studies/eci-lead-generation-posters-abm",
    logo: "eci",
    img: "eci-forcepoint",
    name: "Lead Generation Posters",
    tag: "ABM",
  },
  {
    id: 10,
    link: "/case-studies/e92-plus-mdr-calculator-digital-marketing",
    logo: "e92-plus",
    img: "e92plus-calculator",
    name: "MDR Calculator",
    tag: "Digital Marketing",
  },
  {
    id: 11,
    link: "/case-studies/netally-wifi-wonder-person-abm",
    logo: "netally",
    img: "netally",
    name: "WiFi Wonder person",
    tag: "ABM",
  },
  {
    id: 12,
    link: "/case-studies/check-point-partner-awards-2022-strategy-branding-proposition",
    logo: "check-point",
    img: "checkpoint-pa22",
    name: "Partner Awards 2022",
    text: "An action packed in-person awards gala celebrating Check Point’s partners, complete with special guest star Ollie Ollerton, three course meal and physical awards.",
    challenge:
      "To organise and host the Check Point Partner Awards ceremony in a physical setting, following previous events held virtually. It had to be more engaging and virtually captivating than its online predecessor.",
    target:
      "Check Point’s partners and employees who were honoured with awards, as well as potential leads both attending and not.",
    solution:
      "Stone2Stone successfully mounted an engaging gala evening, bringing together all the crucial parts of a high-class awards event, including, but not limited to, background and presentation scheduling.",
    outcome:
      "A hugely successful first large-scale event post covid, with over a hundred attendees and incredible social media engagement post event.",
    icon1: person(),
    icon2: view(),
    icon3: click(),
    result1: "130 Attendees",
    result2: "37,694 Impressions",
    result3: "15,731 Social Clicks",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 13,
    link: "/case-studies/scc-phillips-product-quiz-gamification",
    logo: "scc",
    img: "scc-quiz",
    name: "Phillips Product Quiz",
    tag: "Gamification",
  },
  {
    id: 14,
    link: "/case-studies/softwareone-softwareone-duet-gamification",
    logo: "software-one",
    img: "software-one",
    name: "SoftwareONE Duet",
    tag: "Gamification",
  },
  {
    id: 15,
    link: "/case-studies/red-hat-innovation-island-gamification",
    logo: "red-hat",
    img: "innovation-island",
    name: "Innovation Island",
    tag: "Gamification",
  },
  {
    id: 16,
    link: "/case-studies/abacus-forged-coins-abm",
    logo: "abacus",
    img: "abacus",
    name: "Forged Coins",
    text: "Stone2Stone worked with Abacus to create messaging that highlighted how in-house penetration testing can provide businesses with a comprehensive understanding of their cybersecurity strengths and weaknesses.",
    challenge:
      "Abacus aimed to develop a campaign highlighting the potential of their recent acquisition, Gotham Security, in bolstering cybersecurity defenses proactively, prior to any cyber-attack.",
    target: "New, potential and existing Abacus and Gotham Security customers.",
    solution:
      "A co-branded coin displayed both the Abacus and Gotham Security logos. It was packaged in an engaging booklet, accompanied by emails and a landing page.",
    outcome:
      "This campaign successfully attracted 15 new customer opportunities, while also bringing back two returning customers, consolidating the customer base and driving business growth.",
    icon1: person(),
    icon2: plus(),
    icon3: arrow(),
    result1: "100 Targets Identified",
    result2: "15 New Customer Opportunities",
    result3: "2 Returning Customers",
    tag: "ABM",
  },
  {
    id: 17,
    link: "/case-studies/forescout-graphic-event-hoodie-strategy-branding-proposition",
    logo: "forescout",
    img: "forescout-hoodie",
    name: "Graphic Event Hoodie",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 18,
    link: "/case-studies/trend-micro-aws-event-video-content-marketing",
    logo: "trend-micro",
    img: "trendmicro-aws",
    name: "AWS Event Video",
    tag: "Content Marketing",
  },
  {
    id: 19,
    link: "/case-studies/forescout-infosecurity-event-video-content-marketing",
    logo: "forescout",
    img: "forescout-infosecurity",
    name: "Infosecurity Event Video",
    tag: "Content Marketing",
  },
  {
    id: 20,
    link: "/case-studies/scc-company-animation-strategy-branding-proposition",
    logo: "scc",
    img: "scc-animation",
    name: "Company Animation",
    tag: "Strategy, Branding and Proposition",
  },
];
