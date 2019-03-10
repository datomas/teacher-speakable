import React from 'react'
import {
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Button from "../components/CustomButton.js";
import { useStore, useActions } from 'easy-peasy';


function Entities() {

  const userData = useStore(state => state.user.items);

  const createEntity = useActions(action => action.entity.create);

  const handleSubmit = (event) => {
    
    const data = {
      form:{
        name: event.target.name.value,
        prefix: event.target.prefix.value,
        manage_students: (event.target.provider.value === "student") ? true:false,
        manage_teachers: (event.target.provider.value === "teacher") ? true:false,
        default_email: event.target.default_email.value,
        default_lang: event.target.default_lang.value,
        default_timezone: event.target.default_timezone.value,
        managed_by_id: userData.user.entity_id  
      },
      token: userData.token.access_token
    }

    event.preventDefault();

    (async() => {
      console.log(await createEntity(data, userData));
    })();

  };

  const html = <div className="content">
    <div className="calendar-container">
      <form onSubmit={handleSubmit}>
      <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="provider">Select Provider</Label>
            <Input type="select" name="provider" id="provider" >
              <option value="student">Student Provider</option>
              <option value="teacher">Teacher Provider</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="name">Company Name</Label>
            <Input type="text" id="name" placeholder="Speakable Me, Kidsong etc"/>
          </FormGroup>
        </div>
        
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="name">Company Prefix <small>used in Invoice and Orders</small></Label>
            <Input type="text" id="prefix" placeholder="KS, SM, RSY"/>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="default_email">Default Email</Label>
            <Input type="name" id="default_email" name="default_email" placeholder="speakable@yopmail.com"/>
          </FormGroup>
        </div>
        
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="default_timezone">Default Timezone</Label>
            <Input type="select" name="default_timezone" id="default_timezone">
              <option value="Asia/Manila">Manila</option>
              <option value="Asia/Shanghai">Shanghai</option>
              <option value="Asia/Tokyo">Tokyo</option>
            </Input>
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="default_lang">Default Language</Label>
            <Input type="select" name="default_lang" id="default_lang" >
              <option value="en">English</option>
              <option value="zh-cn">Chinese</option>
            </Input>
          </FormGroup>
        </div>
        <Button type="submit" color="primary">Save</Button>
      </form>        
      <br />
      <br />
    </div>
  </div>
  return html;
}


export default Entities