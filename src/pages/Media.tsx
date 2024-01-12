
import EventCardMedia from '../components/EventCardMedia'



import NewNavBar from '../components/NavBar.jsx'
export default function Technical() {
  const events = [
    {
      "name": "",
      "alias": "Pixellate",
      "image": 'https://i.postimg.cc/VLCjGs2f/Pixellate.png',
      "aboutEvent": "Designing is a challenge, it requires a pioneering vision strengthened by a curiosity out of the ordinary; yet typical of any man. To design is to invent, innovate, and surprise. All this through a single tool   Pixelate is a contest in which participants are asked to design graphics using the given set of tock images and other resources. The event is divided into two rounds. The first is an   elimination round in which a short design problem will be given.",
      "eventDetail": [
        "Registration Fee: Rs 300  || Team Composition: 1"
      ],
      "rules": [
        	"Skill",
"	Message/ Thought behind the design", 
	"Only Canva is allowed to make posters.", 
"	It should be made from scratch, no Templates should be used.",
	"Eye catching",
  "The decisions made by the judges would be final and binding.",
	"Interaction with the viewer.",
	"Creativity", 



      ],
      
      "coordinators":{"name":'',"name2":''},
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "Quick-Flick",
      "image": 'https://i.postimg.cc/tC2Prrz5/QUICK-FLICK.png',
      "aboutEvent": "Anything that can be written or thought of can be filmed. They say a picture is worth a thousand words then a film is worth a thousand times more. If you are an author whose novels are films, this is right place to publish.",
      "eventDetail": ["Registration fee: Rs 300  || Team Composition: 1"],
      "rules": [
        "A reel must be made which should cover the whole Rhythm 2024 including all the three days.",
        "The clips must be shooted meanwhile the Rhythm is going on.",
        "The reel should cast off with a trending sound.",
        "The reel has to be uploaded on Instagram collaborated with ID:",
        "JUDGING CRITERIA",
        "Number of likes on the reel",
        "Number of views on the reel",
        "Number of shares on the reel"

      ],
    
      "coordinators": {
        "students": [
          { "name": "", "phone": "" },
          { "name": "", "phone": "" }
        ],
      },
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "ShutterShots",
      "image": 'https://i.postimg.cc/y6h0R6g2/SHUTTER-SHOTS.png',
      "aboutEvent": "There is a creative fraction of a second when you are taking a picture. Your eye must see a composition or an expression that life itself offers you, and you must know with intuition when to click the camera. That is the moment the photographer is creative. Oops! The Moment! Once you miss it, it is gone forever",
      "eventDetail": [
        "Registration fee: Rs 300 per person || Team Composition: 1"
      ],
      "rules": [
        "Individual Participation",
        "Participants should have their own digital camera or DSLR’s.",
        "5 tasks will be provided on both the days which are supposed to be completed accordingly.",
        "The photos should be uploaded in the given link on time.",
        "JUDGING CRITERIA",
        "Amount of tasks completed on time",
        "Framework of the photos will be in concern.",
        "The photos captured in the phone and the camera will be evaluated separately via well-defined comparing manner."
        
      ],
      
      "coordinators": {
        "students": [
          { "name": "", "phone": "" },
          { "name": "", "phone": "" }
        ],
      },
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "SnippetStory",
      "image": 'https://i.postimg.cc/pLSjvp45/SNIPPET-STORY.png',
      "aboutEvent": "SHORT FILM MAKING COMPETITION",
      "eventDetail": [
        "Registration Fee: Rs 2000 per team  || Team composition:4"
      ],
      "rules": [
        "A short film should be made with a duration of 5-10 mins max.",
        "The topic for the short film will be provided on the spot.",
        "The final submission of the short film must inculcate a well-defined script along with the screenplay of the movie.",
        "JUDGING CRITERIA",
        "Story telling",
        "Quality of video (1080p min_4k max) and sound.",
        "Script of the movie",
        "Video editing and sound scoring"
      ],
      
      "coordinators": {
        "students": [
          { "name": "", "phone": "" },
          { "name": "", "phone": "" }
        ],
      },
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
      }
    },
    {
      "name": "",
      "alias": "VirtualVerve",
      "image": 'https://i.postimg.cc/J0QJCKCR/VIRTUAL-VERVE.png',
      "aboutEvent": "Rangoli is drawn in different states with different names and on different themes every region has its own unique way of representing their traditions, folklore and practices. Now it is your chance to showcase your creative skills by participating in the Rangoli Making Competition.",
      "eventDetail": ["Registration Fee: Rs600 per person (for two days) || Team Composition:1"],
      "rules": [
        "Vlog duration should be about 5-10 mins max.",
        "Day 1 and Day 2 should be covered during this shoot.",
        "JUDGING CRITERIA",
        "Video editing",
        "Sound and video quality (1080p min-4k max)",
        "Interaction with viewer",
        "Coverage of events",
        "Entertainment"
      ],
      
      "coordinators": {
        "students": [
          { "name": "", "phone": "" },
          { "name": "", "phone": "" }
        ],
      },
      "schedule": {
        "day": "",
        "venue": "",
        "time": ""
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
                <EventCardMedia title={element.alias} image={element.image}
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
