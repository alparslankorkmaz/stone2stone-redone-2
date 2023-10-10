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
import { GoOrganization } from "react-icons/go";
import { MdHandshake } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { GiOpenBook } from "react-icons/gi";
import { GiConsoleController } from "react-icons/gi";
import { TbRoute } from "react-icons/tb";
import { MdOutlineMonitor } from "react-icons/md";
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
const organisation = GoOrganization;
const lead = MdHandshake;
const mail = IoMdMailOpen;
const book = GiOpenBook;
const controller = GiConsoleController;
const journey = TbRoute;
const monitor = MdOutlineMonitor;

export const tags = [
  {
    value: "",
    label: "All",
  },
  {
    value: "Digital Marketing",
    label: "Digital Marketing",
  },
  {
    value: "Content Marketing",
    label: "Content Marketing",
  },
  {
    value: "Strategy, Branding and Proposition",
    label: "Strategy, Branding and Proposition",
  },
  {
    value: "ABM",
    label: "ABM",
  },
  {
    value: "Gamification",
    label: "Gamification",
  },
];

export const studies = [
  {
    id: 1,
    link: "/case-studies/eci-7-resolutions-digital-marketing",
    logo: "eci",
    img: "eci-7-resolutions",
    name: "7 Resolutions",
    text: "A series of videos and corresponding ‘resolutions’ informing viewers about how ECI’s services can transform their business in a visually stimulating environment. New Year, better security!",
    challenge:
      "To create an engaging way to encourage new users to utilise ECI’s services going into 2022.",
    target:
      "Potential customers whose companies would benefit from ECI’s managed IT, cybersecurity and transformation services.",
    solution:
      "The creation of 7 ‘resolutions’ each demonstrating a benefit of ECI’s services, with a corresponding video hosted by ECI experts engaging in conversation.",
    outcome:
      "A visually engaging series of interesting tech ‘resolutions’ backed up by videos hosted by experts from ECI, discussing why each resolution is so beneficial to customers – and why they don’t need to make their own resolutions this year!",
    icon1: person(),
    icon2: camera(),
    result1: "292 Unique Visitors",
    result2: "481 video views",
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
    text: "An educational, long form promotional video explaining the support CDW and Dell Technologies can offer customers evolving into a hybrid working environment.",
    challenge:
      "To inform both new and established customers about how CDW and Dell Technologies’ joint server solutions are designed to help them.",
    target:
      "IT Managers That Need To Adapt Their Data Processing And Storage Systems To Match A Hybrid Working Environment.",
    solution:
      "Creation of an informative video hosted by leading experts from Dell Technologies outlining the benefits of their and CDW’s newly developed 15G PowerEdge Servers in a hybrid working environment.",
    outcome:
      "An engaging & conversational 7-minute video teaching IT Managers about the benefits of Dell and CDW’s servers for both remote and in office data processing and storage.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "6230 Video Views",
    result2: "235 Click Throughs",
    result3: "121 Shares",
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
    text: "A completely virtual awards ceremony, carefully curated with presenters including special guest Ollie Ollerton, complete with live feed style acceptance speeches and physical awards design, production and delivery.",
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
    text: "A short, engaging and informative animation showcasing the benefits of e2e assure’s cyber security solutions.",
    challenge:
      "To create an engaging, informative animation explaining the benefits of e2e assure’s SOC that was no more than 90 seconds long and maintained attention throughout.",
    target:
      "Potential new customers for e2e assure that are unenlightened about the variety of benefits e2e assure’s cyber security solutions provide.",
    solution:
      "Our team designed, scripted and animated an exciting, clear and concise video animation that promotes the benefits of partnering with e2e assure.",
    outcome:
      "Creation of an 80 second animation that was both educational and eye catching, that informed the user of e2e assure’s benefits.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "869 Views",
    result2: "87 Click Throughs",
    result3: "32 Shares",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 9,
    link: "/case-studies/eci-lead-generation-posters-abm",
    logo: "eci",
    img: "eci-forcepoint",
    name: "Lead Generation Posters",
    text: "2 separate Highly engaging, bold campaigns made up of niche posters sent to targeted personnel on behalf of ForcePoint and ECI.",
    challenge:
      "Stone2Stone were tasked by our clients ForcePoint and ECI to identify ideal potential targets from within specific sectors and to create a thought provoking, memorable engagement.",
    target:
      "Valuable potential leads were identified and researched from the key organisations in the specific sectors requested.",
    solution:
      "Identify key individuals from chosen organisations and carry out in depth intel gathering on said targets. Design, write copy and create a spoof bespoke poster featuring the target in a setting that fits their interests, delivered both physically and digitally.",
    outcome:
      "Fulfilment and deployment of a total of 45 individual assets by recorded delivery, followed up with a personalised letter. They were also sent the same posters digitally, generating quality leads for ForcePoint and ECI, respectively.",
    icon1: person(),
    icon2: organisation(),
    icon3: lead(),
    result1: "45 Individual Identified",
    result2: "30 Organisations Identified",
    result3: "28 Leads Generated",
    tag: "ABM",
  },
  {
    id: 10,
    link: "/case-studies/e92-plus-mdr-calculator-digital-marketing",
    logo: "e92-plus",
    img: "e92plus-calculator",
    name: "MDR Calculator",
    text: "An interactive calculator demonstrating the benefits of using e92plus’ vendor partner Bitdefender’s MDR services.",
    challenge:
      "To create an easy way for customers to find out how much they will benefit from employing Bitdefender’s MDR services compared to their current service.",
    target:
      "Potential Customers looking for an easy way to reduce the cost and increase the efficiency of their SOC with bitdefender.",
    solution:
      "The creation of an interactive calculator, where the user can input their company’s endpoints and what tools they would like, then Bitdefender works out how much money they could be saving them.",
    outcome:
      "An easy-to-use online calculator that quickly and effectively informs users how much they could be saving if they used Bitdefender MDR, saving them time and hopefully money.",
    icon1: person(),
    icon2: chats(),
    icon3: like(),
    result1: "256 Unique Visitors",
    result2: "122 Entries",
    result3: "47 Review Requests",
    tag: "Digital Marketing",
  },
  {
    id: 11,
    link: "/case-studies/netally-wifi-wonder-person-abm",
    logo: "netally",
    img: "netally",
    name: "WiFi Wonder person",
    text: "Personalised comic book strips were created using the likeness of senior Telco targets to promote the netAlly handheld device, including bespoke posters and landing pages.",
    challenge:
      "To create an utterly unique and engaging campaign for e92plus vendor netAlly’s new handheld device.",
    target:
      "Senior contacts including engineering and operational directors at Telcos, who’s engineers rely on accurate and reliable testing equipment.",
    solution:
      "Creation of ‘Wi-Fi Wonderperson’, our very own superhero with the power to save networks everywhere.",
    outcome:
      "Creation of personalised comic book strips and email campaigns featuring targets as the superhero – because who wouldn’t want to save the (Wi-Fi) world?",
    icon1: book(),
    icon2: mail(),
    icon3: click(),
    result1: "29 Targeted Comic Books",
    result2: "20 Unique opens",
    result3: "15 Click-Throughs",
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
    text: "A fully interactive, user controlled online quiz based on a series of lifestyle questions to match the user with the Philips screen best suited to them.",
    challenge:
      "To create a unique and engaging format with which to help users decide on the best Philips screen for them.",
    target:
      "Users from a wide array of lifestyles and business environments looking for a Philips monitor that works specifically for them.",
    solution:
      "An interactive series of questions that allowed the user to specify their individual needs in order to narrow down the results, eventually being suggested the monitor suited to them.",
    outcome:
      "A user controlled interactive quiz that provided an attractive, clear service that through specific questions would match the user with the Philips monitor best suited for their needs.",
    icon1: journey(),
    icon2: monitor(),
    icon3: click(),
    result1: "296 Possible Journeys",
    result2: "34 Suggested Monitors",
    result3: "2436 Click-Throughs",
    tag: "Gamification",
  },
  {
    id: 14,
    link: "/case-studies/softwareone-softwareone-duet-gamification",
    logo: "software-one",
    img: "software-one",
    name: "SoftwareONE Duet",
    text: "A dating app style platform with a variety of questions, designed to match users with the cyber security vendor best suited to solve their individual issues.",
    challenge:
      "To create a unique, informative and easy to use platform for SoftwareOne users to find the best vendor partner for them.",
    target:
      "SoftwareOne users that are looking for a cyber security solution to their organisation’s issues.",
    solution:
      "Creation of ‘SoftwareOne Duet’, a dating app style site that easily matches users with the cyber security solution for them.",
    outcome:
      "Creation of an interactive landing page, email & social media campaigns all to provide an easy, informative way to solve users’ cyber security problems.",
    icon1: person(),
    icon2: journey(),
    icon3: click(),
    result1: "268 Visitors",
    result2: "178 Possible Journeys",
    result3: "1240 Click-Throughs",
    tag: "Gamification",
  },
  {
    id: 15,
    link: "/case-studies/red-hat-innovation-island-gamification",
    logo: "red-hat",
    img: "innovation-island",
    name: "Innovation Island",
    text: "Stone2Stone worked with SCC and Red Hat to create Innovation Island. An interactive platform that allows SCC and Red Hat to educate, inform and market their products and partnership in an innovative way.",
    challenge:
      "To create a central hub for both SCC and Red Hat, a place for clients and potential customers to learn about the full range of products and services that they offer as a partnership.",
    target:
      "New, potential and existing Red Hat and SCC customers that influence or use Red Hats open-source solutions.",
    solution:
      "An informational and captivating online game that engages users with its retro vibe. Allowing visitors to explore an Island to find information and collect power-ups for a prize draw.",
    outcome:
      "A highly engaged audience that repeatedly returned to the game. More than 200 users in the first 2 weeks, 600+ playthroughs and 21 forms completed.",
    icon1: person(),
    icon2: controller(),
    icon3: register(),
    result1: "200 users in first week",
    result2: "600+ playthroughs",
    result3: "21 completed forms",
    tag: "Gamification",
  },
  {
    id: 16,
    link: "/case-studies/abacus-forged-coins-abm",
    logo: "abacus",
    img: "abacus",
    name: "Forged Coins",
    text: "Stone2Stone worked with Abacus to create messaging highlighting how working in partnership with newly acquired cyber security business Gotham Security, in-house penetration testing can provide businesses with a comprehensive understanding of their cybersecurity strengths and weaknesses.",
    challenge:
      "To develop a campaign highlighting the potential of this recent acquisition, in bolstering cybersecurity defences proactively, prior to any cyber-attack whilst highlighting this new partnership.",
    target: "New, potential and existing Abacus and Gotham Security customers.",
    solution:
      "A co-branded bespoke metal coin displayed both the Abacus and Gotham Security logos and packaged in an engaging A5 booklet and mailed to 119 identified individuals accompanied by teaser emails and a landing page.",
    outcome:
      "A campaign that successfully attracted 15 new customer opportunities, while also bringing back two returning customers, consolidating the customer base and driving business growth.",
    icon1: person(),
    icon2: plus(),
    icon3: arrow(),
    result1: "119 Targets Identified",
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
    text: "Stone2Stone worked with Forescout to create some striking event apparel that would be recognisable whilst displaying visual information on Forescout’s services.",
    challenge:
      "Forescout approached Stone2Stone to create a hoodie design that was not only recognisable but also informative whilst maintaining Forescouts brand.",
    target:
      "Highly technical attendees to Infosecurity 2023 who were exploring cyber security services.",
    solution:
      "A highly graphic design featuring a combination of cyber-related illustrations, the company logo, the event name and relevant cyber-related terminology.",
    outcome:
      "The design gained significant popularity during the event and continues to be a feature on a mixture of giveaways and supporting marketing materials at events across Europe giving Forescout a recognisable and consistent presence at events.",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 18,
    link: "/case-studies/trend-micro-aws-event-video-content-marketing",
    logo: "trend-micro",
    img: "trendmicro-aws",
    name: "AWS Event Video",
    text: "Stone2Stone collaborated with Trend Micro to develop engaging social media content highlighting, using crafted video, their active participation, as a platinum partner, in the AWS London summit held at Excel.",
    challenge:
      "To showcase Trend Micro’s comprehensive services and highlight how effective partnerships work.",
    target:
      "Existing partners and potential partners who know the benefits of working with a world leader in cyber security.",
    solution:
      "Filmed over 1 day, S2S created 3 x 90 second teasers plus the full presentation of Trend Micro’s speaker slot - resulting in a compelling and informative content that effectively showcased the company and highlighted their presence at the AWS London event on social platforms.",
    outcome:
      "A collection of high-quality videos that showcase the Trend Micro exhibition space and their keynote speaker.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "6750 Views",
    result2: "205 Click Throughs",
    result3: "104 Shares",
    tag: "Content Marketing",
  },
  {
    id: 19,
    link: "/case-studies/forescout-infosecurity-event-video-content-marketing",
    logo: "forescout",
    img: "forescout-infosecurity",
    name: "Infosecurity Event Video",
    text: "Stone2Stone worked with Forescout to develop engaging social media content highlighting their participation in the UK’s leading cyber security exhibition Infosecurity held at the ExCel in London.",
    challenge:
      "To act as teaser in driving footfall to the Forescout stand whilst showcasing its comprehensive services, dedicated employees, and active participation in the event. ",
    target:
      "Visitors and potential visitors to Excel who have or may have an interest in Forescout's services.",
    solution:
      "Utilising Rik Ferguson, renowned as the Cyber Rockstar, our video production team filmed him interviewing attendees. This engaging content was edited, uploaded to LinkedIn on the same day allowing Forescout to effectively demonstrate their expertise and create visibility among their target audience.",
    outcome:
      "A collection of 3 videos produced to showcase Forescout’s presence and demonstrated the range of services offered by the company.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "10,328 Combined Views",
    result2: "604 Combined Click Throughs",
    result3: "324 Combined Shares",
    tag: "Content Marketing",
  },
  {
    id: 20,
    link: "/case-studies/scc-company-animation-strategy-branding-proposition",
    logo: "scc",
    img: "scc-animation",
    name: "Company Animation",
    text: "A short, engaging and informative animation showcasing the benefits of SCC’s services and solutions.",
    challenge:
      "To create an engaging, informative animation explaining the benefits of SCC’s cloud products that was no more than 5 minutes long and maintained attention throughout.",
    target:
      "Potential new customers for SCC that are unenlightened about the variety of benefits SCC’s cloud solutions provide.",
    solution:
      "Our team designed, scripted and animated an exciting, clear and concise video animation that promotes the benefits of partnering with SCC.",
    outcome:
      "Creation of a 4 minute animation that was both educational and eye catching, that informed the user of SCC’s benefits.",
    icon1: camera(),
    icon2: click(),
    icon3: share(),
    result1: "3245 Views",
    result2: "125 Click Throughs",
    result3: "46 Shares",
    tag: "Strategy, Branding and Proposition",
  },
  {
    id: 21,
    link: "/case-studies/cycoffee",
    logo: "cynet",
    img: "cycoffee",
    name: "CyCoffee Case Study",
    text: "A series of 6 virtual coffee morning-inspired videos, which promote Cynet’s solutions and position them as thought leaders on cybersecurity.",
    challenge:
      "To create an engaging and informative social media campaign to showcase Cynet’s solutions.",
    target:
      "Potential Cynet users who are looking for a trustworthy cyber security solution for their organisation’s issues.",
    solution:
      "Creation of ‘CyCoffee’, a series of conversational and informative social media videos to teach viewers about the wide-reaching benefits of Cynet’s solutions.",
    outcome:
      "Stone2Stone created a series of 6 videos, which centred around Cynet employees speaking in depth about Cynet solutions and discussing real-life case studies.",
    icon1: like(),
    icon2: camera(),
    icon3: register(),
    result1: "386 Post Interactions",
    result2: "2350 Video Views",
    result3: "237 CyCoffee Club Sign-ups",
    tag: "Content Marketing",
  },
];
