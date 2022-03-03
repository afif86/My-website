import React, { PureComponent } from 'react';

const Progress_bar = ({progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '63%',
        backgroundColor: '#ffd2d3',
        borderRadius: 2,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: `#f44647`,
        borderRadius:2,
        textAlign: 'right'
      }
      
  
    return (
        <div style={Parentdiv}>
          <div style={Childdiv}>
            {/* <span style={progresstext}>{`${progress}%`}</span> */}
          </div>
        </div>
        )
    }
      
    export default Progress_bar;