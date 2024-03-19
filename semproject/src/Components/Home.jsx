import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function HorizontalList() {
  return (
    <Box aria-label="My site" sx={{ flexGrow: 1,backgroundColor:'#C68484',height:100}}>
      <List role="menubar" orientation="horizontal" sx={{ width: '100%' }}>
        <ListItem role="none" sx={{ flexGrow: 1,height:100, }}>
          <ListItemButton
            role="menuitem"
            component="a"
            aria-label="Home"
            sx={{ width: '100%'}}
          >
           HOME-CARE
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ flexGrow: 1}}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
            sx={{ width: '100%' }}
          >
            <Home />SERVICES
          </ListItemButton>
        </ListItem>
        <ListDivider orientation="vertical" />
        <ListItem role="none" sx={{ flexGrow: 1 }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="/login"
            sx={{ width: '100%' }}
          ><LoginIcon/>
            Login
          </ListItemButton>
        </ListItem>
        <ListDivider orientation="vertical" />
        <ListItem role="none" sx={{ flexGrow: 1 }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="/signup"
            sx={{ width: '100%' }}
            
          >  <Person />
           Signup
          
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{ flexGrow: 1, marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            aria-label="Profile"
            sx={{ width: '100%' }}
          ><InfoIcon/>
            ABOUT US
          </ListItemButton>
        </ListItem>
      </List>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{ backgroundColor:'',padding: '100px',marginTop:'10px',width:'1500px', borderRadius: '10px' }}>
          <img src='https://4.imimg.com/data4/WB/PP/MY-11289200/ddd-500x500.jpg' style={{height:'290px',marginTop:'20px',marginLeft:'2px',borderRadius:'20px'}}></img>
          <p style={{textAlign:'center',marginLeft:'450px',fontSize:'25px',marginTop:'-280px',fontFamily:'cursive'}}>Are you searching for exceptional home care services in Irvine, Newport Beach or neighboring Orange County areas? 
          Look no further! At Golden Age Companions, we're dedicated to ensuring your loved ones lead independent, fulfilling lives right in the comfort of their homes. 
          Our highly trained caregivers provide unparalleled support, allowing seniors to maintain control while offering peace of mind to your family. With a heartfelt commitment 
          to compassion and a mission to uplift spirits, we go beyond standard care, striving to create joy-filled moments and brighter tomorrows for every senior we serve. 
          Choose Golden Age Companions today and discover the difference where care meets compassion,
           and every moment counts!</p>
        </div>
      </div>
      
    </Box>
    
  );
}
