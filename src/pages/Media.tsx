
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
        "Registration Fee: Rs 300  per person || Team Composition: 1"
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
      
      "coordinators":{"name":'Piyush Bhagchandani: 8209455601',"name2":'Sanchita: 8078669540'},
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
      "eventDetail": ["Registration fee: Rs 300 per person|| Team Composition: 1"],
      "rules": [
        "	A reel must be made which should cover all the events happening on the day.",
        "	The clips must be recorded while the rhythm is going on.",
        "The reel should cast off with a trending sound.",
        "The reel has to be uploaded on Instagram collaborated with ID: giving on event day.",
        "JUDGING CRITERIA",
        "Number of likes on the reel",
        "Number of views on the reel",
        "Number of shares on the reel"

      ],
    
      "coordinators": {"name":'Kinshuk Mital: 9785246797',"name2":'Rachi Agarwal: 7023316442'},
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
        	"Format should be .jpg format not in raw format. ",
        "5 tasks will be provided on both the days which are supposed to be completed accordingly.",
        "The photos should be uploaded in the given link on time.",
        "	No Editing should be done. ",
        "Amount of tasks completed on time",
        "Framework of the photos will be in concern.",
        "The photos captured in the phone and the camera will be evaluated separately via well-defined comparing manner."
        
      ],
      
      "coordinators": {"name":'Mohit Sehra: 7023323711',"name2":'Khushi Nagar: 6350392955'},
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
        "A short film should be made with a duration of 4-7 mins max.",
        "	A film should have a glimpse of all the events happening on the day of shoot. ",
        "	No restrictions on the usage of phones and DSLR.",
        	"No clips should be there via unfair practices",
      
      
        "JUDGING CRITERIA",
        
        "Quality of video (1080p min_4k max) and sound.",
        "Script of the movie",
        "Video editing and sound scoring"
      ],
      
      "coordinators": {"name":'Jaanvi Pareek: 6367573171',"name2":'Chetan: 7733885528'},
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
      "aboutEvent": "",
      "eventDetail": ["Registration Fee: Rs600 per person (for two days) || Team Composition:1"],
      "rules": [
        "Vlog duration should be about 4-7 mins max.",
        "Day 1 all the events should be covered during this shoot.",
        	"Vlog should be uploaded on Day 1.",
          "	Day 2  will be allotted for promotion.",
        "Video editing",
        "Sound and video quality (1080p min-4k max)",
        "Interaction with viewer",
        "Coverage of events",
        "Entertainment"
      ],
      
      "coordinators": {"name":'Aashi Rathi: 9828292185',"name2":'Kunal Chouhan: 9799834182'},
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
