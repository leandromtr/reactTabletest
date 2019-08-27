import React, {Fragment} from 'react'
import AboutInfo from '../components/AboutInfo'
import AboutGroupList from '../components/AboutGroupList'

export default function Viaturas() {
    return (
      <Fragment>
        <div className="MuiPaper-root MuiPaper-elevation2 MuiPaper-rounded">
          <AboutInfo/>
          <AboutGroupList/>
        </div>  
      </Fragment>
    )
}