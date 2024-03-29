import './CourseList.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';


export default function CourseList()
{      const arr=[1,2,3,4,5,6,7,8,9,10];
        return (
            <>
            <div className='list-body'>
                <div className='list-title'>
                    <img src="java2.webp" className='list-image1' />
                    <div>
                        <div className='list-sub'>Java Programming Mcqs Mock Tests</div>
                        <div className='list-subtitle'>10 Mock Tests</div>
                    </div>
                </div>
                
                    <div className='list-cardlist'>
                        { arr.map((item, index) => (
                        <div className='card' key={index}>
                            {(index<8) ?
                            <div className='list-cardsub'>Java Mock Test - {item}</div>:<div className='list-cardsub'>Java Grand Test - {item}</div>
                            }
                            <div className='list-status'>Available for Free</div>
                            <div className='list-smallbox'>
                                <div className="list-flex" style={{marginTop:'30px'}}>
                                    <div className='list-q1'>Questions</div>
                                    <div className='list-value'>50</div>
                                </div>
                                <div className="list-flex">
                                    <div className='list-q1'>Time</div>
                                    <div className='list-value'>75(mins)</div>
                                </div>
                                <div className="list-flex">
                                    <div className='list-q1'>Maximum Marks</div>
                                    <div className='list-value'>100</div>
                                </div>
                            </div>
                            <hr className='list-hr'/>
                            {(index>=5) ? 
                            <div className='list-unlockbtn'>
                                <div className='list-lockname'>Unlock</div>
                                <LockOpenIcon style={{height:'15px',marginTop:'5px'}}></LockOpenIcon>
                            </div> : <div className='list-unlockbtn'>
                                <div className='list-lockname' style={{marginLeft:'100px'}}>Free</div>
                                
                            </div>}
                        </div>
                        ))}
                </div>
            </div>
            
            </>
        );
}