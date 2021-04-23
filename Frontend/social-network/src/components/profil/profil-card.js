import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import Ava from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../profil/ava1.png";
import {  withStyles } from '@material-ui/core/styles';


export default function Profilcard() {
   
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const   StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.9)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
 
      return (
        <div >
         <Card style={{ width: '70%'  , height : '40%' , position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -90%)', alignItems:"center"}}>
           <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                <Ava  src={Avatar} style={{ height: '150px', width: '150px' }}/>
           </StyledBadge>

           <Card.Body>
            <div style={{ textAlign :'center'}}>
              <Card.Title>Salma Chana</Card.Title>
              <Card.Text> salma@gmail.com</Card.Text>
            </div>
            <br/>
            <Divider/>

            <Paper square>
                <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                 >
                     <Tab label="About me" />
                     <Tab label="My friends" />
                     <Tab label="Posts" />
                </Tabs>
            </Paper>
            <br/>
            <div>
             
            </div>
           </Card.Body>
        </Card>
      </div>
      );
    }
  

 