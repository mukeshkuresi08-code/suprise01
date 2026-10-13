// ============================================================
// 🌻 SURPRISE CONTENT — EDIT ALL PERSONAL MESSAGES HERE
// ============================================================
// To customize this website:
// 1. Change recipientName / senderName for different people
// 2. Edit any letter/message text below
// 3. Change the displayDate for a different occasion
// 4. All text used in the website lives in this file
// ============================================================

export const RECIPIENT_NAME = 'Potti';
export const SENDER_NAME = 'Mikkyyy';
export const DISPLAY_DATE = '13.10.2026';
export const DISPLAY_DATE_LONG = '13 OCTOBER 2026';
export const GAME_NAME = 'Specimen Zero';

// ── Chapter 1: Welcome ──────────────────────────────────────
export const welcome = {
  heading: `Hey, ${RECIPIENT_NAME}... 🌻`,
  subheading: 'Psst... someone made a tiny little world just for you.',
  description:
    'An unexpected adventure, a few silly surprises, and something from someone who is really glad to know you.',
  button: 'OPEN YOUR SURPRISE 💗',
};

// ── Chapter 2: Envelope ─────────────────────────────────────
export const envelope = {
  letter: `Dear ${RECIPIENT_NAME},

Hiiii, you little sunshine. 💗

So... you might be wondering what this is.

Well, ${SENDER_NAME} has been secretly cooking up something for you. And no, for once, it is not another chaotic conversation or a random message at a completely questionable hour. 😭

I wanted to make you something a little different.

Something cute, something silly, and something that could remind you that I'm really glad we met.

So take your time, explore this little world, and please enjoy the nonsense I've lovingly prepared for you.

Your adventure starts now, ${RECIPIENT_NAME}. 🌻

With love,
${SENDER_NAME}`,
  button: 'OKAYYY, LET\'S GO ✨',
};

// ── Chapter 3: Specimen Zero ────────────────────────────────
export const specimenZero = {
  heading: 'OUR FRIENDSHIP SPAWNED IN SPECIMEN ZERO?! 👻',
  openingLines: [
    'Out of all the possible places to meet someone...',
    'A peaceful café? Nope.',
    'A cute little park? Nope.',
    `${GAME_NAME.toUpperCase()}. A HORROR GAME. 😭`,
    'LIKE, EXCUSE ME???',
  ],
  storyText: `And somehow, in the middle of all that chaos, our paths crossed.

We entered a horror game expecting scares...

And somewhere along the way, I ended up finding a friend I'm genuinely glad I met.

Honestly, that plot twist was not on my gaming bingo card. 💀💗`,
  ghostReactions: [
    'WHY IS THIS THING LOOKING AT ME LIKE THAT?! 😭',
    `${RECIPIENT_NAME.toUpperCase()}, RUNNNNN!!`,
    `${SENDER_NAME.toUpperCase()} HAS OFFICIALLY LOST THE PLOT. 💀`,
    'WE CAME FOR SURVIVAL AND LEFT WITH FRIENDSHIP. 🌻',
  ],
  missionComplete: {
    title: 'MISSION COMPLETE!',
    lines: [
      `${GAME_NAME} survival rating: Questionable.`,
      'Friendship discovery rating: 100/10.',
      `And that, ${RECIPIENT_NAME}, is why our friendship origin story deserves its own movie. 😂💗`,
    ],
  },
  button: 'CONTINUE OUR LITTLE STORY 🌻',
};

