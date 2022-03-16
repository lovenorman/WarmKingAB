import React from 'react'

export const ContactForm = () => {
  return (
    <div>
        <h1>New Message</h1>
        <form action="https://formshow.systementor.se/" method="post"></form>
          <div className="form-group">
              <label for="newName">Namn</label>
              <input  type="text" className="form-control" id="newName" placeholder="Namn"/>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email"  className="email" placeholder="example@mail.com"/>
          </div>
          <div className="form-group">
          <label for="newIssue">Ärende</label>
              <input  type="text" className="form-control" id="newÄrende" placeholder="Ärende"/>
          </div>
          <div className="form-group">
            <label for="newMessage">Meddelande</label>
            <textarea id="message" className="message" rows="4" cols="50"/>
          </div><br/>
          <button id="submitNewButton" type="submit" className="btn btn-primary">Submit</button>
        <form/>
    </div>
    )
}
