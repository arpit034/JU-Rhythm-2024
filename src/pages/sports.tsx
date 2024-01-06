
import EventCardSports from '../components/EventCardSports'
import React from 'react'
import EventCard from '../components/EventCard.jsx'
import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",
      // alias andr show hoga poster mein
  
      "alias": "Paintball",
      "image": 'https://i.postimg.cc/RhG9BJPk/PAINTBALL.png',
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
      "coordinators":{"name":'9902774200',"name2":'7259137283'},
      "schedule": {
        "day": "19th May",
        "venue": "G16",
        "time": "9:30 AM"
      }
    },
    {
      "name": "",
      "alias": "Roadies",
      "image": 'https://i.postimg.cc/d1YKZjgM/ROADIES.png',
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
      "alias": "TableTennis",
      "image": 'https://i.postimg.cc/4NSkQgjQ/TABLE-TENNIS.png',
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
      "alias": "TreasureHunt",
      "image": 'https://i.postimg.cc/tgFKbVJB/TREASURE-HUNT.png',
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
      "name": "",
      "alias": "Snake Ladder",
      "image": 'https://i.postimg.cc/c1TN6Ymj/SNAKE-LADDER.png',
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
      "name": "",
      "alias": "Live Ludo",
      "image": 'https://i.postimg.cc/Z5Xm4Sc5/LIVE-LUDO.png',
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
      "name": "",
      "alias": "Ipl-Auction",
      "image": 'https://i.postimg.cc/5tvVtR7q/IPL-AUCTION.png',
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
      "name": "",
      "alias": "Gully Cricket",
      "image": 'https://i.postimg.cc/Kvvx5Qjx/GULLY-CRICKET.png',
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
      "name": "",
      "alias": "Futsal",
      "image": 'https://i.postimg.cc/ZK7Zs3v3/FUTSAL.png',
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
      "name": "",
      "alias": "Basketball",
      "image": 'https://i.postimg.cc/xjP9HB06/BASKETBALL.png',
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
      "name": "",
      "alias": "Chess",
      "image": 'https://i.postimg.cc/P5CHgx17/CHESS.png',
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
    
  ]

  return (
    <>
  <NewNavBar/>
    <div className='flex flex-col text-center justify-center gap-10 mt-6'>
      <div className='team2 text-6xl'>
        <p className='m-2'>SPORTS</p>
        </div>
      <div className='flex flex-col mx-16 md:grid md:grid-cols-4 gap-10'>
      {events.map((element)=>{
              return <div>
                <EventCardSports 
                title={element.alias} image={element.image}
  
                date={element.schedule.day}
                time={element.schedule.time}
                venue={element.schedule.venue}
                about={element.aboutEvent}
                details={element.eventDetail}
                rules={element.rules}
                coordinator1={element.coordinators.name}
                coordinator2={element.coordinators.name2}/>
            </div>
        })}
        </div>

          </div>
    </>
  )
}
