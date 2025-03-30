export const therapyResources = {
  onlineTherapy: [
    {
      name: "BetterHelp",
      url: "https://www.betterhelp.com",
      description:
        "Online therapy platform connecting users with licensed therapists via text, voice, or video sessions.",
    },
    {
      name: "Talkspace",
      url: "https://www.talkspace.com",
      description: "Virtual therapy platform offering text, audio, and video sessions with licensed therapists.",
    },
    {
      name: "Calm",
      url: "https://www.calm.com",
      description: "App for meditation, sleep stories, and relaxation techniques to reduce stress and anxiety.",
    },
    {
      name: "Headspace",
      url: "https://www.headspace.com",
      description: "Guided meditation app offering mindfulness exercises for stress, anxiety, and sleep issues.",
    },
  ],

  organizations: [
    {
      name: "World Health Organization - Mental Health",
      url: "https://www.who.int/health-topics/mental-health",
      description: "Global resources and information on mental health conditions, treatments, and initiatives.",
    },
    {
      name: "National Alliance on Mental Illness",
      url: "https://www.nami.org",
      description:
        "US-based organization providing education, support, and advocacy for individuals affected by mental illness.",
    },
    {
      name: "Mental Health Foundation",
      url: "https://www.mentalhealth.org.uk",
      description: "UK charity focused on mental health research, policy influence, and practical support.",
    },
    {
      name: "Mind",
      url: "https://www.mind.org.uk",
      description:
        "UK mental health charity offering information, advice, and support to anyone experiencing mental health problems.",
    },
  ],

  selfHelp: [
    {
      name: "Mindfulness-Based Stress Reduction",
      url: "https://www.mindfulnessstudies.com",
      description: "Program teaching mindfulness meditation and stress reduction techniques.",
    },
    {
      name: "Cognitive Behavioral Therapy Workbooks",
      url: "https://www.psychologytools.com",
      description: "Self-help workbooks based on CBT principles for various mental health conditions.",
    },
    {
      name: "Positive Psychology Exercises",
      url: "https://positivepsychology.com",
      description: "Evidence-based exercises to increase happiness, resilience, and overall wellbeing.",
    },
    {
      name: "Gratitude Journal Templates",
      url: "https://gratefulness.org",
      description: "Templates and guidance for maintaining a gratitude journal to improve mental wellbeing.",
    },
  ],

  apps: [
    {
      name: "Woebot - AI Mental Health Chatbot",
      url: "https://woebothealth.com",
      description: "AI chatbot using CBT techniques to help with anxiety and depression.",
    },
    {
      name: "Moodfit - Mood Tracking",
      url: "https://www.getmoodfit.com",
      description: "App for tracking mood and identifying patterns to improve mental health.",
    },
    {
      name: "MindDoc - Depression & Anxiety",
      url: "https://minddoc.com",
      description: "App offering psychological assessments and personalized interventions for depression and anxiety.",
    },
    {
      name: "Sanvello - Stress & Anxiety",
      url: "https://www.sanvello.com",
      description: "App providing tools for stress, anxiety, and depression based on CBT and mindfulness.",
    },
  ],

  communities: [
    {
      name: "7 Cups - Online Therapy & Free Counseling",
      url: "https://www.7cups.com",
      description: "Platform connecting users with trained listeners for emotional support and online therapy.",
    },
    {
      name: "Mental Health America - Support Groups",
      url: "https://www.mhanational.org",
      description: "Organization offering support groups and resources for various mental health conditions.",
    },
    {
      name: "Depression and Bipolar Support Alliance",
      url: "https://www.dbsalliance.org",
      description: "Support groups and resources for people with depression and bipolar disorder.",
    },
    {
      name: "Anxiety and Depression Association of America",
      url: "https://adaa.org",
      description:
        "Organization providing information, resources, and support for anxiety, depression, and related disorders.",
    },
  ],

  educational: [
    {
      name: "Mental Health First Aid",
      url: "https://www.mentalhealthfirstaid.org",
      description: "Training program teaching skills to respond to signs of mental illness and substance use.",
    },
    {
      name: "TED Talks on Mental Health",
      url: "https://www.ted.com/topics/mental+health",
      description:
        "Collection of TED talks on various mental health topics by experts and individuals with lived experience.",
    },
    {
      name: "Harvard Health - Mental Health",
      url: "https://www.health.harvard.edu/topics/mental-health",
      description: "Evidence-based articles and resources on mental health from Harvard Medical School.",
    },
    {
      name: "Psychology Today",
      url: "https://www.psychologytoday.com",
      description: "Articles, blogs, and resources on psychology and mental health topics.",
    },
  ],

  crisis: [
    {
      name: "National Suicide Prevention Lifeline",
      url: "https://suicidepreventionlifeline.org",
      phone: "988 or 1-800-273-8255",
      description: "24/7 hotline providing support, prevention, and crisis resources for you or your loved ones.",
    },
    {
      name: "Crisis Text Line",
      url: "https://www.crisistextline.org",
      phone: "Text HOME to 741741",
      description: "24/7 text-based crisis intervention service.",
    },
    {
      name: "International Association for Suicide Prevention",
      url: "https://www.iasp.info/resources/Crisis_Centres/",
      description: "Directory of crisis centers around the world.",
    },
  ],
}

