import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;

		if(selectedBuilding === 0){
			return(
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			)
		}
		
		const selectedBuildingData = data.find((building) => building.id === selectedBuilding)


		return (
			<div>
				<b>Code: {' '}</b>
				{selectedBuildingData.code}
				<br/>
				<b>Name: {' '}</b>
				{selectedBuildingData.name}
				<br/>
				<b>Address: {' '}</b>
				{selectedBuildingData.address}
				<br/>
				<b>Coordingates: {' '}</b>
				<br/>
				<b>Latitude: {' '}</b>
				{selectedBuildingData.coordinates.latitude}
				<br/>
				<b>Longitude: {' '}</b>
				{selectedBuildingData.coordinates.longitude}
			</div>
		);
	}
}
export default ViewBuilding;
