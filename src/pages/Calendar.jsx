import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import { HiXCircle } from 'react-icons/hi';

const events = [
	{ title: 'pickup', date: '2023-06-03' },
	{ title: 'Start project', date: '2023-06-05' },
	{ title: 'Discuss ideas', date: '2023-06-06' },
	{ title: 'Start building', date: '2023-06-07' },
	{ title: 'Test product', date: '2023-06-08' },
	{ title: 'Submit project', date: '2023-06-9' },
	{ title: 'Pick up', date: '2023-06-17' },
	{ title: 'Submit project', date: '2023-06-11' },
	{ title: 'Pick up', date: '2023-06-24' },
	{ title: 'Pick up', date: '2023-07-08' },
	{ title: 'Pick up', date: '2023-07-19' },
	{ title: 'Pick up', date: '2023-08-29' },
	{ title: 'Pick up', date: '2023-08-07' },
	{ title: 'Pick up', date: '2023-09-19' },
	{ title: 'Pick up', date: '2023-09-26' },
	{ title: 'Pick up', date: '2023-10-17' },
];

const Calendar = () => {
	const [showdate, setShowdate] = useState(false);

	const handleDateClick = (arg) => {
		setShowdate(arg.dateStr);
		console.log(arg);
	};
	return (
		<div className="p-1 mt-8 md:mx-2 py-10 h-screen relative">
			<h3 className="text-center text-xl md:text-2xl font-semibold m-4 z-20 relative w-8/12 mx-auto text-green-500">
				Waste Collection Schedule
			</h3>
			<div className="text-sm md:text-lg">
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					events={events}
					dateClick={handleDateClick}
					// eventContent={renderEventContent}
				/>
			</div>
			{showdate ? (
				<div className="bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 flex  z-10 place-items-center duration-500">
					<div className="text-center text-lg bg-green-50 w-10/12 p-4 mx-auto rounded-md shadow-md relative">
						<div className="absolute top-70 right-5 cursor-pointer">
							<HiXCircle
								onClick={() => setShowdate(false)}
								className="h-6 w-6 text-red-400 hover:text-red-500"
							/>
						</div>
						<h5 className="font-semibold text-lg mt-2">Date Information</h5>
						<p className="my-1 p-0">
							Your waste is schedule for {showdate} to {'10:10 am'}
						</p>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
export default Calendar;

// function renderEventContent(eventInfo) {
// 	console.log(eventInfo.timeText);
// 	console.log(eventInfo.event.title);
// 	return (
// 		<>
// 			<b>{eventInfo.timeText}</b>
// 			<i>{eventInfo.event.title}</i>
// 		</>
// 	);
// }
