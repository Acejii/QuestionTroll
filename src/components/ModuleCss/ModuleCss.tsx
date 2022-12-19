import React from 'react'
import styles from './modulecss.module.css'

interface Props {
    value?: string
}

const ModuleCss = (props: Props) => {
    const {value} = props
  return (
    <div className={`${styles.module} ${value? styles.value: styles.true}`}>Module css</div>
  )
}

export default ModuleCss