export const commonMentalHealthIssues = {
  anxiety: {
    description: "Persistent worry, fear, or nervousness that interferes with daily activities.",
    recommendedResources: [
      "Headspace",
      "Calm",
      "Anxiety and Depression Association of America",
      "MindDoc - Depression & Anxiety",
    ],
  },
  depression: {
    description: "Persistent feelings of sadness, hopelessness, and loss of interest in activities.",
    recommendedResources: [
      "BetterHelp",
      "Depression and Bipolar Support Alliance",
      "Moodfit - Mood Tracking",
      "Sanvello - Stress & Anxiety",
    ],
  },
  stress: {
    description: "Physical or emotional tension resulting from demanding circumstances.",
    recommendedResources: ["Mindfulness-Based Stress Reduction", "Calm", "Headspace", "Positive Psychology Exercises"],
  },
  grief: {
    description: "Deep sorrow, especially caused by someone's death or significant loss.",
    recommendedResources: [
      "BetterHelp",
      "7 Cups - Online Therapy & Free Counseling",
      "Mental Health America - Support Groups",
    ],
  },
  trauma: {
    description: "Emotional response to a terrible event like an accident, rape, or natural disaster.",
    recommendedResources: ["Talkspace", "National Alliance on Mental Illness", "Psychology Today"],
  },
  selfEsteem: {
    description: "Confidence in one's own worth or abilities; self-respect.",
    recommendedResources: [
      "Positive Psychology Exercises",
      "Cognitive Behavioral Therapy Workbooks",
      "TED Talks on Mental Health",
    ],
  },
  relationships: {
    description: "Difficulties in interpersonal connections with family, friends, or romantic partners.",
    recommendedResources: ["BetterHelp", "Talkspace", "Psychology Today"],
  },
  addiction: {
    description: "Compulsive engagement with a substance or behavior despite negative consequences.",
    recommendedResources: ["National Alliance on Mental Illness", "Psychology Today", "Harvard Health - Mental Health"],
  },
}

export const copingStrategies = {
  mindfulness: {
    description: "Focusing on the present moment without judgment.",
    techniques: [
      "Deep breathing exercises",
      "Body scan meditation",
      "Mindful walking",
      "Mindful eating",
      "5-4-3-2-1 grounding technique (notice 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste)",
    ],
  },
  physicalActivity: {
    description: "Regular exercise to improve mood and reduce stress.",
    techniques: [
      "Daily 30-minute walks",
      "Yoga or gentle stretching",
      "Dancing to favorite music",
      "Nature hikes",
      "Swimming or water exercises",
    ],
  },
  socialConnection: {
    description: "Maintaining relationships and seeking support from others.",
    techniques: [
      "Regular check-ins with friends or family",
      "Joining support groups",
      "Volunteering in the community",
      "Participating in group activities or classes",
      "Sharing feelings with trusted individuals",
    ],
  },
  selfCare: {
    description: "Activities that promote physical and emotional well-being.",
    techniques: [
      "Establishing a regular sleep schedule",
      "Healthy eating habits",
      "Taking breaks from work or stressful activities",
      "Engaging in hobbies or creative outlets",
      "Setting boundaries with others",
    ],
  },
  cognitiveTechniques: {
    description: "Methods to identify and change negative thought patterns.",
    techniques: [
      "Thought challenging (identifying and questioning negative thoughts)",
      "Positive affirmations",
      "Gratitude journaling",
      "Reframing negative situations",
      "Setting realistic goals and expectations",
    ],
  },
}

