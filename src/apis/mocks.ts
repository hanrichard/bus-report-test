import { rest } from 'msw';

export const busReportsHandler = [
 rest.get('/bus-services-data.json', (req, res, ctx) => {
  return res(
   ctx.json({
      data:[
        {
          organisation:"Sydney Buses",
          date:"27/09/2023",
          busData:[
            {
              "busId":"42612",
              "routeVariant":"891 2 1",
              "deviationFromTimetable":77
            }
          ]
        }
      ]
    
   })
  )}
 )]  

 export const busReportsHandlers = [...busReportsHandler];