import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { API_KEY, GOOGLE_MAP_API_URL, HOST_URL, GOOGLE_PLACE_API_URL } from '../../shared/constant';
import axios from 'axios';
import "./MyfilterListExample.scss"
import location from "../../assets/images/location-icon.svg"



function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function MyfilterListExample() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);
  const [zzzz, setzzzz] = React.useState(true);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWIIb5rlIPoxCKRCQlueENTkj2KcniU1I&libraries=places',
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }




  React.useEffect(() => {
    getMyLocation();

  }, [])

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation
    if (location) {
      location.getCurrentPosition((position) => {
        console.log('Lat => ', {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        axios.get(
          `${GOOGLE_MAP_API_URL}?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`,
          {
            headers: {
              'content-type': 'application/json',
            }
          }).then(res => {
            console.log('res sejal => ', res)
            // setValue(res.data.results)
            setInputValue(res.data.results[0].formatted_address);
            console.log(res.data.results[0].formatted_address);
          }).catch(err => console.log('err => ', err))
      }, (error) => {
        console.log('error => ', error);
      })
    }
  }



  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    [],
  );



  React.useEffect(() => {

    getAddressHandler()


  }, [value, inputValue, fetch]);

  const getAddressHandler = () => {
    console.log("SSSSS")
    let active = true;
    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
        if (zzzz) {
          setValue(newOptions[0]);
          setzzzz(false)
        }

      }
    });

    return () => {
      active = false;
    };

  }


  const callTwoFunction = () => {
    getMyLocation();
    getAddressHandler();
    setzzzz(true)

  }


  return (
    <React.Fragment>
      <div className="location-input-wrapper d-flex align-items-center">
        <div className="location-button">
          <button onClick={callTwoFunction}>
            <img src={location} alt="Near_Me" />
          </button>

        </div>
        <Autocomplete
          id="google-map-demo"
          getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions

          value={value}
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <>
              <TextField {...params} label="Location" variant="standard" fullWidth />

            </>
          )}

          renderOption={(option) => {

            const matches = option.structured_formatting.main_text_matched_substrings;

            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [match.offset, match.offset + match.length]),
            );

            return (
              <React.Fragment>
<div style={{ width: 500 }}>
                <Grid   style={{ width: 500 }}>
                  <Grid item>
                  </Grid >
                  <Grid item xs style={{ width: 500 }}>
                    {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                        {part.text}
                      </span>
                    ))}

                    <Typography variant="body2" color="textSecondary" style={{ width: 500 }}>
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
               </div>
              </React.Fragment>
            );
          }}
        />
      </div>
      {/* {JSON.stringify(inputValue)} */}
    </React.Fragment>
  );
}
