import React, { useState } from 'react';
import { HiXCircle } from 'react-icons/hi';
import { ScheduleMeeting } from 'react-schedule-meeting';

const availableTimeSlots = [
	{
		id: 'pickup',
		startTime: `Sat Jun 03 2023 09:00:00 GMT+0100 (West Africa Standard Time)`,
		endTime: `Sat Jun 03 2023 17:00:00 GMT+0100 (West Africa Standard Time)`,
	},
	{
		id: 'pickup',
		startTime: `Sat Jun 10 2023 15:00:00 GMT+0100 (West Africa Standard Time)`,
		endTime: `Sat Jun 10 2023 17:00:00 GMT+0100 (West Africa Standard Time)`,
	},
	{
		id: 'pickup',
		startTime: 'Mon Jun 05 2023 14:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Mon Jun 05 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'Start project',
		startTime: 'Tue Jun 06 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Tue Jun 06 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'Discuss ideas',
		startTime: 'Wed Jun 07 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Wed Jun 07 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'Start building',
		startTime: 'Thu Jun 08 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Thu Jun 08 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'Test product',
		startTime: 'Fri Jun 09 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Fri Jun 09 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'Submit project',
		startTime: 'Sat Jun 19 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Sat Jun 19 2023 17:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Sun Sep 11 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Sun Sep 11 2023 10:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Sat Jun 24 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Sat Jun 24 2023 10:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Sat Jul 08 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Sat Jul 08 2023 10:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Wed Jul 19 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Wed Jul 19 2023 10:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Tue Aug 29 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Tue Aug 29 2023 12:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Mon Aug 07 2023 10:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Mon Aug 07 2023 12:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Mon Aug 19 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Mon Aug 19 2023 12:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Mon Aug 26 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Mon Aug 26 2023 11:00:00 GMT+0100 (West Africa Standard Time)',
	},
	{
		id: 'pickup',
		startTime: 'Mon Aug 17 2023 09:00:00 GMT+0100 (West Africa Standard Time)',
		endTime: 'Mon Aug 17 2023 12:00:00 GMT+0100 (West Africa Standard Time)',
	},
];

const Calendar = () => {
	const [showdate, setShowdate] = useState(false);
	const handleTimeslotClicked = (startTimeEventEmit) => {
		// setShowdate(startTimeEventEmit);
		console.log(startTimeEventEmit);
		startTimeEventEmit.resetDate();
		startTimeEventEmit.resetSelectedTimeState();
		// alert(`Time selected:${startTimeEventEmit}`);
	};
	return (
		<div className="p-1 mt-8 md:mx-2 py-10 h-screen relative">
			<h3 className="text-center text-xl md:text-2xl font-semibold m-4 z-20 relative w-8/12 mx-auto text-green-500">
				Waste Collection Schedule
			</h3>
			<div>
				<ScheduleMeeting
					borderRadius={10}
					primaryColor="#228e01"
					eventDurationInMinutes={30}
					availableTimeslots={availableTimeSlots}
					selectedDateDayTitleFormatString="cccc, LLLL do"
					startTimeFormatString="h:mm a"
					onStartTimeSelect={handleTimeslotClicked}
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
