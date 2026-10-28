export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string };

export type Chapter = {
  id: string;
  label: string;
  when: string;
  where: string;
  blocks: StoryBlock[];
};

export const storyMeta = {
  title: "The one left with the room",
  standfirst:
    "From a religious school in the SPM years to a house key in Kuala Lumpur, this is how I got here. It takes about ten minutes. After that, you can decide for yourself who I am.",
  place: "Kuala Lumpur",
  written: "2026",
};

export const chapters: Chapter[] = [
  {
    id: "school",
    label: "The school",
    when: "2014 — 2015",
    where: "SMKA Sheikh Haji Mohd Said",
    blocks: [
      {
        type: "p",
        text: "I did not grow up announcing what I would become. I grew up being handed a room and told, without much ceremony, to look after it.",
      },
      {
        type: "p",
        text: "At SMKA Sheikh Haji Mohd Said, in the years that closed with SPM, I was class monitor, and head of the cleanliness prefects. Small titles. They do not survive the way grades do. What they leave is a feeling in the body. You arrive before the room is ready. You notice what is out of place. You do not get to leave the mess for someone with a bigger name. I sat SPM and came out with ten A's and a B. People remember the letters. I remember the habit under them. If a thing was in my care, I stayed until it could be walked into without an apology.",
      },
      {
        type: "p",
        text: "It was a religious school, and I am not going to make a speech of that. A day there had a shape, and you could be asked to answer for the shape of it. Somebody has to be the one who stays.",
      },
    ],
  },
  {
    id: "dengkil",
    label: "Dengkil",
    when: "2016 — 2017",
    where: "UiTM Dengkil",
    blocks: [
      {
        type: "p",
        text: "The next year was not a career. Foundation in Science at UiTM Dengkil, a GPA of 3.45, a corridor between school and a degree. I was learning to hold a result up to the light, and not to trust it until it survived being asked whether I was sure.",
      },
      {
        type: "p",
        text: "Dengkil was hot and ordinary, and I did not skip it. So much of the life I have now was built that way, by staying through the year that does not photograph well. I was not yet a programmer, not yet a husband, not yet a man with a key. Only a student, beginning to suspect that the truth of a thing is rarely the first number you are shown.",
      },
    ],
  },
  {
    id: "jasin",
    label: "Jasin",
    when: "2017 — 2021",
    where: "UiTM Jasin, Melaka",
    blocks: [
      {
        type: "p",
        text: "Then Melaka. Universiti Teknologi MARA, Kampus Jasin, a degree in computer science, finished at 3.59. The number is what a form can hold. The years were stranger than a number.",
      },
      {
        type: "p",
        text: "There was ROTU, the Reserve Officer Training Unit. Mornings whose point was not my comfort. The shape of an order. A group that moves only as fast as the person who refuses to make everyone else late. I did not sign up for a story. I went, and I stayed, and responsibility became a cost you pay before anyone thinks to thank you.",
      },
      {
        type: "p",
        text: "In another room on that campus I was trying to be useful to something that could not praise me. My final year was a smart irrigation system on a Raspberry Pi: sensors in the soil, a little computer deciding the hour to let the water through. We took it to the i-JAMCSIIX competition and came home with silver.",
      },
      {
        type: "quote",
        text: "The plant did not care about the medal. It cared whether the water arrived when the soil was thirsty, and not when I felt like proving I had built something.",
      },
      {
        type: "p",
        text: "I have been trying to live up to that plant ever since. Listen first. Act at the hour that matters. Do not confuse the ceremony with the work.",
      },
    ],
  },
  {
    id: "petronas",
    label: "Petronas",
    when: "2021",
    where: "Petronas, Kuala Lumpur",
    blocks: [
      {
        type: "p",
        text: "The campus ended, and Kuala Lumpur began, through a door with an unglamorous name. GEES, the Protege programme, at Petronas. If you want the moment I became an engineer in a blaze of diagrams, I do not have it. I would rather give you the year as it was.",
      },
      {
        type: "p",
        text: "I kept an inventory of servers and learned their names on foot. I built small tools so a tired department could stop chasing a spreadsheet down a corridor, and pictures of the data so people could see what they had only been feeling. I hosted the quizzes too. An hour of someone else's attention is fragile, and I treated it that way.",
      },
      {
        type: "p",
        text: "It was the cleanliness prefects again, on a different floor. I left that year with a sentence I still believe. Institutions are made of people who are tired. The useful person is the one who shortens the distance between a question and an answer, and who does not need to be the story.",
      },
    ],
  },
  {
    id: "maybank",
    label: "Maybank",
    when: "2022 — 2023",
    where: "Maybank, Kuala Lumpur",
    blocks: [
      {
        type: "p",
        text: "Then Maybank.",
      },
      {
        type: "p",
        text: "I will not turn a bank into a myth about myself. I looked after features in a mobile banking application, the machinery by which a person on a bus checks a balance and believes the number. The trust was not mine. I only stood near it.",
      },
      {
        type: "p",
        text: "What changed me was the weight. I lived with production, and with the silence of a machine that is about to matter. I stood in front of the Change Advisory Board and said what we were about to change, and how we would come back if we were wrong. I led disaster-recovery exercises because the central bank asks a bank to prove it can stand up again. That proof is a room of people and a clock, not a slide.",
      },
      {
        type: "p",
        text: "I built dashboards so we could see our own fever before a customer had to be the one to tell us. When production misbehaved I went to the logs and stayed, until the story in the machine matched the story a human was living on the other side of the glass.",
      },
      {
        type: "quote",
        text: "Once you have stood near a path that real people walk with real money, a demo stops being impressive. You start asking who is still in the room on the day it fails.",
      },
      {
        type: "p",
        text: "There were hours when the work felt larger than I was. I do not offer that for sympathy. After Maybank I stopped wanting to look clever. I wanted to be the person still there when cleverness has left the building.",
      },
    ],
  },
  {
    id: "pnb",
    label: "PNB",
    when: "2024 — now",
    where: "Permodalan Nasional Berhad",
    blocks: [
      {
        type: "p",
        text: "Permodalan Nasional Berhad is where I work now. It is not a louder bank. It is a different kind of trust. The piece I have carried most closely is a donation platform: from the shape of an idea, through the building and the moving of old data, into the unpretty months after real people began to use it. A platform like that is a promise that a gift will arrive where it was meant to go. I felt the promise more than I had expected to.",
      },
      {
        type: "p",
        text: "Some of the work can be measured, and I will give you the number without dressing it up. An API that had been taking about ten seconds came down to about four, after I stopped treating slow queries as weather. Six seconds, handed back to a person who was trying to do a decent thing. I have thought about those six seconds more often than I have thought about any certificate with my name on it.",
      },
      {
        type: "p",
        text: "The rest refused a percentage. We moved important applications into the cloud, a clean sentence stretched over months of finding what the old rooms had been holding together with luck. Testers found the open windows. I closed them, gave a person's identity one honest door, and pulled scattered logs into one place, so a problem could no longer hide by splitting itself into five.",
      },
      {
        type: "p",
        text: "If the bank taught me the fear of breaking something vast, this work has been teaching me how to make something vast kinder, and then harder to harm. I am not finished with the lesson.",
      },
      {
        type: "p",
        text: "Nobody was grading me anymore, and I kept studying anyway. That is the old pattern. When I do not yet know how to hold the room, I go and learn the holding. I also learned, late, that a design which lives only in my head is a bad one. It looks finished until another person puts a finger on the crack. The room was never meant to be carried alone.",
      },
    ],
  },
  {
    id: "house",
    label: "The house",
    when: "2024",
    where: "Near the people I come from",
    blocks: [
      {
        type: "p",
        text: "In the same season, the work stopped being the largest thing I was responsible for.",
      },
      {
        type: "p",
        text: "By then I was married. My wife and I bought a house. Said in one breath, it sounds like two errands. It was not.",
      },
      {
        type: "p",
        text: "I knew where I wanted us to live before I knew the price of anything. My older brothers are in the same neighbourhood as our parents. I wanted that too. Not a slogan about family. A distance. The kind you can cross when someone is sick, or when the day has been too long, or when there is food and you should not eat it alone. We found an older house, already lived in, close enough. Nobody's showroom. A history that was not ours yet.",
      },
      {
        type: "p",
        text: "Six months passed between the signature and the key. Long enough to meet lawyers I did not know how to choose, a loan agreement thick enough to tire the hand, and costs that introduced themselves only after I had said yes. For much of it I followed my agent and hoped for kindness. I received it. I am grateful, and I am honest that I did not know enough. The deposit came out of savings I had been keeping the old way, in Tabung Haji and ASB. A percentage of a house is a calm phrase until it is your calm, leaving the account.",
      },
      {
        type: "p",
        text: "Then the house told us the truth about itself. A roof that leaked. A toilet that had given up. Lights and fans that were simply not there. An old house does not become yours when a bank releases money. It becomes yours when you stand in it with the person you married and decide which broken thing gets the next salary.",
      },
      {
        type: "p",
        text: "The screens I build are rooms other people trust. The house is the one I come home to, with my wife, a short drive from my parents and my brothers. Adulthood did not arrive as a title. It arrived as a repair list, and as the choice to live where I could still be a son and a brother on an ordinary night.",
      },
      {
        type: "p",
        text: "Alhamdulillah. I mean it in the plain way. Not as decoration. It is the only word I have for a year that made life heavier and more mine at the same time.",
      },
    ],
  },
  {
    id: "evenings",
    label: "After hours",
    when: "2024 — 2025",
    where: "The work with my name near it",
    blocks: [
      {
        type: "p",
        text: "There is another life beside the institutions, and it says something they cannot.",
      },
      {
        type: "p",
        text: "A fragrance business needed a shop that belonged to them. Not a stall inside a marketplace where the rules, the customers, and the fees belong to a stranger. A person had to be able to look, to pay, and to know where an order had gone. I built that path the whole way, and it went out under the name {{Blanco|https://play.google.com/store/apps/details?id=com.mycompany.blancoapp}}. What I wanted was plain. A customer could pay, and the order would exist without me standing over it.",
      },
      {
        type: "p",
        text: "For a long stretch, a store's own gate would not open. A purchase refused to complete, and a client who had trusted me kept asking what was taking so long. I am not telling this to make a villain. Trust, up close, has a voice. I did not enjoy the question. I became more serious because of it. A livelihood is a livelihood at any size. A door that sticks is not a small detail to the person waiting outside.",
      },
      {
        type: "p",
        text: "Around the same time an interior studio needed a presence as considered as the rooms they design. I built the site that lives at {{nfstudio.my|https://nfstudio.my}}: their work, a way through it, the voices of clients, a path by which a stranger becomes an enquiry. I cared about the feeling of arriving. People who spend their lives on rooms will notice if you are careless with theirs.",
      },
      {
        type: "p",
        text: "These were evenings, not hobbies nailed to the side of a career. They were me, choosing people I could see. The bank and the fund taught me scale, and the fear of breaking a thing that many lives pass through. The shop and the studio taught me nearness. I want both. A working life with only one of them would feel like a house with no one to hand the key to.",
      },
    ],
  },
  {
    id: "weather",
    label: "This year",
    when: "2026",
    where: "Kuala Lumpur",
    blocks: [
      {
        type: "p",
        text: "So this is the weather I am standing in, as I write this.",
      },
      {
        type: "p",
        text: "A form asks for Ahmad Syamil bin Sahrom. On the days that feel like my own, I am Syamil. I live in Kuala Lumpur. I am still in my twenties. I am a husband, and a software developer at PNB. I have been in this work for about five years. That is long enough to know the good days and the other days, and not long enough to pretend I have seen the whole climate.",
      },
      {
        type: "p",
        text: "Lately the climate has frightened me, and {{I said so|https://blog.syamilthoughts.com/posts/the-end-of-IT-golden-era/}}, because silence was worse. For years the work was a quiet privilege: a laptop, a person eating alone, already filed in everyone's head as the IT guy. A meme, and a shelter. The shelter is thinning. The surface of software is easier to produce now than the life underneath it, and the crowd at the door is larger than anything I imagined as a student.",
      },
      {
        type: "p",
        text: "I feel two things, and I will not tidy them into one. I am scared. Under the fear there is a small relief in admitting that a cycle turns, and that being earnest will not stop it. I hope the bleak version is wrong. If it is not, I know what I am willing to bet on. Anyone can assemble something that looks finished. Fewer people can tell you what happens when it breaks. The plant still does not care about the slides. A customer still cares whether the money moved. My wife still cares whether the roof holds. The market can rename the job. It cannot rename the duty.",
      },
      {
        type: "p",
        text: "When the laptop is shut I read, or I follow an idea further than is useful. I keep {{a blog|https://blog.syamilthoughts.com}} so a thought has to survive being read by someone who owes me no kindness. The writing there is plainer than this page. Sometimes a rant. Sometimes the steps for a thing I had to learn the hard way. Both are me.",
      },
    ],
  },
  {
    id: "close",
    label: "A last word",
    when: "",
    where: "",
    blocks: [
      {
        type: "p",
        text: "I watched a classroom before I watched a server. I argued with a plant and took a medal home. I learned the sound of a system about to fail. I spent half a year on signatures so my wife and I could live near our people, and after hours I built a door for a shop and a studio that needed one of their own.",
      },
      {
        type: "p",
        text: "You do not have to take a moral from me. I have tried not to hand you one.",
      },
      {
        type: "p",
        text: "If you see someone careful, I will not argue. If you see someone still becoming, that is closer to the truth. If you see someone you would trust with a thing that must not break, and that must also feel human on the other side of the glass, then you have the only ambition I am willing to say out loud.",
      },
      {
        type: "p",
        text: "I am still here. The room is different. The habit is not.",
      },
      {
        type: "p",
        text: "If you have read this far, you already have enough to decide what you think of me. Should you want to talk, I am easy to find. I answer.",
      },
    ],
  },
];

export const contact = {
  name: "Ahmad Syamil bin Sahrom",
  email: "syamil2498@gmail.com",
  phone: "+60 19 629 0138",
  whatsappUrl: "https://wa.me/60196290138",
  instagramUrl: "https://instagram.com/syamil24",
  githubUrl: "https://github.com/syamil24",
  blogUrl: "https://blog.syamilthoughts.com",
  resumeUrl:
    "https://drive.google.com/file/d/12VVZpGKc04IBfXLzTOhLcWmp0Ut_372J/view?usp=sharing",
  location: "Kuala Lumpur, Malaysia",
};
