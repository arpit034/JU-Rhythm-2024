
import EventCardMedia from '../components/EventCardMedia'
import React from 'react'
import EventCard from '../components/EventCard.jsx'


import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {

  const events = [
    {
      "name": "",
      // alias andr show hoga poster mein
  
      "alias": "AD-MAD",
      "image": 'https://i.postimg.cc/dtqrjMG3/AD-MAD.png',
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
      "alias": "Quick-Flick",
      "image": 'https://i.postimg.cc/tC2Prrz5/QUICK-FLICK.png',
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
      "alias": "ShutterShots",
      "image": 'https://i.postimg.cc/y6h0R6g2/SHUTTER-SHOTS.png',
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
      "alias": "SnippetStory",
      "image": 'https://i.postimg.cc/pLSjvp45/SNIPPET-STORY.png',
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
      "alias": "VirtualVerve",
      "image": 'https://i.postimg.cc/J0QJCKCR/VIRTUAL-VERVE.png',
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
    
  ]

  return (
    <>
  <NewNavBar/>
    <div className='flex flex-col text-center justify-center gap-10 mt-6'>
      <div className='team2 text-6xl'>
        <p className='m-2'>MEDIA</p>
        </div>
      <div className='flex flex-col mx-16 md:grid md:grid-cols-4 gap-10'>
      {events.map((element)=>{
              return <div>
                <EventCardMedia title={element.alias} image={element.image}/>
            </div>
        })}
        </div>

          </div>
    </>
  )
}
