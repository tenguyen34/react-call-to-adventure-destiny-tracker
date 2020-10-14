import React, { useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from './iconCounter.module.css';

export default function IconCounter(props) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (props.onClick) {
      props.onClick(props.type, count)
    }
  }, [props.type, count])

  return(
    <div className={styles.group}>
      <img className={styles.icon} src={props.icon} />
      <ButtonGroup>
        <Button
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
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
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </div>
  )
}
