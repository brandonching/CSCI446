import React from "react";
import PropTypes from "prop-types";

class PokemonCard extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    newName: PropTypes.string.isRequired,
    showStats: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      newName: this.props.newName,
    };
  }

  // Function to handle onClick event for the "Update" button
  handleUpdate = () => {
    const { newName } = this.state;
    this.props.onUpdate(newName);
  };

  render() {
    const { name, imageUrl, type, stats } = this.props.data;
    const { showStats } = this.state;

    return (
      <div
        className="card"
        style={{ margin: "10px", width: "300px", height: "auto" }}
      >
        <div className="card-header">
          <p className="card-header-title">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <button
            className="card-header-icon"
            aria-label="more options"
            onClick={this.props.onDelete}
          >
            <div className="delete"></div>
          </button>
        </div>
        <div className="card-image">
          <figure className="image is-square">
            <img src={imageUrl} alt={`${name}`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="has-text-left" id="type">
              Type: {type}
            </p>
            {this.props.showStats && (
              <>
                <p className="has-text-left">Stats:</p>
                <ul>
                  {Object.entries(stats).map(([stat, value]) => (
                    <li
                      className="has-text-left"
                      key={stat}
                      id={stat.toLowerCase()}
                    >
                      {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <footer className="card-footer">
          <input
            id="newName"
            placeholder={name}
            value={this.state.newName}
            onChange={(e) => this.setState({ newName: e.target.value })}
          />
          <a className="card-footer-item" onClick={this.handleUpdate}>
            Update
          </a>
        </footer>
      </div>
    );
  }
}

export default PokemonCard;
