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
		latitude: 12.08420585,
		longitude: 8.631911307617772,
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
