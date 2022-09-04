import { StaticImageData } from 'next/image';

interface Portfolio {
	name: string;
	description: string;
	image?: StaticImageData;
}		

function PortfolioCard(props: Portfolio) {
return (
	<>
		<div className="w-full h-full bg-slate-600 rounded-lg flex flex-col text-white justify-center items-center p-4 m-4">
			<h1 className="text-2xl">{ props.name}</h1>
			<h1 className="text-xl">{ props.description}</h1>
		</div>
	</>
  )
}

export default PortfolioCard