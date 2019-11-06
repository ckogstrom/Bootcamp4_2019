import React from 'react';

class BuilingList extends React.Component {
	
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const {data, filterText } = this.props;

		const buildingList = data
			.filter(building => {
				return building.name.toLowerCase().indexOf(filterText) >= 0 || building.code.toLowerCase().indexOf(filterText) >=0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td onClick={() => this.props.selectedUpdate(directory.id)}>{directory.code} </td>
						<td onClick={() => this.props.selectedUpdate(directory.id)}> {directory.name} </td>
						<td className = "delete-button" onClick={() => this.props.deleteBuilding(directory.id)}>Delete</td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
