import { Button, Card } from "@mui/material";
import './AfterSubmit.css';

export default function AfterSubmit()
{
    const arr=[1,2];
    const cardWidth = 200 * arr.length + 'px';
    return (
   < >
   <div className="exam">Exam Summary</div>
    <Card variant="outlined" className="cardflex" style={{width:cardWidth}}>
        <div className="section1">
             <div className="col1">
                <div className="section3"> Section Name</div>
                <div className="flex4">
                    <div className="text1">No.of Questions</div>
                    <div className="count">25</div>
                </div>
                <div className="flex4">
                    <div className="text1">Answered</div>
                    <div className="count">25</div>
                </div>
                <div className="flex4">
                    <div className="text1">Not Answered</div>
                    <div className="count">25</div>
                </div>
                <div className="flex4">
                    <div className="text1">Not Visited</div>
                    <div className="count">25</div>
                </div>
                <div className="flex4">
                    <div className="text1">Mark for Review</div>
                    <div className="count">25</div>
                </div>
             </div>
        </div>
        <div className="section2" >
             <div className="col2">
                <div className="subjectname">Java Program</div>
                <div className="num">34</div>
                <div className="num">34</div>
                <div className="num">34</div>
                <div className="num">34</div>
                <div className="num">34</div>
             </div>
        </div>
        
    
    </Card>
    <div className="sen1">Are you sure you want to submit?</div>
    <div className="sen2">You still have 24 unattempted & 0 marked for review questions</div>
    <div className="flex6">
       <Button className="cancelbtn" variant="outlined">Cancel</Button>
       <Button className="submitbtn"variant="contained">Submit Test </Button>
    </div>
   </>
 
    );
}