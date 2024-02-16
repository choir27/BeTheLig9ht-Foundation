type About_us_text = Record<string, string>;

const about_us_content: About_us_text = {
  paragraph1:
    "The St. Phard Family created BeTheLi9ht Foundation (formerly Fly High Coby) in the memory of Coby St. Phard.  Coby was a beautiful human being who was loved by all.  He died by suicide in March of 2016.  It was a shock to his family, friends, school community and the community at large.",
  paragraph2:
    "After his passing, the St. Phards decided to start a GoFundMe campaign in Coby's memory.  Although they did not know at the time what specifically the money would go for, they knew they would help kids in some way.  Because Coby was so well-liked and he impacted so many, close to $70,000 was raised to start this foundation.",
  paragraph3:
    "Coby's friends at Notre Dame High School, held a prayer service in his memory.  At that service, the people who attended wrote out note cards of their favorite memories of Coby.  (You can view some of those memories below.)",
  paragraph4:
    "When reading those note cards, the St. Phard's noticed many of them called Coby a light or said he was such a light to others.  Realizing that was much of who Coby was, the #bethelight movement began.  One of Coby's friends further personalized that hashtag by changing the \"g\" in light to a number 9, Coby's Notre Dame soccer number, giving birth to the BeTheLi9ht Foundation!  Although the mission of BeTheLi9ht Foundation was not completely clear at first, over the first few years, it evolved what it is today.",
  paragraph5:
    'Our main focus is we mental well being of all young people.  In September 2021, we opened the BeTheLi9ht Center in downtown Hightstown, NJ. The center is open after school (check social media for up-to-date days/times) as well as on weekend for special events.  We are a place for our youth to just "BE."  It is a place to hang with friends, meet new people, share your problems and your dreams with others like you or with a trusted adult.  We have games, puzzles, activities, snacks and coffee/tea/hot chocolate and water.  We will also be having special events and presenters.  If you are looking for something to do or a place to hang out, come see us.  After school is open to 7-12th grade. Special events for ages 18-25.',
  paragraph6:
    'Additionally, we promote mental health awareness, suicide awareness/prevention & being a li9ht to others/being kind as well as providing college scholarships to high school seniors.  (Click below for scholarship information.)  We also support financially other organizations that do the same.  We do not feel that the "wheel" needed to be recreated.  Additionally, Rachelle St. Phard, Coby\'s mother, supports other women who are grieving the loss of their children from mental illness (suicide, overdose, etc.)',
  paragraph7:
    "The photo on this page is of Coby playing soccer for his school.  The ball was changed to a semi colon by a friend in support of suicide awareness.  If you are not familiar with the semi colon movement, \"a semicolon is used when an author could've chosen to end their sentence, but chose not to. The author is you and the sentence is your life.\"  Remember, your story isn't over!",
};

export const about_us_text_context: string[] = [];

for (const [keys, values] of Object.entries(about_us_content)) {
  about_us_text_context.push(values);
}
