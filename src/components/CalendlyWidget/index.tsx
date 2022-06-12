import React from 'react'
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {

    interface IStyle {
        minWidth: string,
        height: string
    };

    const style: IStyle = {
        minWidth: '320px',
        height: '630px'
    };

  return (
    <div>
        <InlineWidget url='https://calendly.com/emredemirel39/demo-clone' />
    </div>
  )
}

export default CalendlyWidget

{/* <div className="calendly-inline-widget" data-url="https://calendly.com/emredemirel39?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=9d00ff" style={style}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}