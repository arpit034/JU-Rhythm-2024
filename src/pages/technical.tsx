

import React from 'react'
import EventCard from '../components/EventCard.jsx'



import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",
     
  
      "alias": "Algo Vs Logic",
      "image": 'https://i.postimg.cc/wBV5XWZD/Algo-vs-Logic.png',
      "aboutEvent": "CAPTURING FROM REAL TO REEL! Reels have surely become a means for the youth of today to exhibit their creativity and bring in the best trends on social media in this digital era. As a result, we've chosen to use this expressive platform to recognize the students' inventiveness. To explore the creative side of the students, we bring to you The Reel Making Competition",
      "eventDetail": [
        "It is an individual event.",
        "Any act of indiscipline by participants, calls for cancellation of registration.",
        "Topic - *Splash Vibes*"
      ],
      "rules": [
        "Record and edit multi-clip videos on the given topic with audio, effects and creative tools.",
        "Each participant is allowed to submit only one reel.",
        "The duration of the reel is to be min of 15 sec and max of 60 sec.",
        "All the participants will be added to the WhatsApp group and the link to upload the reels will be shared.",
        "Any act of indiscipline by participants, calls for cancellation of registration.",
        "Reel should be submitted before 9pm of 2nd Day, Link will be Expired after 9pm"
      ],
      "judgingCriteria": [
        "Based on *Quality and creativity of the video*",
        "The Judges’ decision will be the final decision."
      ],
      "coordinators": {
        "students": [
          { "name": "Arpit", "phone": "9902774200" },
          { "name": "isha", "phone": "7259137283" }
        ],
        "faculty": ["Raj Kiran Shetty", "Rakshith Shetty"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "G16",
        "time": "9:30 AM"
      }
    },
    {
      "name": "",
      "alias": "Cyberbytes",
      "image": 'https://i.postimg.cc/4dW5g81X/Cyberbytes.png',
      "aboutEvent": "Anything that can be written or thought of can be filmed. They say a picture is worth a thousand words then a film is worth a thousand times more. If you are an author whose novels are films, this is right place to publish.",
      "eventDetail": ["Theme will be given on the first day of the Fest"],
      "rules": [
        "A team can only have a maximum of 10 participants.",
        "The movie should be shot within college premises.",
        "No individual can be a member of more than one team.",
        "The movie should be within the time limit and should not be exceed more than 5 minutes.",
        "The movie shouldn’t have any offensive/explicit/vulgar language or scenarios.",
        "The movie can be shot on any camera and should have a minimum quality of 720p and maximum of 1080p.",
        "Languages permitted English, Kannada, Malayalam, Tulu and Hindi.",
        "The decision of the judges will be final."
      ],
      "judgingCriteria": [
        "Originality. The uniqueness and originality of the premise or story.",
        "Creativity.",
        "Plot.",
        "Characters.",
        "Cinematography.",
        "Sound Quality.",
        "Pacing & Structure."
      ],
      "coordinators": {
        "students": [
          { "name": "Vikas V", "phone": "9008554681" },
          { "name": "Gangadhara", "phone": "9353666951" }
        ],
        "faculty": ["Rakshith Shetty", "Suhail Shaha"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "G16",
        "time": "9:30 AM"
      }
    },
    {
      "name": "",
      "alias": "Pixellate",
      "image": 'https://i.postimg.cc/VLCjGs2f/Pixellate.png',
      "aboutEvent": "There is a creative fraction of a second when you are taking a picture. Your eye  must see a composition or an expression that life itself offers you, and you must know with intuition when to click the camera. That is the moment the photographer is creative. Oops! The Moment! Once you miss it, it is gone forever",
      "eventDetail": [
        "This event will have only one round and result will be announced on the last day of Yensplash"
      ],
      "rules": [
        "Individual Participation",
        "Participants should have their own digital camera or DSLR’s.",
        "The photographs should be relevant to the 1st & 2nd day of Yensplash.",
        "Participants should submit 5 best photographs on time.",
        "The photographs that are submitted should be as captured within the campus.",
        "No edits, no filters.",
        "Judge’s decision will be final"
      ],
      "judgingCriteria": [
        "The competition will be judged based on the creativity and quality of the images"
      ],
      "coordinators": {
        "students": [
          { "name": "Vandana K Acharya", "phone": "9740406878" },
          { "name": "Smithashree", "phone": "9380378465" }
        ],
        "faculty": ["Rakshith Shetty", "Raj Kiran Shetty"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "G16",
        "time": "9:30 AM"
      }
    },
    {
      "name": "",
      "alias": "Mopix",
      "image": 'https://i.postimg.cc/QtYpPFXt/Mopix.png',
      "aboutEvent": "Mehendi art is a unique and traditional gift of Indian culture.With mehendi let your creativity run wild and the design comes to life! Come celebrate with us,both the beauty and culture through the art of mehendi.",
      "eventDetail": [
        "There must be 2 participants in a group.",
        "Mehendi should be applied on both the side of one hand.",
        "Participants must be present on time."
      ],
      "rules": [
        "Time:60 min",
        "Cones must be brought by the participants.",
        "Tissues/napkins must brought by participants.",
        "Participants should get a partner to apply mehendi.",
        "In case participant arrives late to the event ,no extra time is given.",
        "Judges decision is final."
      ],
      "judgingCriteria": [
        "Participants must apply mehendi with 60 min on both the side of one hand.Hand should be completely filled with design.Design must be attractive and unique.Cleanness must be maintained."
      ],
      "coordinators": {
        "students": [
          { "name": "Ayesha", "phone": "8431981515" },
          { "name": "Sajna", "phone": "9380753420" }
        ],
        "faculty": ["Ayesha", "Nalini"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "SLH02",
        "time": "11:30 AM – 12:30 PM"
      }
    },
    {
      "name": "Palette of perfection",
      "alias": "Codehunt",
      "image": 'https://i.postimg.cc/gkCKmL3L/CodeHunt.png',
      "aboutEvent": "Rangoli is drawn in different states with different names and on different themes every region has its own unique way of representing their traditions, folklore and practices. Now it is your chance to showcase your creative skills by participating in the Rangoli Making Competition.",
      "eventDetail": ["Time duration: 2 hours"],
      "rules": [
        "Two participants in a team.",
        "There will be only one round of competition.",
        "Teams will be responsible for arrangement of the material required to prepare Rangoli.",
        "Only Rangoli color powders can be used for making Rangoli.",
        "The participants will not be allowed to refer to any printed material etc. for preparing Rangoli."
      ],
      "judgingCriteria": [
        "Overall Appearance and appeal",
        "Details and Clarity in Rangoli art.",
        "Colour combination.",
        "Creativity."
      ],
      "coordinators": {
        "students": [
          { "name": "Savi S Chowta", "phone": "8971028125" },
          { "name": "Hitha S Chowta", "phone": "8971064125" }
        ],
        "faculty": ["Vinitha D’souza", "Shree Raksha"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "2ND Floor Cubical",
        "time": "11:30 AM – 1:30 PM"
      }
    },
    {
      "name": "Maze",
      "alias": "Robowar",
      "image": 'https://i.postimg.cc/DmkbksR2/Robo-War-Elite.png',
      "aboutEvent": "The Objective behind to organize Quiz competition is to evaluate the knowledge of theparticipants within academics as well as beyond academics and to make them familiar with the prospects of quizzes and the objectivity of the questions.",
      "eventDetail": [
        "Each team would be given a set of question papers containing 20 objective type questions",
        "Time limit - 20 minutes",
        "Only Qualified Teams will be selected for FINAL ROUNDS",
        "In case of tie between 2 or more teams, further 3 questions would be asked for final selection."
      ],
      "rules": [
        "Two participants in a team.",
        "The medium of the questions will be only English.",
        "There will be certain time span for each round.",
        "The participants are not permitted to use cell phones or other electronic devices."
      ],
      "judgingCriteria": ["Quiz master's decision is final."],
      "coordinators": {
        "students": [
          { "name": "Thafsira", "phone": "8660152454" },
          { "name": "Rafthan", "phone": "7892133260" },
          { "name": "Mishriya", "phone": "8197330804" },
          { "name": "Lafifa", "phone": "9632152452" }
        ],
        "faculty": ["Prabha"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "Seminar hall",
        "time": "2:00 PM – 3:00 PM"
      }
    },
    {
      "name": "War of Words",
      "alias": "Amphibot",
      "image": 'https://i.postimg.cc/tJ7zChrW/Amphibot.png',
      "aboutEvent": "War of words is a process that involves formal discourse on a particular topic, often including a moderator and audience.",
      "eventDetail": [
        "Round 1: Preliminary Round",
        "Topics will be given 5 minutes before the first round.",
        "The teams have to present their views on the topic (2+1 minutes).",
        "Round 2: Finals",
        "Top 6 teams will compete in a debate face-off (5+1 minutes).",
        "Topics will be given on spot."
      ],
      "rules": [
        "Participants can enter the event only as a team of 2 members.",
        "Registrations can be done prior to the event.",
        "The mover will get one-minute extra time for winding up.",
        "Medium of expression should be English.",
        "Topic of the debate will be announced on spot.",
        "Reading from paper and vulgar words is strictly prohibited"
      ],
      "judgingCriteria": [
        "Participants will be judged based on their organisation of thoughts, clarity, reasoning, research and speaking skills.",
        "The decision of the judge will be final."
      ],
      "coordinators": {
        "students": [
          { "name": "Sushmitha", "phone": "8296362429" },
          { "name": "Pooja R Shettigar", "phone": "9113276328" }
        ],
        "faculty": ["Pallavi", "Sangeetha"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "SLH01",
        "time": "2:00 PM – 3:00 PM"
      }
    },
    {
      "name": "Face-off-Frenzy",
      "alias": "Clash-N-Clatter",
      "image": 'https://i.postimg.cc/5N6PxMGT/Clash-N-Clatter.png',
      "aboutEvent": "Face paint is a work of art that makes you look like a canvas. Sheets and walls may be too mainstream for your artistic skills, so why not try something different? Introducing ‘Face Art’! Step out of your comfort zone and show off your creativity by painting on the face of your teammate. Get ready to go all out and impress us with your skills!",
      "eventDetail": [
        "Team Size: 2 Members",
        "Judges’ and Organizers' decisions will be final."
      ],
      "rules": [
        "Time limit is 90 minutes.",
        "The theme will be given on the spot, and the participants can refer to internet",
        "Sources only during the first ten minutes.",
        "Participants should bring their own colours, brushes, etc.",
        "Use of stencils, stamps and masks are not allowed.",
        "Participants should bring own partners to face paint."
      ],
      "judgingCriteria": [
        "Creativity and originality.",
        "Quality - composition, design elements and colour – do they all work well together",
        "Clarity of them",
        "Overall artistic impression"
      ],
      "coordinators": {
        "students": [
          { "name": "Keerthi", "phone": "6361875024" },
          { "name": "Chaithra", "phone": "8971137290" }
        ],
        "faculty": ["Akshatha N M", "Raksha"]
      },
      "schedule": {
        "day": "19th May",
        "venue": "SLH02",
        "time": "2:00 PM – 3:00 PM"
      }
    },
    {
      "name": "Ramp riot",
      "alias": "Robosoccer",
      "image": 'https://i.postimg.cc/XNZHWbth/Robo-Soccer.png',
      "aboutEvent": "Style is a way to say who you are without having to speak.” It is an event that celebrates fashion, creativity, and individuality. Bring your creativity and skills to the runway as you showcase your unique designs to walk the walk like a pro.",
      "eventDetail": [
        "Participants get to walk the runway, displaying their outfits and accessories in front of a panel of judges and an enthusiastic audience."
      ],
      "rules": [
        "It is an individual event.",
        "The participants must wear the designated clothing and explain the details about their attire.",
        "The participants must walk down the ramp individually, and each participant will be given a maximum of two minutes to complete their walk.",
        "Any behavior deemed inappropriate by the organizers or the judges will result in immediate disqualification.",
        "The judges' decision will be final, and no appeals or objections will be entertained."
      ],
      "judgingCriteria": [
        "Style and Fashion Sense",
        "Confidence and stage presence",
        "Walk and posture",
        "Creativity and originality",
        "Stage presence and audience engagement",
        "Overall Impact"
      ],
      "coordinators": {
        "students": [
          { "name": "Aslam", "phone": "9739746978" },
          { "name": "Nireeksha", "phone": "9980302731" }
        ],
        "faculty": ["Deeksha K R", "Harikanth"]
      },
      "schedule": {
        "day": "21st May",
        "venue": "Concert Stage",
        "time": "9:00 AM"
      }
    },
    {
      "name": "Jazz Off",
      "alias": "Bridge-O-Mania",
      "image": 'https://i.postimg.cc/BQLCrBPG/Bridge-O-Mania.png',
      "aboutEvent": "Lights, camera, action! Get ready to be swept away by the magic of Bollywood at our college fest! Do you think you have good knowledge about Bollywood. Then this is for you.",
      "eventDetail": [
        "Event will have prelims that will be conducted online and followed by 3 rounds to be conducted during yensplash."
      ],
      "rules": [
        "Team should consist of two members",
        "All rounds will be related to Bollywood music",
        "Specific rules for the round will be announced during the event.",
        "At the end of each round 2 teams with less score will be disqualified.",
        "There will be time limit of 2 minutes for every question asked"
      ],
      "judgingCriteria": [
        "A team will be judged on the basis of right answers given by the team"
      ],
      "coordinators": {
        "students": [
          { "name": "Narmeen Noor", "phone": "9113616902" },
          { "name": "Suzan", "phone": "9606185687" }
        ],
        "faculty": ["Praveen"]
      },
      "schedule": {
        "day": "20th May",
        "venue": "Seminar Hall",
        "time": "1:00 PM – 2:00 PM"
      }
    },
    {
      "name": "BGMI",
      "alias": "RoboRush",
      "image": 'https://i.postimg.cc/130DSC9b/RoboRush.png',
      "aboutEvent": "BGMI is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. The last person or team alive wins the match",
      "eventDetail": [
        "First round will be Erangel top 4 teams will be selected for the final round from each lobby,",
        "Final round will be on Livik map."
      ],
      "rules": [
        "All players must be present 15 minutes prior to the event",
        "No team ups are allowed. if found your team will be eliminated",
        "No emulators , mod and beta mode to be used.",
        "Maps to be downloaded before the event Erangel, Livik and all TDM maps.",
        "Should bring your own accessories(earphone, power bank, charger etc).",
        "No quarelling with co-ordinators.",
        "No leaving match room once the match starts and no rematch will be hosted.",
        "Once your team gets eliminated, you will have to leave the venue immediately.",
        "Wifi will be provided."
      ],
      "judgingCriteria": ["The last team to survive wins."],
      "coordinators": {
        "students": [
          { "name": "Mohammed mufeez", "phone": "7624852700" },
          { "name": "Sufiyan mannah", "phone": "7022840817" }
        ],
        "faculty": ["Ganapathi"]
      },
      "schedule": {
        "day": "20th May",
        "venue": "MAD Lab-1ST Floor",
        "time": "1:00 PM – 4:30 PM"
      }
    },
    {
      "name": "Valorant",
      "alias": "Valorant",
      "image": 'https://i.postimg.cc/zD9dXQrf/Valorant.png',
      "aboutEvent": "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. the players have to make use of all the utils in order to defend 12 rounds and attack 12 rounds the first team to win 13 rounds win’s the match.",
      "eventDetail": [
        "The event will be conducted on the second day of the yen-splash . match up will be made on spot, the game will be single elimination, each team will defend 12 rounds and attack 12 rounds. the first team to win 13 rounds will win the match. in case of draw at 12th round 2 more rounds will be played ."
      ],
      "rules": [
        "Participants can bring their own accesories.",
        "Headphones and mouse pad will not be provided by the college.",
        "A team should contain maximum of 5 players and minimum of 4.",
        "Personal systems are not allowed.",
        "judges decision will be final.",
        "No quarelling with co-ordinators.",
        "Once your team gets eliminated, you will have to leave the venue immediately.",
        "No team ups allowed if found spot elimination will be done."
      ],
      "judgingCriteria": ["The First team to win 13 rounds will win the game."],
      "coordinators": {
        "students": [
          { "name": "Shaikh Mohammed Yaasar", "phone": "6363827044" },
          { "name": "Zakir Mohammed", "phone": "8296478218" }
        ],
        "faculty": ["Basavaraj"]
      },
      "schedule": {
        "day": "20th May",
        "venue": "MAD Lab-1ST Floor",
        "time": "1:00 PM – 4:30 PM"
      }
    },
   
    {
      "name": "Wild promotions",
      "alias": "Bgmi",
      "image": 'https://i.postimg.cc/HLH47GZp/BGMI.png',
      "aboutEvent": " *Creativity is seeing what others see and thinking what no one else thought.*- Albert Einstein. It’s time to think out of the box and make creativity flow all over the place. Unleash the actor, comedian, writer and entertainer within you to make the best advertisement!",
      "eventDetail": [
        "All participants will have to come prepared and present an advertisement for a product/service of their choice.",
        "The advertisement can be in English, Kannada, Malayalam, Tulu, or Hindi",
        "The duration of the advertisement must be 5+2 minutes.",
        "Theme will be Wild Promotion"
      ],
      "rules": [
        "The Ad prepared by the contestants must not contain any obscene words/any subject that could hurt the sentiments of culture/language/religion/institution.",
        "A team can consist of a maximum of 10 participants (minimum of 4 participants)",
        "If any vulgarity is found while competing, the team may be disqualified immediately.",
        "Violation of the rules will result in negative marking.",
        "The decision of the judges is final and abiding.",
        "The organizers retain the right to modify any aspect of the event being conducted.",
        "If any music to be played for the show, the music should be uploaded to a personal pendrive and should be given to the sound system operator before respective show starts and a student should be available to play the music."
      ],
      "judgingCriteria": [
        "Audience engaging power.",
        "Concept of the Ad",
        "Creativity",
        "Originality",
        "Humour",
        "Time Management"
      ],
      "coordinators": {
        "students": [
          { "name": "Ashiq", "phone": "9902774200" },
          { "name": "Naman", "phone": "6360586392" }
        ],
        "faculty": ["Pradeep Udupa", "Guruprasad"]
      },
      "schedule": {
        "day": "20th May",
        "venue": "Open-air Auditorium",
        "time": "9:45 AM"
      }
    },
    {
      "name": "Bug Bash",
      "alias": "Fifa",
      "image": 'https://i.postimg.cc/XY9kJNgH/FIFA.png',
      "aboutEvent": "Hello, clever clogs! Collaborate with your best buddy to code your way out of the problem statements. Get ready for an epic battle of intelligence as you try to figure out the best solution for the given problem and code it.",
      "eventDetail": [
        "There will be Four Rounds.",
        "Round 1: MCQ Questions ( Pre-Elimination Round )",
        "Round 2: Blind Coding",
        "One member of the Team must type the code for given problem, with MONITOR SWITCHED OFF",
        "Participants whose code gets executed will be given higher preference",
        "Second preference will be given to code with least number of errors",
        "In case of tie in number of errors, TIME OF SUBMISSION will be considered",
        "Round 3: Debugging",
        "Contain set of Question, each Question will have points",
        "Team that scores minimum points will be eliminated",
        "Round 4: Betting on Your Code",
        "Contains a set of Question • Each Team will have 100 points",
        "Each Team must bet few points to Pool Pot, before start of each round (Max-50 point, Min-25 point)",
        "Whoever win each round will get points in Pool Pot",
        "Team with no points will be eliminated Last survival team will be considered as the winner"
      ],
      "rules": [
        "Participants can enter the event only as a team of 2 members.",
        "Registrations can be done prior to the event.",
        "No books or any gadget are allowed, PC will be provided."
      ],
      "judgingCriteria": [
        "Participants will be judged based on their performance, time management, coding skills.",
        "Team who clears all rounds will be the winner."
      ],
      "coordinators": {
        "students": [
          { "name": "Srijan R M", "phone": "8971591262" },
          { "name": "Srichandan", "phone": "8277469073" }
        ],
        "faculty": ["Abdul Majid", "Sanjeev Kulkarni"]
      },
      "schedule": {
        "day": "20th May",
        "venue": "DS Lab -3rd Floor",
        "time": "1:30 PM-2:30 PM"
      }
    },
  
  ]

  return (
    <>
  <NewNavBar/>
    <div className='flex flex-col text-center justify-center gap-10 mt-6'>
      <div className='team2 text-6xl'>
        <p className='m-2'>TECHNICAL</p>
        </div>
      <div className='flex flex-col mx-16 md:grid md:grid-cols-4 gap-10'>
      {events.map((element)=>{
              return <div>
                <EventCard title={element.alias} image={element.image}/>
            </div>
        })}
        </div>

          </div>
    </>
  )
}
