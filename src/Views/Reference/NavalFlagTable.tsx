import React, { Component } from 'react';
import { NavalFlags, CharacterImage } from 'puzzle-lib';
import { Table } from 'react-bootstrap';
import './NavalFlagTable.scss';

class NavalFlagTable extends Component {
  public render() {
    return (
      <div className="NavalFlagTable">
        <div className="NavalFlagTable-content">
          <Table striped={true} responsive={true}>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows(NavalFlags.instance.entries)}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  private renderRows(data: CharacterImage[]) {
    return data.map((value: CharacterImage) => {
      const dataUri =
        `data:image/svg+xml,${encodeURIComponent(value.image.render())}`;
      return (
        <tr key={value.character}>
          <td className="flagCharacter">{value.character}</td>
          <td>
            <img className="flagImage" src={dataUri} alt={value.character} />
          </td>
        </tr>
      );
    });
  }
}

export default NavalFlagTable;
