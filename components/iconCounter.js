import React, { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from './iconCounter.module.css';

export default function IconCounter(props) {
  const [count, setCount] = React.useState(0);
  const [action, setAction] = React.useState("");
  const [disabled, setDisabled] = useState(true);

  React.useEffect(() => {
    if (props.onClick) {
      props.onClick(props.type, action, count)
    }
  }, [props.type, action, count])

  const increasePoint = () => {
    setCount(count + 1);
    setAction("increase");
    setDisabled(false);
  }

  const decreasePoint = () => {
    if (count === 0 || count === 1) {
      setDisabled(true)
    }
    setCount(Math.max(count - 1, 0));
    setAction("decrease");
  }

  return(
    <div className={styles.group}>
      <img className={styles.icon} src={props.icon} />
      <ButtonGroup>
        <Button
          aria-label="decrease"
          disabled={disabled}
          onClick={decreasePoint}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <TextField
          className={styles.textField}
          InputProps={{
            readOnly: true,
          }}
          type="number"
          value={count}
          variant="outlined"
        />
        <Button
          aria-label="increase"
          onClick={increasePoint}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  )
}
