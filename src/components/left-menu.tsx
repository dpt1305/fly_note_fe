import './left-menu.css';
import { DynamicIcon } from 'lucide-react/dynamic';
import commonStyle from '@/css/common.module.css';


export default function LeftMenu() {
	const notes = [
		{
			icon: 'icon',
			title: 'title1',
		},
		{
			icon: 'icon2',
			title: 'title2',
		}
	]
	return (
		<div className="container-div">
			{/* <div className="container-div">
				<p>sdfasdf</p>
				<p>asfd asdfasfasdf</p>
			</div>
			 */}

			{/* <div className="account-area"></div>

			{/* {
						notes.map((note) => {
							return (
								<div className="notes-area">
									<div className="icon-area"> <p>{note.icon}</p></div>
									<div className="text-area"> <p>{note.title}</p></div>
								</div>
							)
						})
					} */}
			<div className="default-buttons">
				<div className="icon-area"> <DynamicIcon className={commonStyle.center} name="camera" color={"#111111"} size={14} /></div>
				<div className="text-area"> <p>Text</p></div>
			</div>
			<div className="default-buttons">
				<div className="icon-area"> <DynamicIcon className={commonStyle.center} name="alarm-clock" color="red" size={14} /></div>
				<div className="text-area"> <p>Text</p></div>
			</div>

			<div className="notes-area"></div>
		</div>
	)
}