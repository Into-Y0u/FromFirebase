import React, { useState } from 'react';
import './ReactContacts.css';

const ReactContacts = () => {

    const [users, setUsers] = useState({
        name : "",
        email: "" ,
        phone :"",
        address:"",
        message:"",
    });

    let name , value ;

    const getUserData = (event) => {
        name  = event.target.name ;
        value = event.target.value ;

        setUsers({ ...users   , [name]: value   });

    }

    const postData = async (e) => {
        e.preventDefault();
        const { name ,email,phone,address,message} = users ;

        if(   name  && email && phone && address && message ) {

            const res = await fetch("https://task-tracker-5361d-default-rtdb.firebaseio.com/formdb.json" , {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify({
                    name ,
                    email ,
                    phone ,
                    address,
                    message,

                })

            }   ) ;
            if (res) {
                setUsers({
                    name : "",
                    email: "" ,
                    phone :"",
                    address:"",
                    message:"",
                });
                alert("dATA SUBMITTED sUCCESSFULLY");

            }
        }
        else {
            alert("PLZ fill all the data");
        }

    }

    return (
        <>
            <div className='appu'>
                <h1>Random Form</h1>
                <form action="" method  = "POST"  >
                    <div>
                        <span> Your Name </span>
                        <input type="text" name = "name" value={users.name}   onChange ={getUserData}  placeholder="eneter your name" autoComplete = "off" required />
                    </div>
                    <div>
                        <span> Your email </span>
                        <input type="text" name = "email" value={users.email}   onChange ={getUserData}  placeholder="eneter your email" autoComplete = "off" required />
                    </div>
                    <div>
                        <span> Your pH NUM </span>
                        <input type="text" name = "phone" value={users.phone}   onChange ={getUserData}  placeholder="eneter your ph num" autoComplete = "off" required />
                    </div>
                    <div>
                        <span> Your ADDress </span>
                        <input type="text" name = "address" value={users.address}   onChange ={getUserData}  placeholder="eneter your address" autoComplete = "off" required />
                    </div>
                    <div>
                        <span> Your msg </span>
                        <input type="text" name = "message" value={users.message}   onChange ={getUserData}  placeholder="eneter your mgs" autoComplete = "off" required />
                    </div>
                    
                    <button  type="submit"  onClick = {postData}   >  Submit</button>
                
                </form>


            </div>
        </>
    )
}

export default ReactContacts
