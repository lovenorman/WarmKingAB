import React from 'react'

export const ContactForm = () => {
  return (
    
    <div className="contactform">
        <h1>New Message</h1>
      
        <form action="https://formshow.systementor.se/" method="post"/>
            <div className="form-group">
              <label for="newName">Namn</label>
              <input  type="text" className="form-control" id="newName" placeholder="Namn" name="name"/>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email"  className="form-control" placeholder="example@mail.com" name="email"/>
            </div>
            <div className="form-group">
              <label for="newIssue">Ärende</label>
              <input  type="text" className="form-control" id="newÄrende" placeholder="Ärende" name="issue"/>
            </div>
            <div className="form-group">
              <label for="newMessage">Meddelande</label>
              <textarea id="message" className="form-control" rows="4" cols="50" name="message"/>
            </div><br/>
            <input id="submitNewButton" type="submit" className="btn btn-primary" value="skicka"/>
        <form/>
    </div>
    )
}
