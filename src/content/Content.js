import './Content.css';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

const images=["full1.png", "full2.png", "full3.png", "full4.png", "full5.png"];
const pts=["stack1.png", "stack2.png", "stack3.png"];
const dev=["dev1.png", "dev2.png"];
const imp=["imp1.png", "imp2.png"];

export default function Content()
{
      return (
        <>
           <div>
            <div className='title'>Why <b>Full Stack Java Developer </b>Program ?</div>
           
            <div className='flex1'>
                {images.map((image,index)=>(
                    <img key={index} src={image}/>
                ))}
            </div>
            <div className='sen1'>👨‍💻 Who should <strong>join this course</strong>?</div>
            <div className='flex2'>
                {pts.map((image,index)=>(
                    <img key={index} className='img' src={image}/>
                ))}
            </div>
            <div className='box1'>
              <div className='sen3'><strong style={{marginRight:'15px'}}>RKR IT</strong>Training Methodology</div>
              <div className='flex3'>
                {dev.map((image,index)=>(
                    <img key={index} className='img1' src={image}/>
                ))}
            </div>
            </div>
            <div className='flex3'>
                <div>
                  <div className='sen5' >The<strong style={{marginRight:'15px',marginLeft:'15px'}}>RKR IT</strong>Advantage</div>
                  <img width={700} height={200} src='imp1.png'/>
                </div>
                <div>
                  <div className='sen5'>Our  <strong style={{marginRight:'15px',marginLeft:'15px'}}>Full Stack Java</strong>Program Advantages</div>
                  <img width={700} height={200} src='imp2.png'/>
                </div>
            </div>
            <div className='sen1'>Extensive <strong>Placement Assistance 👨🏻‍🎓</strong></div>
            <div className='wrap'>
                <div className='smallbox'>
                  <PeopleOutlinedIcon style={{fontSize:'50px',color:'#fcb900'}}></PeopleOutlinedIcon>
                      <div className='heading'>Dedicated Placements Team</div>
                      <div className="sodi">Our dedicated placements team provides continual support to the trainees successfully competing the necessary pre-requisites right from resume preparation to matching the right candidate to the right company</div>
                </div>
                <div className='smallbox'>
                  <NoteAltOutlinedIcon style={{fontSize:'50px',color:'#00d082'}}></NoteAltOutlinedIcon>
                      <div className='heading'>Resume Preparation</div>
                      <div className="sodi">Dedicated sessions by experts on resume preparation and individual feedback & guidance for preparing the precise resume.</div>
                </div>
                <div className='smallbox'>
                  <QuestionAnswerOutlinedIcon style={{fontSize:'50px',color:'#cf2e2e'}}></QuestionAnswerOutlinedIcon>
                      <div className='heading'>Individual Technical Mock Interviews by Real Time Experts</div>
                      <div className="sodi">Explaining the concepts and their application effectively is as important as understanding and assimilating the concepts during the program.</div>
                </div>
                <div className='smallbox'>
                  <HowToRegOutlinedIcon style={{fontSize:'50px',color:'#0693e3'}}></HowToRegOutlinedIcon>
                      <div className='heading'>Individual HR Mock Interviews by Real Time Experts</div>
                      <div className="sodi">These individual HR Mock Interviews provide the aspirants with an opportunity to practice for an interview and receive feedback on their interviewing skills.</div>
                </div>
                <div className='smallbox'>
                  <EmojiEventsOutlinedIcon style={{fontSize:'50px',color:'#9b51e0'}}></EmojiEventsOutlinedIcon>
                      <div className='heading'>Resume Mapping, Job Application & Recruitment Process</div>
                      <div className="sodi">Our successful placement assistance roots from our transparent and personalized approach towards every Job Opportunity and Job Applicant.</div>
                </div>
                <div className='smallbox'>
                  <BusinessCenterOutlinedIcon style={{fontSize:'50px',color:'#00d082'}}></BusinessCenterOutlinedIcon>
                      <div className='heading'>Placement & On-boarding</div>
                      <div className="sodi">Our placements team facilitates a steady and standard communication between the company and the selected trainee filling any voids thereby ensuring a smooth on-boarding of the selected candidates</div>
                </div>
            </div>
            <div className='sen1'>What do the <strong>Students</strong> say About us?</div>
            <div className='review'>
                <div className='smallbox'>
                     <img src='person1.png'></img>
                    <div className='sodi'>I had very good experience learning from RKR IT. I had enrolled in Full Stack Java Course, So based on my personal experience trainers at RKR IT are highly experienced trainers who possess many years of industry experience.</div>
                    <div style={{marginTop:'20px'}}>- Kishore</div>
                </div>
                <div className='smallbox'>
                     <img src='person2.png'></img>
                    <div className='sodi'>I had very good experience learning from RKR IT. I had enrolled in Full Stack Java Course, So based on my personal experience trainers at RKR IT are highly experienced trainers who possess many years of industry experience.</div>
                    <div style={{marginTop:'20px'}}>- Lakshmi</div>
                </div>
                <div className='smallbox'>
                     <img src='person3.png'></img>
                    <div className='sodi'>I had very good experience learning from RKR IT. I had enrolled in Full Stack Java Course, So based on my personal experience trainers at RKR IT are highly experienced trainers who possess many years of industry experience.</div>
                    <div style={{marginTop:'20px'}}>- Ram</div>
                </div>
            </div>
            

           </div>
        </>
      );
}