import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const DropDownComponent = ({getCollegeName} : {getCollegeName: (val:any) => void}) => {
  return (
        <Autocomplete
        id="college-select-list"
        sx={{ width: 300 }}
        options={colleges}
        autoHighlight
        getOptionLabel={(option) => option.collegeName }
        renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        
              {option.collegeName} ({option.code})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a college"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              required
            />
          )}
          onChange={(e,value) => getCollegeName(value?.collegeName)}
        />
      );
    }
    
    interface CollegeType {
      code: string;
      collegeName: string;
      suggested?: boolean;
    }
    
    // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
    const colleges: readonly CollegeType[] = [
      { code: 'kd', collegeName: 'KDK college of Engineering'},
      { code: 'ra', collegeName: 'Ramdeobaba college of Engineering'},
      { code: 'yc', collegeName: 'YCCE college of Engineering'},
      { code: 'pr', collegeName: 'Priyadarshini college of Engineering'},
      
    ];

export default DropDownComponent;