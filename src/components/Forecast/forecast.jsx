import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import './forecast.css'


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function Forecast({data}) {
    const weekDay = new Date().getDate();
    const forecastDays = WEEK_DAYS.slice(weekDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, weekDay));
    
  
    return (
    <>
     <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather icon" className="small-icon" />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> 

     </>
  );
}
  
   