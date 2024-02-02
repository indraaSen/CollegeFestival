import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import styless from './ListComponent.module.scss';

const ListComponent =()=> {

     
  return (
    <div className={styless['List_div']}>
        <List
            sx={{
                width: '100%',
                border: '1px solid lightgray',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxWidth: '670px',
                maxHeight: '290px',
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
            >
            {<li>
                <ul> 
                    <ListSubheader sx={{background:'lightgray'}}>{`Important Notice`}</ListSubheader>
                    {[0, 1, 2,3,4,5,6,7,8,9,10].map((item) => (
                    
                        <ListItemText primary={`• Hello this is important to tell you that this is dummy data which shows important news ${item}`} />
                    
                    ))}
                </ul>
            </li>
            }
        </List>
    </div>
  );
}

export default ListComponent;