// ── Chapter 4: Friendship Chaos ─────────────────────────────
export const friendshipChaos = {
  heading: `${RECIPIENT_NAME.toUpperCase()} + ${SENDER_NAME.toUpperCase()}: A QUESTIONABLE DUO 💗`,
  subheading: 'Somehow, the chaos makes sense.',
  cards: [
    {
      id: 'funny-chats',
      emoji: '😂',
      title: 'THE FUNNY CHATS',
      message: `Why are our conversations capable of going from completely normal to absolutely unhinged in approximately 0.2 seconds?

I don't know who started the nonsense.

Actually, let's not investigate that.

The important thing is that the nonsense is iconic. 😭`,
    },
    {
      id: 'late-night',
      emoji: '🌙',
      title: 'THE LATE-NIGHT CHATS',
      message: `There is something special about those late-night conversations.

The world gets quieter, random thoughts appear out of nowhere, and somehow one little conversation can turn into a whole memory.

Even when the topics are completely ridiculous, those moments can mean a lot.

And yes, our sleep schedules might have questions. 💀`,
    },
    {
      id: 'understanding',
      emoji: '💗',
      title: 'THE UNDERSTANDING',
      message: `One thing I really appreciate about a friendship is being able to feel understood.

Not every conversation has to be perfect.

Not every day has to be amazing.

Sometimes it's enough to talk, laugh, listen, or simply know that someone is willing to understand.

That kind of connection is something worth appreciating.

And I'm genuinely glad we got to build ours.`,
    },
    {
      id: 'distance',
      emoji: '🌍',
      title: 'THE DISTANCE',
      message: `We might be far apart in the real world, but the friendship still exists in all those conversations, jokes, little updates, and random moments.

Distance can make some things harder, but it doesn't make the moments we share meaningless.

And I'm glad a game brought us into each other's lives. 🌻`,
    },
  ],
  titlePoll: {
    question: 'CHOOSE OUR OFFICIAL FRIENDSHIP TITLE 👀',
    options: [
      { label: 'PROFESSIONAL CHAOS PARTNERS 😂', id: 'chaos' },
      { label: 'LATE-NIGHT CONVERSATION EXPERTS 🌙', id: 'night' },
      { label: 'SPECIMEN ZERO SURVIVORS 👻', id: 'survivors' },
      { label: 'ALL OF THE ABOVE. NO DISCUSSION. 💀', id: 'all' },
    ],
    reactions: {
      chaos: 'Official title unlocked: Two people whose conversations should probably come with a warning label. 😂',
      night: 'Official title unlocked: Two people with questionable sleep schedules and elite friendship lore. 🌙',
      survivors: `Official title unlocked: Two gamers who entered ${GAME_NAME} and left with an entire friendship. 👻`,
      all: 'Official title unlocked: The full package — chaos, late nights, survival skills, and zero regrets. 💀💗',
    },
  },
  button: 'ONE MORE LITTLE SURPRISE 💌',
};

// ── Chapter 5: Long-Distance Connection ─────────────────────
export const distanceChapter = {
  heading: 'MILES APART, STILL A LITTLE CLOSER 🌙',
  text: `It's kind of funny, isn't it?

We can be in completely different places and still end up sharing jokes, random thoughts, late-night conversations, and little pieces of our days.

We don't get to share every moment in person, but that doesn't make the moments we do share any less meaningful.

Sometimes a friendship grows through the simplest things.

A silly message.

A conversation that lasts longer than expected.

A moment when someone actually listens.

A feeling that you can be yourself without having to explain every little thing.

And somewhere between the chaos, the laughs, and those late-night chats, our friendship became something I'm happy to have.

I'm really glad I met you, ${RECIPIENT_NAME}. 💗

And yes, I still blame ${GAME_NAME} for introducing this much chaos into my life. 😂`,
  starLabel: 'TOUCH THIS LITTLE STAR ✨',
  hiddenNote: `Hey ${RECIPIENT_NAME}...

If you ever have a rough day, I hope you remember that you're appreciated, your feelings matter, and you deserve kindness.

You don't have to be cheerful every second.

You don't have to have everything figured out.

Sometimes it's okay to just be yourself.

Sending a tiny virtual sunflower your way. 🌻`,
  button: 'THERE\'S SOMETHING I NEED TO SAY... 💌',
};

