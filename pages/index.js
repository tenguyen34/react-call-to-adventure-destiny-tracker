import Head from 'next/head'
import React, { useState } from 'react';
import IconCounter from '../components/iconCounter'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

export default function Home() {
  // TODOs for improvement
    // handle destiny story card special effects
    // have decrease onClick reflect in destiny score
    // css fixes
    // have reset button rerender components

  const [destinyScore, setDestinyScore] = useState(-1);  // does default case on page load
  const [revealDestiny, setRevealDestiny] = useState(false);
  const eventhandler = (type, data) => {
    switch (type) {
      case "ability":
        break;
      case "story":
        addStoryScore(data);
        break;
      default:
        // covers 'normal case'
        addNormalScore();
    }
  }

  const addStoryScore = (data) => {
    if (data === 2 || data === 3) {
      setDestinyScore(destinyScore + 2)
    } else if (data === 4) {
      setDestinyScore(destinyScore + 4)
    }
  }

  const addNormalScore = () => {
    setDestinyScore(destinyScore + 1)
  }

  const reset = () => {
    window.location.reload();
  }

  const showDestinyScore = () => {
    setRevealDestiny(!revealDestiny);
  }

  return (
    <div>
      <Head>
        <title>Call To Adventure - Destiny Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <div>
            <IconCounter type="ability" onClick={eventhandler} icon="icons/00strength.png" />
            <IconCounter type="ability" onClick={eventhandler} icon="icons/01dexterity.png" />
            <IconCounter type="ability" onClick={eventhandler} icon="icons/02constitution.png" />
            <IconCounter type="ability" onClick={eventhandler} icon="icons/03intelligence.png" />
            <IconCounter type="ability" onClick={eventhandler} icon="icons/04wisdom.png" />
            <IconCounter type="ability" onClick={eventhandler} icon="icons/05charisma.png" />
          </div>
          <div>
            <IconCounter type="story" onClick={eventhandler} icon="icons/06divinity.png" />
            <IconCounter type="story" onClick={eventhandler} icon="icons/07justice.png" />
            <IconCounter type="story" onClick={eventhandler} icon="icons/08nature.png" />
            <IconCounter type="story" onClick={eventhandler} icon="icons/09arcana.png" />
            <IconCounter type="story" onClick={eventhandler} icon="icons/10royalty.png" />
            <IconCounter type="story" onClick={eventhandler} icon="icons/11villainy.png" />
          </div>
          <div>
            <IconCounter type="normal" onClick={eventhandler} icon="icons/12triumph.png" />
            <IconCounter type="normal" onClick={eventhandler} icon="icons/13tragedy.png" />
            <IconCounter type="normal" onClick={eventhandler} icon="icons/14exp.png" />
            <IconCounter type="normal" onClick={eventhandler} icon="icons/15hero.png" />
            <IconCounter type="normal" onClick={eventhandler} icon="icons/16antihero.png" />
          </div>
        </Grid>

        <Grid
          container
          justify="space-evenly"
        >
          <Button size="large" variant="contained" onClick={reset} >Reset</Button>
          <Button color="secondary" size="large" variant="contained" onClick={showDestinyScore}>Calculate</Button>
          {revealDestiny && <div>{destinyScore}</div>}
        </Grid>
      </div>
    </div>
  )
}
