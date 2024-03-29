
import './Courses.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link} from 'react-router-dom';
const arr1=[
   {
      image:'java2.webp',
      name:'Java Core'

   },
   {
      image:'logo192.png',
      name:'ReactJs'

   }
]
export default function Courses()
{
     return (
        <>
        <div>
            <div className='c-title'>All Test Series</div>
            <div className='c-title1'>Click to view Test Series and mock tests for all groups</div>
            {arr1.map((ele, index) => (
            <div className='c-section' key={index}>
                <div className='c-subject'>
                    <div className='c-smallbox'></div>
                    <img src={ele.image} className='c-image' />
                    <div className='c-sub1'>{ele.name}</div>
                    <div className='c-view'><Link to = "/CourseList">View All</Link><ArrowForwardIosIcon style={{height:'17px',fontWeight:'700',marginLeft:'0px'}}></ArrowForwardIosIcon> </div>
                </div>
                <div style={{display:'flex',gap:'20px'}} >
                    <div className='card'>
                        <img src={ele.image} className='c-image1' />
                        <div className='c-subjectname'>{ele.name} - 1</div>
                         <div className="c-flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Questions</div>
                            <div className='c-value'>50</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Time(mins)</div>
                            <div className='c-value'>75</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Maximum Marks</div>
                            <div className='c-value'>100</div>
                         </div>
                         <button className='c-btn'>ATTEMPT NOW</button>
                    </div>
                    <div className='card'>
                        <img src={ele.image} className='c-image1' />
                        <div className='c-subjectname'>{ele.name} - 2</div>
                         <div className="c-flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Questions</div>
                            <div className='c-value'>50</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Time(mins)</div>
                            <div className='c-value'>75</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Maximum Marks</div>
                            <div className='c-value'>100</div>
                         </div>
                         <button className='c-btn'>ATTEMPT NOW</button>
                    </div>
                    <div className='card'>
                        <img src={ele.image} className='c-image1' />
                        <div className='c-subjectname'>{ele.name} - 3</div>
                         <div className="c-flex" style={{marginTop:'50px'}}>
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Questions</div>
                            <div className='c-value'>50</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Time(mins)</div>
                            <div className='c-value'>75</div>
                         </div>
                         <div className="c-flex">
                            <div style={{fontWeight:'900'}}>.</div>
                            <div className='c-q1'>Maximum Marks</div>
                            <div className='c-value'>100</div>
                         </div>
                         <button className='c-btn'>ATTEMPT NOW</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        
        </>
     );
}