// ── Chapter 6: Apology ──────────────────────────────────────
export const apologyChapter = {
  heading: `OKAY, ${RECIPIENT_NAME.toUpperCase()}... ONE LITTLE APOLOGY 🥹`,
  letter: `Dear ${RECIPIENT_NAME},

Okay, first of all...

YES, THIS SURPRISE IS LATE. 😭💗

${SENDER_NAME} has officially arrived with questionable timing but a very sincere little surprise.

I'm sorry this took longer than I wanted it to.

I still wanted to make something special for you, something that wasn't just another ordinary message disappearing into a chat.

So I made this tiny world.

A little horror-game chaos.

A few friendship memories.

Some late-night conversation energy.

A whole bunch of sunflowers.

And one very sincere message hidden underneath all the silliness.

I'm really glad we met, ${RECIPIENT_NAME}.

Out of all the random things that could have happened while playing ${GAME_NAME}, I'm happy that we got to know each other.

Thank you for the funny chats, the conversations, the understanding, and the little moments that make a friendship feel special.

This website might have arrived late, but I still wanted you to have something made especially for you.

I hope it makes you smile.

And if it makes you laugh at my questionable website-making decisions, that counts as a bonus. 😂

I'm sorry for the delay, and I'm sending you the biggest virtual sunflower bouquet.

You deserve all the little things that make life brighter.

With love and a tiny amount of chaos,

${SENDER_NAME} 🌻💗`,
  acceptButton: 'ACCEPT THIS SUNFLOWER APOLOGY? 🌻',
  acceptResponse: {
    title: 'APOLOGY SUBMITTED SUCCESSFULLY! 💌',
    lines: [
      'Review status: Extremely cute.',
      'Sunflower count: Increasing.',
      'Chaotic friendship status: Still iconic.',
      'Official decision: One virtual sunflower bouquet delivered. 🌻😂',
    ],
  },
  teaser: 'BUT WAIT... THE BIGGEST SURPRISE IS STILL HIDDEN.',
  button: 'SHOW ME THE MAGIC ✨',
};

// ── Chapter 7: Finale ───────────────────────────────────────
export const finaleChapter = {
  preHeading: `HEY ${RECIPIENT_NAME.toUpperCase()}... LOOK WHAT I MADE FOR YOU. 🌻`,
  preSubheading: 'A tiny garden for a very special friend.',
  bloomButton: 'MAKE THE FLOWERS BLOOM ✨',
  finalLetter: `To ${RECIPIENT_NAME}, my favourite little sunshine. 🌻💗

It's funny how life works sometimes.

You can enter a game expecting nothing but scares, chaos, and questionable decisions...

And somehow, you can come away having met someone who becomes a meaningful part of your world.

I'm glad that happened to us.

I'm glad for the funny chats.

I'm glad for the random conversations.

I'm glad for those late-night moments when one little message can turn into a whole conversation.

I'm glad for the understanding we've shared.

And I'm glad that, somewhere in this enormous world, our paths crossed.

We might be far apart, but I'm happy that we got to know each other.

This little website isn't perfect, and my timing definitely isn't perfect either. 😭

But every flower, every silly interaction, and every little message was put together with one simple intention:

To make you smile.

I hope life gives you beautiful moments, unexpected happiness, kind people, peaceful days, and countless reasons to laugh.

And whenever things feel a little heavy, I hope you remember that you deserve the same kindness and understanding that you give to others.

Thank you for being ${RECIPIENT_NAME}.

Thank you for being part of this wonderfully random story.

And thank you, ${GAME_NAME}, for the most unexpected friendship plot twist. 😂💗

Stay golden, sunshine.

From your long-distance chaos partner,

${SENDER_NAME} 🌻`,
  finalHeadline: `THIS LITTLE GARDEN IS YOURS, ${RECIPIENT_NAME.toUpperCase()}. 🌻`,
  finalSubheading: 'Made with love, a little chaos, and lots of sunflowers.',
  rereadButton: 'READ MY LETTER AGAIN 💌',
  growButton: 'GROW ONE MORE SUNFLOWER 🌻',
  restartButton: 'RELIVE OUR LITTLE ADVENTURE ✨',
};
