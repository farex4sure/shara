export const menuLinks = [
	{ name: 'Dashboard', link: './dashboard', icon: 'home' },
	{ name: 'Progress', link: './chat', icon: 'chatbox-ellipses-outline' },
	{ name: 'Schedule', link: './calendar', icon: 'calendar' },
	{ name: 'Wallet', link: './wallet', icon: 'wallet' },
	{ name: 'Profile', link: './profile', icon: 'person' },
	{ name: 'Setting', link: './#', icon: 'settings' },
	{ name: 'About', link: './about', icon: 'information-circle' },
];
export const newLinks = [
	{ name: 'Log in', link: './', icon: 'log-out' },
	{ name: 'Sign up', link: './signin', icon: 'person-add-outline' },
	{ name: 'About', link: './about', icon: 'information-circle' },
];

export const locations = [
	{
		id: 0,
		title: 'kano',
		name: 'Mr. Monday K.',
		phone: '+23409128562',
		address: 'No. 63, tarauni, Kano State',
		latitude: 11.9630456,
		longitude: 8.55034210353827,
	},
	{
		id: 1,
		title: 'NSR',
		name: 'Mr. john Doe',
		phone: '+23409123456',
		address: 'No. 57, Ungogo, Kano State',
		latitude: 12.0001383,
		longitude: 8.5226245,
	},
	{
		id: 2,
		title: 'MIJ',
		name: 'Mrs. Mary Sue',
		phone: '+234912345690',
		address: 'No. 57, Minjibir, Kano State',
		latitude: 12.17485215,
		longitude: 8.65940249296704,
	},
	{
		id: 3,
		title: 'UGG',
		name: 'Mr. james F.',
		phone: '+23409123456',
		address: 'No. 57, dakata, Nassarawa, Kano State',
		latitude: 13.08420585,
		longitude: 8.731907617772,
	},
	{
		id: 3,
		title: 'MJk',
		name: 'Mr. Aliyu B.',
		phone: '+234091945680',
		address: 'No. 87, bata, Nassarawa, Kano State',
		latitude: 12.0820585,
		longitude: 8.6911307617772,
	},
	{
		id: 3,
		title: 'UGG',
		name: 'Mrs. Lovely K.',
		phone: '+23409123456',
		address: 'No. 57, MM way, Nassarawa, Kano State',
		latitude: 14.080585,
		longitude: 8.6319113076172,
	},
	{
		id: 3,
		title: 'Musa',
		name: 'Mr. Musa F.',
		phone: '+2340912345600',
		address: 'No. 57, dakata, Nassarawa, Kano State',
		latitude: 12.08420585,
		longitude: 8.631911307772,
	},
	{
		id: 3,
		title: 'AY',
		name: 'Mr. Auwal B.',
		phone: '+23409123456',
		address: 'No. 57, dakata, Hotoro, Kano State',
		latitude: 12.084285,
		longitude: 7.63191130172,
	},
	{
		id: 3,
		title: 'BY',
		name: 'Mr. Luis J.',
		phone: '+23409123456',
		address: 'No. 57, dakata, Zoo road, Kano State',
		latitude: 12.08420585,
		longitude: 8.63819113074372,
	},
	{
		id: 3,
		title: 'UGG',
		name: 'Mr. james F.',
		phone: '+23409123456',
		address: 'No. 57, dakata, Nassarawa, Kano State',
		latitude: 12.02420585,
		longitude: 8.31911302,
	},
];
// // Wastes
export const plasticWRate = 12;
export const metalWRate = 15;
export const generalWRate = 10;
export const organicWRate = 13;
export const NonRWRate = 12;

export const wasteInfo = [
	{
		name: 'Metal Waste',
		desc: 'This can be found in various forms throughout your home. Most metals can be recycled. Consider taking these items to a scrap yard or your closest Brisbane recycling depot to dispose of this waste type properly.',
		color: 'gray-500',
		hover: 'gray-700',
	},
	{
		name: 'Plastic Waste',
		desc: 'This consists of bags, containers, jars, bottles and many other products that can be found in your household. Plastic is not biodegradable, but many types of plastic can be recycled. Plastic should not be mixed in with your regular waste, it should be sorted and placed in your recycling bin.',
		color: 'blue-500',
		hover: 'blue-700',
	},
	{
		name: 'General Waste',
		desc: 'Solid rubbish can include a variety of items found in your household along with commercial and industrial locations.',
		color: 'yellow-500',
		hover: 'yellow-700',
		types: [
			{
				papers:
					'This includes packaging materials, newspapers, cardboard and other products. Paper can easily be recycled and reused so make sure to place them in your recycling bin or take them to your closest Brisbane recycling depot.',
			},
			{
				ceramics:
					'These items can easily be recycled. Look for special glass recycling bins and bottle banks to dispose of them correctly.',
			},
			{
				Liquid:
					'Liquid waste is commonly found both in households as well as in industries. This waste includes dirty water, organic liquids, wash water, waste detergents and even rainwater. n/ You should also know that liquid waste can be classified into point and non-point source waste. All manufactured liquid waste is classified as point source waste. On the other hand, natural liquid waste is classified as non-point source waste.',
			},
		],
	},
	{
		name: 'Organic Waste',
		desc: 'Organic waste is another common household. All food waste, garden waste, manure and rotten meat are classified as organic waste. Over time, organic waste is turned into manure by microorganisms. However, this does not mean that you can dispose of them anywhere.',
		color: 'green-500',
		hover: 'green-700',
	},
	{
		name: 'Non Recyclable Waste',
		desc: 'Non-Recyclable waste means all garbage, and other refuse not defined as recyclable materials',
		color: 'red-500',
		hover: 'red-700',
	},
];
// {latitude: 11.934642234731038, longitude: 8.664024557408215, address: 'No. 71, Kano State', id: 0, title: 'Location 0', …}
// 1
// :
// {latitude: 12.175891743720342, longitude: 8.499226381211377, address: 'No. 77, Kano State', id: 1, title: 'Location 1', …}
// 2
// :
// {latitude: 11.995030288347941, longitude: 8.45087206353832, address: 'No. 13, Kano State', id: 2, title: 'Location 2', …}
// 3
// :
// {latitude: 11.903094207062141, longitude: 8.475209960638292, address: 'No. 25, Kano State', id: 3, title: 'Location 3', …}
// 4
// :
// {latitude: 11.867764004064608, longitude: 8.55683098016165, address: 'No. 27, Kano State', id: 4, title: 'Location 4', …}
// 5
// :
// {latitude: 12.158909947793312, longitude: 8.72551477302, address: 'No. 65, Kano State', id: 5, title: 'Location 5', …}
// 6
// :
// {latitude: 11.810677695658033, longitude: 8.6771302971793, address: 'No. 15, Kano State', id: 6, title: 'Location 6', …}
// 7
// :
// {latitude: 12.150799668156745, longitude: 8.622626686997858, address: 'No. 41, Kano State', id: 7, title: 'Location 7', …}
// 8
// :
// {latitude: 11.905976551436538, longitude: 8.714601312363605, address: 'No. 23, Kano State', id: 8, title: 'Location 8', …}
// 9
// :
// {latitude: 12.13631949859677, longitude: 8.525060189791777, address: 'No. 75, Kano State', id: 9, title: 'Location 9', …}
// 10
// :
// {latitude: 12.09004524723355, longitude: 8.730795970511268, address: 'No. 14, Kano State', id: 10, title: 'Location 10', …}
// 11
// :
// {latitude: 11.873437540224108, longitude: 8.703181812888756, address: 'No. 62, Kano State', id: 11, title: 'Location 11', …}
// 12
// :
// {latitude: 12.052755425750517, longitude: 8.76829399055369, address: 'No. 51, Kano State', id: 12, title: 'Location 12', …}
// 13
// :
// {latitude: 11.910798749472937, longitude: 8.565820950924586, address: 'No. 30, Kano State', id: 13, title: 'Location 13', …}
// 14
// :
// {latitude: 11.901053850875238, longitude: 8.446110334595875, address: 'No. 56, Kano State', id: 14, title: 'Location 14', …}
// 15
// :
// {latitude: 12.096601325217456, longitude: 8.493711452054754, address: 'No. 6, Kano State', id: 15, title: 'Location 15', …}
// 16
// :
// {latitude: 11.922814147266275, longitude: 8.582470779786906, address: 'No. 63, Kano State', id: 16, title: 'Location 16', …}

// {latitude: 11.977962516964018, longitude: 8.561887780786694, address: 'No. 76, Kano State', id: 17, title: 'Location 17', …}
// {latitude: 11.872079789723976, longitude: 8.777334856783078, address: 'No. 63, Kano State', id: 18, title: 'Location 18', …}
// {latitude: 11.891178427194033, longitude: 8.547174117055828, address: 'No. 57, Kano State', id: 19, title: 'Location 19', …}

// 0
// : 
// address
// : 
// "No. 74, Kano State"
// id
// : 
// 0
// latitude
// : 
// 10.807293919370082
// longitude
// : 
// 6.538793510790102
// name
// : 
// "Mr. John Doe 0"
// phone
// : 
// "+234091215842"
// title
// : 
// "Location 0"
// [[Prototype]]
// : 
// Object
// 1
// : 
// {latitude: 11.08621580814066, longitude: 6.4019177132432326, address: 'No. 91, Kano State', id: 1, title: 'Location 1', …}
// 2
// : 
// {latitude: 11.05429908411839, longitude: 6.742044040555878, address: 'No. 9, Kano State', id: 2, title: 'Location 2', …}
// 3
// : 
// {latitude: 11.055186247241648, longitude: 6.403878531442953, address: 'No. 7, Kano State', id: 3, title: 'Location 3', …}
// 4
// : 
// {latitude: 10.958313956547435, longitude: 6.795017248437714, address: 'No. 72, Kano State', id: 4, title: 'Location 4', …}
// 5
// : 
// {latitude: 10.952206180139134, longitude: 6.5693757655817855, address: 'No. 29, Kano State', id: 5, title: 'Location 5', …}
// 6
// : 
// {latitude: 10.910814350855002, longitude: 6.407436329348659, address: 'No. 38, Kano State', id: 6, title: 'Location 6', …}
// 7
// : 
// {latitude: 10.948808902994253, longitude: 6.436198557093228, address: 'No. 54, Kano State', id: 7, title: 'Location 7', …}
// 8
// : 
// {latitude: 10.947557489944494, longitude: 6.623461869854374, address: 'No. 76, Kano State', id: 8, title: 'Location 8', …}
// 9
// : 
// {latitude: 11.11886548247505, longitude: 6.63424783248842, address: 'No. 26, Kano State', id: 9, title: 'Location 9', …}
// 10
// : 
// {latitude: 10.825882783453146, longitude: 6.791810280683648, address: 'No. 78, Kano State', id: 10, title: 'Location 10', …}
// 11
// : 
// {latitude: 10.952496377478935, longitude: 6.707293492755655, address: 'No. 1, Kano State', id: 11, title: 'Location 11', …}
// 12
// : 
// {latitude: 10.91542868347988, longitude: 6.6931608740942, address: 'No. 81, Kano State', id: 12, title: 'Location 12', …}
// 13
// : 
// {latitude: 10.921546140433879, longitude: 6.618712062457874, address: 'No. 63, Kano State', id: 13, title: 'Location 13', …}
// 14
// : 
// {latitude: 10.851002177433264, longitude: 6.6804754085776725, address: 'No. 19, Kano State', id: 14, title: 'Location 14', …}
// 15
// : 
// {latitude: 11.149738241625768, longitude: 6.701359112563147, address: 'No. 71, Kano State', id: 15, title: 'Location 15', …}
// 16
// : 
// {latitude: 11.15935101828475, longitude: 6.77604267456658, address: 'No. 42, Kano State', id: 16, title: 'Location 16', …}
// 17
// : 
// {latitude: 11.016322082205644, longitude: 6.602302191769208, address: 'No. 49, Kano State', id: 17, title: 'Location 17', …}
// 18
// : 
// {latitude: 10.928165841730499, longitude: 6.633949722341965, address: 'No. 50, Kano State', id: 18, title: 'Location 18', …}
// 19
// : 
// {latitude: 11.098825590761408, longitude: 6.541629164661451, address: 'No. 24, Kano State', id: 19, title: 'Location 19', …}
// length
// : 
// 20